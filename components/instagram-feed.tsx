"use client";

import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
  permalink: string;
  timestamp: string;
}

export function InstagramFeed() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        // Fetch from API route that will handle Instagram API calls
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setError("Unable to load Instagram feed");
      } finally {
        setLoading(false);
      }
    }
    fetchInstagramPosts();
  }, []);

  // Don't show section if no posts or error
  if (loading || posts.length === 0 || error) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-ufcg-blue">
            {language === "pt" ? "Instagram" : "Instagram"}
          </h2>
          <a
            href="https://www.instagram.com/labnov_ufcg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ufcg-blue hover:underline inline-flex items-center"
          >
            {language === "pt" ? "Ver no Instagram" : "View on Instagram"}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.slice(0, 8).map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" ? (
                <img
                  src={post.media_url}
                  alt={post.caption?.substring(0, 100) || "Instagram post"}
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              ) : (
                <video
                  src={post.media_url}
                  className="w-full h-64 object-cover rounded-lg"
                  muted
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm">
                  {language === "pt" ? "Ver post" : "View post"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

