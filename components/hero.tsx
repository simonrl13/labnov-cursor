"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="relative bg-gradient-to-b from-ufcg-blue-lighter to-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-ufcg-blue mb-4">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">
            {t.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}

