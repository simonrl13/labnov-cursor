"use client";

import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { ExternalLink } from "lucide-react";

export function Partners() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const nationalPartners = [
    {
      name: "USP",
      fullName: "Universidade de São Paulo",
      url: "https://www5.usp.br",
    },
    {
      name: "UNICAMP",
      fullName: "Universidade Estadual de Campinas",
      url: "https://www.unicamp.br",
    },
    {
      name: "UFSCar",
      fullName: "Universidade Federal de São Carlos",
      url: "https://www.ufscar.br",
    },
    {
      name: "INSA",
      fullName: "Instituto Nacional do Semiárido",
      url: "https://www.gov.br/insa/pt-br",
    },
    {
      name: "UFC",
      fullName: "Universidade Federal do Ceará",
      url: "https://www.ufc.br",
    },
    {
      name: "UFPB",
      fullName: "Universidade Federal da Paraíba",
      url: "https://www.ufpb.br",
    },
    {
      name: "UEPB",
      fullName: "Universidade Estadual da Paraíba",
      url: "https://www.uepb.edu.br",
    },
    {
      name: "SENAI",
      fullName: "Instituto SENAI de Inovação",
      url: "https://www.fiepb.com.br/senai",
    },
    {
      name: "UFERSA",
      fullName: "Universidade Federal Rural do Semi-Árido",
      url: "https://www.ufersa.edu.br",
    },
    {
      name: "IFPB",
      fullName: "Instituto Federal da Paraíba",
      url: "https://www.ifpb.edu.br",
    },
  ];

  const internationalPartners = [
    {
      name: "Université de Poitiers",
      country: "França",
      url: "https://www.univ-poitiers.fr",
    },
    {
      name: "Universidad Zaragoza",
      country: "Espanha",
      url: "https://www.unizar.es",
    },
    {
      name: "UNL",
      fullName: "Universidad Nacional del Litoral",
      country: "Argentina",
      url: "https://www.unl.edu.ar",
    },
    {
      name: "CINDECA",
      fullName: "Centro de Investigación y Desarrollo en Ciencias Aplicadas",
      country: "Argentina",
      url: "https://cindeca.quimica.unlp.edu.ar/",
    },
    {
      name: "Universidad de Concepción",
      country: "Chile",
      url: "https://www.udec.cl",
    },
  ];

  return (
    <section className="py-16 bg-ufcg-blue-lighter">
      <div className="container">
        <h2 className="text-3xl font-bold text-ufcg-blue mb-8 text-center">
          {t.partners.title}
        </h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-ufcg-blue mb-6 text-center">
            {language === "pt" ? "Parcerias Nacionais" : "National Partnerships"}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {nationalPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-32 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-ufcg-blue-lighter group"
                title={partner.fullName}
              >
                <span className="text-sm font-semibold text-ufcg-blue group-hover:underline text-center px-2">
                  {partner.name}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-ufcg-blue mb-6 text-center">
            {language === "pt" ? "Parcerias Internacionais" : "International Partnerships"}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {internationalPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-48 h-32 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-ufcg-blue-lighter group"
                title={partner.fullName || partner.name}
              >
                <span className="text-sm font-semibold text-ufcg-blue group-hover:underline text-center px-2">
                  {partner.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">{partner.country}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
