"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { FlaskConical, Leaf, Beaker, Atom } from "lucide-react";

export function ResearchAreas() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const researchAreas = [
    {
      icon: FlaskConical,
      title: language === "pt" ? "Catálise" : "Catalysis",
      description:
        language === "pt"
          ? "Desenvolvimento de catalisadores para processos industriais sustentáveis"
          : "Development of catalysts for sustainable industrial processes",
    },
    {
      icon: Leaf,
      title: language === "pt" ? "Meio Ambiente" : "Environment",
      description:
        language === "pt"
          ? "Materiais para tratamento de água e remediação ambiental"
          : "Materials for water treatment and environmental remediation",
    },
    {
      icon: Beaker,
      title: language === "pt" ? "Síntese de Materiais" : "Material Synthesis",
      description:
        language === "pt"
          ? "Desenvolvimento de novos materiais cerâmicos e compósitos"
          : "Development of new ceramic materials and composites",
    },
    {
      icon: Atom,
      title: language === "pt" ? "Caracterização" : "Characterization",
      description:
        language === "pt"
          ? "Análise estrutural e propriedades de materiais avançados"
          : "Structural analysis and properties of advanced materials",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-ufcg-blue mb-8 text-center">
          {language === "pt" ? "Áreas de Pesquisa" : "Research Areas"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <area.icon className="h-12 w-12 text-ufcg-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

