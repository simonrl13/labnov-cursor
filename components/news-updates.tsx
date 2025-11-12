"use client";

import { useLanguage } from "@/components/language-provider";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface NewsItem {
  _id: string;
  title: string;
  summary: string;
  date: string;
  link?: string;
}

export function NewsUpdates() {
  const { language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // Fetch from API route (server-side) to avoid CORS issues
        const response = await fetch("/api/sanity/news");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        // Silently fail
        setNews([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  // Don't show section if no news
  if (loading || news.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-ufcg-blue mb-8 text-center">
          {language === "pt" ? "Notícias e Atualizações" : "News & Updates"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {news.map((item) => (
            <div
              key={item._id}
              className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(item.date).toLocaleDateString(
                  language === "pt" ? "pt-BR" : "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.summary}
              </p>
              {item.link && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === "pt" ? "Ler mais" : "Read more"}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
