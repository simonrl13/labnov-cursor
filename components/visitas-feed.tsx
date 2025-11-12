"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { urlFor } from "@/lib/sanity";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Note: This component fetches data client-side. For better performance,
// consider using Server Components with async/await in the parent page.

interface Visita {
  _id: string;
  title: string;
  partner: string;
  summary: string;
  date: string;
  photos?: Array<any>; // Sanity image reference
  links?: Array<{ url: string; label: string }>;
}

export function VisitasFeed() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [visitas, setVisitas] = useState<Visita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVisitas() {
      try {
        // Fetch from API route (server-side) to avoid CORS issues
        const response = await fetch("/api/sanity/visitas");
        const data = await response.json();
        setVisitas(data);
      } catch (error) {
        // Silently fail - Sanity might not be configured yet
        setVisitas([]);
      } finally {
        setLoading(false);
      }
    }
    fetchVisitas();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container">
          <p className="text-center text-muted-foreground">Carregando...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-ufcg-blue mb-8 text-center">
          {t.visitas.title}
        </h2>
        {visitas.length === 0 ? (
          <p className="text-center text-muted-foreground">
            {t.visitas.noEntries}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitas.map((visita) => (
              <div
                key={visita._id}
                className="bg-ufcg-blue-lighter rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{visita.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {visita.partner}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {new Date(visita.date).toLocaleDateString(
                    language === "pt" ? "pt-BR" : "en-US"
                  )}
                </p>
                <p className="text-sm mb-4">{visita.summary}</p>
                {visita.photos && visita.photos.length > 0 && (
                  <div className="mb-4">
                    <Image
                      src={urlFor(visita.photos[0]).width(400).height(300).url()}
                      alt={visita.title}
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                )}
                {visita.links && visita.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {visita.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ufcg-blue hover:underline inline-flex items-center"
                      >
                        {link.label}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

