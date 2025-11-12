"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { Building2, Award, Microscope, Zap } from "lucide-react";

export function Infrastructure() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const equipment = [
    language === "pt" ? "Forno de alta temperatura" : "High temperature furnace",
    language === "pt" ? "Difratômetro de raios-X" : "X-ray diffractometer",
    language === "pt" ? "Microscópio eletrônico" : "Electron microscope",
    language === "pt" ? "Analisador de superfície" : "Surface analyzer",
    language === "pt" ? "Sistema de caracterização térmica" : "Thermal characterization system",
    language === "pt" ? "Equipamentos de síntese" : "Synthesis equipment",
  ];

  return (
    <section className="py-16 bg-ufcg-blue-lighter">
      <div className="container">
        <h2 className="text-3xl font-bold text-ufcg-blue mb-8 text-center">
          {t.infrastructure.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Building2 className="h-12 w-12 text-ufcg-blue mb-4" />
            <h3 className="font-semibold mb-2 text-lg">
              {language === "pt" ? "Área: 100 m²" : "Area: 100 m²"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === "pt"
                ? "Espaço dedicado para pesquisa e desenvolvimento"
                : "Dedicated space for research and development"}
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Award className="h-12 w-12 text-ufcg-blue mb-4" />
            <h3 className="font-semibold mb-2 text-lg">
              {t.infrastructure.credential}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === "pt"
                ? "Reconhecimento oficial para pesquisa em petróleo e gás"
                : "Official recognition for oil and gas research"}
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Microscope className="h-12 w-12 text-ufcg-blue mb-4" />
            <h3 className="font-semibold mb-2 text-lg">
              {t.infrastructure.equipment}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === "pt"
                ? "Tecnologia de ponta para análise e síntese"
                : "State-of-the-art technology for analysis and synthesis"}
            </p>
          </div>
        </div>
        
        <div className="bg-background p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-ufcg-blue mb-6 text-center">
            {language === "pt" ? "Equipamentos Principais" : "Main Equipment"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-ufcg-blue flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
