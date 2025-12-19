/**
 * Zeedeo Design System - Utility Functions
 * 
 * Helper functions for working with design tokens.
 */

import { colors, gradients, typography, spacing, radius, shadows } from './tokens';

/**
 * Get a color value from tokens
 */
export function getColor(path: string): string {
    const keys = path.split('.');
    let value: unknown = colors;
    for (const key of keys) {
        value = (value as Record<string, unknown>)[key];
    }
    return value as string;
}

/**
 * Get a gradient value from tokens
 */
export function getGradient(name: keyof typeof gradients): string {
    return gradients[name];
}

/**
 * Get a spacing value from tokens
 */
export function getSpacing(size: keyof typeof spacing): string {
    return spacing[size];
}

/**
 * Get a radius value from tokens
 */
export function getRadius(size: keyof typeof radius): string {
    return radius[size];
}

/**
 * Get a shadow value from tokens
 */
export function getShadow(size: keyof typeof shadows): string {
    return shadows[size];
}

/**
 * Get font size from tokens
 */
export function getFontSize(size: keyof typeof typography.fontSize): string {
    return typography.fontSize[size];
}

/**
 * Create CSS custom properties from tokens for use in style objects
 */
export function createStyleVars(vars: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries(vars)) {
        result[`--${key}`] = value;
    }
    return result;
}

/**
 * Combine class names conditionally (similar to clsx but minimal)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
