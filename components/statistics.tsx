"use client";

import { useLanguage } from "@/components/language-provider";
import { FileText, Users, Award, TrendingUp } from "lucide-react";

export function Statistics() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: FileText,
      value: "50+",
      label: language === "pt" ? "Publicações" : "Publications",
    },
    {
      icon: Users,
      value: "15+",
      label: language === "pt" ? "Membros" : "Members",
    },
    {
      icon: Award,
      value: "10+",
      label: language === "pt" ? "Projetos" : "Projects",
    },
    {
      icon: TrendingUp,
      value: "5+",
      label: language === "pt" ? "Anos de Atuação" : "Years Active",
    },
  ];

  return (
    <section className="py-16 bg-ufcg-blue text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

