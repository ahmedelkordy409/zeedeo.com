//@ts-nocheck
import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * Type definitions for Mailchimp configuration and responses
 */
type MailchimpConfig = {
    apiKey: string;
    server: string;
};

type RateLimitData = {
    count: number;
    timestamp: number;
};

type SubscriptionResponse = {
    success: boolean;
    message?: string;
    error?: string;
    details?: Record<string, any>;
};

type MailchimpErrorResponse = {
    status: number;
    title: string;
    detail: string;
    instance: string;
};

// Environment variable validation
const requiredEnvVars = [
    "MAILCHIMP_API_KEY",
    "MAILCHIMP_SERVER",
    "MAILCHIMP_LIST_ID",
];

// Check if all required environment variables are present
const missingEnvVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
);

if (missingEnvVars.length > 0) {
    console.error(
        `Missing required Mailchimp environment variables: ${missingEnvVars.join(
            ", "
        )}`
    );
}

// Initialize mailchimp with proper typing
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY || "",
    server: process.env.MAILCHIMP_SERVER || "",
} as MailchimpConfig);

// Email validation schema with better error messages
const subscriptionSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email address")
        .min(5, "Email is too short")
        .max(100, "Email is too long"),
});

// Rate limiting setup
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_IP = 5;
const ipRequestCounts = new Map<string, RateLimitData>();

/**
 * Handles POST requests for newsletter subscription
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Get client IP for rate limiting with proper fallbacks
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Apply rate limiting with better type safety
        if (ip !== "unknown") {
            const now = Date.now();
            const ipData = ipRequestCounts.get(ip);

            if (ipData) {
                // Reset count if outside window
                if (now - ipData.timestamp > RATE_LIMIT_WINDOW) {
                    ipRequestCounts.set(ip, { count: 1, timestamp: now });
                } else if (ipData.count >= MAX_REQUESTS_PER_IP) {
                    return NextResponse.json(
                        {
                            success: false,
                            error: "Too many subscription attempts. Please try again later.",
                        } as SubscriptionResponse,
                        {
                            status: 429,
                            headers: {
                                "Retry-After": "3600",
                            },
                        }
                    );
                } else {
                    ipRequestCounts.set(ip, {
                        count: ipData.count + 1,
                        timestamp: ipData.timestamp,
                    });
                }
            } else {
                ipRequestCounts.set(ip, { count: 1, timestamp: now });
            }
        }

        // Check for required environment variables
        const listId = process.env.MAILCHIMP_LIST_ID;
        if (
            !listId ||
            !process.env.MAILCHIMP_API_KEY ||
            !process.env.MAILCHIMP_SERVER
        ) {
            console.error("Required Mailchimp environment variables are not set");
            return NextResponse.json(
                {
                    success: false,
                    error: "Server configuration error",
                } as SubscriptionResponse,
                { status: 500 }
            );
        }

        // Parse and validate request body
        let body;
        try {
            body = await request.json();
        } catch (error: any) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid request body",
                } as SubscriptionResponse,
                { status: 400 }
            );
        }

        // Validate input with Zod
        const validationResult = subscriptionSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Validation failed",
                    details: validationResult.error.format(),
                } as SubscriptionResponse,
                { status: 400 }
            );
        }

        const { email } = validationResult.data;

        // Sanitize email to prevent potential injection
        const sanitizedEmail = email.toLowerCase().trim();

        try {
            // Add subscriber to Mailchimp
            await mailchimp.lists.addListMember(listId, {
                email_address: sanitizedEmail,
                status: "subscribed",
            });

            return NextResponse.json(
                {
                    success: true,
                    message: "Successfully subscribed to the newsletter!",
                } as SubscriptionResponse,
                { status: 200 }
            );
        } catch (error: any) {
            // Handle different Mailchimp error cases
            return handleMailchimpError(error);
        }
    } catch (error) {
        console.error("Unexpected error in subscription handler:", error);
        return NextResponse.json(
            {
                success: false,
                error: "An unexpected error occurred. Please try again later.",
            } as SubscriptionResponse,
            { status: 500 }
        );
    }
}

/**
 * Handles various Mailchimp API errors with proper typing
 */
function handleMailchimpError(error: any): NextResponse {
    // Handle Mailchimp errors properly
    if (error.status === 400 && error.response) {
        try {
            const errorData = JSON.parse(
                error.response.text
            ) as MailchimpErrorResponse;

            // Handle "Member Exists" error gracefully
            if (errorData.title === "Member Exists") {
                return NextResponse.json(
                    {
                        success: false,
                        error: "This email is already subscribed to our newsletter.",
                    } as SubscriptionResponse,
                    { status: 400 }
                );
            }

            // Return specific error from Mailchimp
            return NextResponse.json(
                {
                    success: false,
                    error: errorData.detail || errorData.title || "Mailchimp error",
                } as SubscriptionResponse,
                { status: error.status }
            );
        } catch (parseError) {
            // Unable to parse Mailchimp error response
            console.error("Error parsing Mailchimp response:", parseError);
        }
    }

    // Generic error handling with proper status codes
    return NextResponse.json(
        {
            success: false,
            error: "Failed to process subscription. Please try again later.",
        } as SubscriptionResponse,
        { status: 500 }
    );
}

// Clean up expired rate limit entries periodically
// (in a production environment, you would use Redis or similar)
if (typeof setInterval !== "undefined") {
    const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1 hour
    setInterval(() => {
        const now = Date.now();
        for (const [ip, data] of ipRequestCounts.entries()) {
            if (now - data.timestamp > RATE_LIMIT_WINDOW) {
                ipRequestCounts.delete(ip);
            }
        }
    }, CLEANUP_INTERVAL);
}
