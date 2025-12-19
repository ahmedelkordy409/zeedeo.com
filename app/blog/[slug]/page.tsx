import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/blog/BlogPost";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getPost(slug: string): Promise<any> {
    const res = await fetch(`https://blog.zeedeo.com/api/articles/${slug}`, {
        method: "GET",
    });
    if (res.ok) {
        const body = await res.json();
        return body?.data;
    }
    return null;
}

async function getPostThumbnail(slug: string): Promise<string | null> {
    const res = await fetch(
        `https://blog.zeedeo.com/api/articles/?populate=%2A&filters[slug][$eq]=${slug}`,
        {
            method: "GET",
            cache: "no-store",
        }
    );
    if (res.ok) {
        const body = await res.json();
        const post = body?.data?.[0];
        return post?.attributes?.thumbnailImage?.data?.attributes?.url || null;
    }
    return null;
}

interface BlogArticlePageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = await params;
    const blogData = await getPost(slug);

    if (!blogData) {
        notFound();
    }

    const thumbnailImage = await getPostThumbnail(slug);

    return (
        <div className="min-h-screen bg-[#1a0a1a] font-sans">
            <Header />
            <main className="pt-[72px]">
                <BlogPost data={blogData} thumbnail={thumbnailImage || ""} />
            </main>
            <Footer />
        </div>
    );
}
