"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="border-t bg-ufcg-blue-lighter">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-ufcg-blue mb-2">{t.footer.lab}</h3>
            <p className="text-sm text-muted-foreground">{t.footer.ufcg}</p>
            <p className="text-sm text-muted-foreground">{t.footer.campus}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {t.footer.coordinator}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LABNOV. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

