"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface Publication {
  _id?: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  month?: string;
  link?: string;
}

export function LatestPublication() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatest() {
      try {
        // Fetch from API route (server-side) to avoid CORS issues
        const response = await fetch("/api/sanity/publications");
        const publications = await response.json();
        // Get the most recent publication
        if (publications.length > 0) {
          setPublication(publications[0]);
        }
      } catch (error) {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchLatest();
  }, []);

  if (loading || !publication) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-ufcg-blue mb-6 text-center">
            {t.publication.title}
          </h2>
          <div className="bg-ufcg-blue-lighter p-8 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              {publication.month || t.publication.date} {publication.year} • {publication.journal}
            </p>
            <h3 className="text-xl font-semibold mb-4">{publication.title}</h3>
            {publication.link && (
              <Button asChild>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  {language === "pt" ? "Ver publicação" : "View publication"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
