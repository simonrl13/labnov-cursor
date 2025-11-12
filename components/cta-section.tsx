"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export function CTASection() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="py-16 bg-gradient-to-r from-ufcg-blue to-ufcg-blue-dark text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "pt"
              ? "Interessado em colaborar?"
              : "Interested in collaborating?"}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {language === "pt"
              ? "Entre em contato conosco para parcerias, visitas ou oportunidades de pesquisa"
              : "Contact us for partnerships, visits, or research opportunities"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-ufcg-blue hover:bg-gray-100"
            >
              <Link href="/contato">
                <Mail className="mr-2 h-5 w-5" />
                {t.contact.title}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/sobre">
                <MessageSquare className="mr-2 h-5 w-5" />
                {language === "pt" ? "Saiba mais" : "Learn more"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

