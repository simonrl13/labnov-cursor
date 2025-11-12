"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

interface Publication {
  _id?: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  month?: string;
  link?: string;
  doi?: string;
}

export default function PublicacoesPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPublications() {
      try {
        // Fetch from API route (server-side) to avoid CORS issues
        const response = await fetch("/api/sanity/publications");
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error("Error fetching publications:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPublications();
  }, []);

  if (loading) {
    return (
      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-ufcg-blue mb-8">
          Publicações
        </h1>
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div
              key={pub._id || idx}
              className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{pub.title}</h2>
              <p className="text-muted-foreground mb-2">{pub.authors}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {pub.journal}
                {pub.month && `, ${pub.month}`} {pub.year}
                {pub.doi && ` • DOI: ${pub.doi}`}
              </p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ufcg-blue hover:underline inline-flex items-center"
                >
                  Ver publicação
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
