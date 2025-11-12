import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parceiros",
  description: "Parceiros do LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
};

export default function ParceirosPage() {
  const nationalPartners = [
    {
      institution: "USP - Universidade de São Paulo",
      collaborator: "Dr. Francisco Valenzuela-Diaz",
      url: "https://www5.usp.br",
    },
    {
      institution: "UNICAMP - Universidade Estadual de Campinas",
      collaborator: "Dra. Melissa Vieira",
      url: "https://www.unicamp.br",
    },
    {
      institution: "UFSCar - Universidade Federal de São Carlos",
      collaborator: "Dra. Luana de Paula, Dr. Gustavo de Paula",
      url: "https://www.ufscar.br",
    },
    {
      institution: "INSA - Instituto Nacional do Semiárido",
      collaborator: "Dra. Dilma Trovão",
      url: "https://www.insa.gov.br",
    },
    {
      institution: "UFC - Universidade Federal do Ceará",
      collaborator: "Dr. Fabiano Fernandes",
      url: "https://www.ufc.br",
    },
    {
      institution: "UFPB - Universidade Federal da Paraíba",
      collaborator: "Dr. Genaro Clericuzi",
      url: "https://www.ufpb.br",
    },
    {
      institution: "UEPB - Universidade Estadual da Paraíba",
      collaborator: "Dr. João Oshiro Júnior",
      url: "https://www.uepb.edu.br",
    },
    {
      institution: "Instituto SENAI de Inovação",
      collaborator: "Dr. Tellys Barbosa",
      url: "https://www.senai.br",
    },
    {
      institution: "UFERSA - Universidade Federal Rural do Semi-Árido",
      collaborator: "Dra. Marta Ligia Silva",
      url: "https://www.ufersa.edu.br",
    },
    {
      institution: "Instituto Federal da Paraíba - Campus Campina Grande",
      collaborator: "Dr. Antonio Gadelha",
      url: "https://www.ifpb.edu.br/campina-grande",
    },
  ];

  const internationalPartners = [
    {
      institution: "Université de Poitiers",
      country: "França",
      collaborator: "Dr. Patrick Magnoux",
      url: "https://www.univ-poitiers.fr",
    },
    {
      institution: "Universidad Zaragoza",
      country: "Espanha",
      collaborator: "Dr. Miguel Menéndez",
      url: "https://www.unizar.es",
    },
    {
      institution: "UNL - Universidad Nacional del Litoral",
      country: "Argentina",
      collaborator: "Dr. Javier Grau",
      url: "https://www.unl.edu.ar",
    },
    {
      institution: "CINDECA - Centro de Investigación y Desarrollo en Ciencias Aplicadas",
      country: "Argentina",
      collaborator: "Dr. Gustavo Marchetti",
      url: "https://www.cindeca.unlp.edu.ar",
    },
    {
      institution: "Universidad de Concepción",
      country: "Chile",
      collaborator: "Dra. Gina Pecchi",
      url: "https://www.udec.cl",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-ufcg-blue mb-8">Parceiros</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-ufcg-blue mb-6">
            Parcerias Nacionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nationalPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-ufcg-blue-lighter/80 block"
              >
                <h3 className="text-xl font-semibold mb-2 text-ufcg-blue hover:underline">
                  {partner.institution}
                </h3>
                <p className="text-muted-foreground">{partner.collaborator}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-ufcg-blue mb-6">
            Parcerias Internacionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-ufcg-blue-lighter/80 block"
              >
                <h3 className="text-xl font-semibold mb-2 text-ufcg-blue hover:underline">
                  {partner.institution}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{partner.country}</p>
                <p className="text-muted-foreground">{partner.collaborator}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
