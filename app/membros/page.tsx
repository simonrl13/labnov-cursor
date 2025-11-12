import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membros",
  description: "Membros do LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
};

export default function MembrosPage() {
  const members = [
    {
      name: "Dra. Meiry Gláucia Freire Rodrigues",
      role: "Coordenadora",
      affiliation: "UFCG/UAEQ",
      category: "Coordenação",
    },
    {
      name: "Dra. Larissa Fernandes Maia",
      role: "Técnica e Pesquisadora",
      affiliation: "UFCG",
      category: "Pesquisadores",
    },
    {
      name: "José Lázaro da Silva Fernandes",
      role: "Pesquisador",
      affiliation: "UFCG",
      category: "Pesquisadores",
    },
  ];

  const graduateStudents = [
    {
      name: "Emilly Vitória Gomes Moreira",
      role: "Aluna de Mestrado",
      funding: "CAPES DS",
      category: "Pós-Graduação",
    },
    {
      name: "Maria Nathália Estrela Braga",
      role: "Aluna de Mestrado",
      funding: "CAPES DS",
      category: "Pós-Graduação",
    },
    {
      name: "Ingrid Kelly Teles de Farias",
      role: "Aluna de Mestrado",
      funding: "CAPES DS",
      category: "Pós-Graduação",
    },
  ];

  const undergraduateStudents = [
    {
      name: "Ana Vitória Santos Marques",
      role: "Aluna de Iniciação Científica",
      funding: "CNPq MAI-DAI",
      category: "Graduação",
    },
    {
      name: "Francimarcio Geraldo da Silva Gambarra",
      role: "Aluno de Iniciação Científica",
      funding: "CNPq",
      category: "Graduação",
    },
    {
      name: "Heloyse Reges Chaves",
      role: "Aluna de Iniciação Científica",
      funding: "CNPq MAI-DAI",
      category: "Graduação",
    },
    {
      name: "João Victor Silva Sousa",
      role: "Aluno",
      funding: "PET/FNDE",
      category: "Graduação",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-ufcg-blue mb-8">Grupo de Pesquisa</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-6">Coordenação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members
              .filter((m) => m.category === "Coordenação")
              .map((member, idx) => (
                <div
                  key={idx}
                  className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-6">Pesquisadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members
              .filter((m) => m.category === "Pesquisadores")
              .map((member, idx) => (
                <div
                  key={idx}
                  className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-6">Pós-Graduação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {graduateStudents.map((student, idx) => (
              <div
                key={idx}
                className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                <p className="text-muted-foreground mb-2">{student.role}</p>
                <p className="text-sm text-muted-foreground">{student.funding}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-6">Graduação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {undergraduateStudents.map((student, idx) => (
              <div
                key={idx}
                className="bg-ufcg-blue-lighter p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                <p className="text-muted-foreground mb-2">{student.role}</p>
                <p className="text-sm text-muted-foreground">{student.funding}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
