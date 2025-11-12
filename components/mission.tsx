"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";

export function Mission() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-ufcg-blue mb-6 text-center">
            {t.mission.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.mission.content}
          </p>
        </div>
      </div>
    </section>
  );
}

