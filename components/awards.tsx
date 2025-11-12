"use client";

import { useLanguage } from "@/components/language-provider";
import { Award } from "lucide-react";

export function Awards() {
  const { language } = useLanguage();

  const awards = [
    {
      title: "Prêmio Professor Ramdayal Swarnakar 2017",
      level: language === "pt" ? "Doutorado" : "Doctorate",
      work: language === "pt"
        ? "Síntese de membranas zeolíticas (Mordenita/α-alumina)..."
        : "Synthesis of zeolitic membranes (Mordenite/α-alumina)...",
    },
    {
      title: "Prêmio Petrobras de Tecnologia (3ª edição) 2007",
      level: language === "pt" ? "Tecnologia" : "Technology",
      work: language === "pt"
        ? "Desenvolvimento de catalisadores (Fe/HZSM-5)..."
        : "Development of catalysts (Fe/HZSM-5)...",
    },
    {
      title: "Etapa Paraibana das Bolsas IEL/SEBRAE/CNPq 2003",
      level: language === "pt" ? "Graduação" : "Undergraduate",
      work: language === "pt" ? "Desenvolvimento científico" : "Scientific development",
    },
    {
      title: "Etapa Nacional 2003 de Bolsas IEL/SEBRAE/CNPq",
      level: language === "pt" ? "Graduação" : "Undergraduate",
      work: language === "pt" ? "Desenvolvimento científico" : "Scientific development",
    },
  ];

  return (
    <section className="py-16 bg-ufcg-blue-lighter">
      <div className="container">
        <h2 className="text-3xl font-bold text-ufcg-blue mb-8 text-center">
          {language === "pt" ? "Premiações" : "Awards"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-ufcg-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === "pt" ? "Nível:" : "Level:"} {award.level}
                  </p>
                  <p className="text-sm text-muted-foreground">{award.work}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

