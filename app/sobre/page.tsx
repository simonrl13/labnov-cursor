import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre o LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
};

export default function SobrePage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-ufcg-blue mb-8">Sobre o LABNOV</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            O LABNOV - Laboratório de Desenvolvimento de Novos Materiais é uma estrutura de estudo e pesquisa na área de Desenvolvimento de Novos Materiais, vinculada à Unidade Acadêmica de Engenharia Química do Centro de Ciências e Tecnologia da Universidade Federal de Campina Grande.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            O LABNOV possui 100m², onde acomoda pesquisadores e estudantes de Graduação e Pós-Graduação (níveis: mestrado, doutorado e Pós-Doutorado) que desenvolvem atividades de pesquisa nas áreas de Engenharia Química, catálise e ambiental.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Coordenado pela Profa. Meiry Gláucia Freire Rodrigues, o laboratório dedica-se ao desenvolvimento de novos materiais com foco em aplicações em catálise e meio ambiente, contribuindo para o avanço científico e tecnológico do país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-ufcg-blue-lighter p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-ufcg-blue mb-4">
              Missão
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Contribuir para o avanço científico e tecnológico na área de
              materiais, desenvolvendo soluções inovadoras que atendam às
              necessidades da indústria e da sociedade, promovendo a
              sustentabilidade e o desenvolvimento sustentável.
            </p>
          </div>

          <div className="bg-ufcg-blue-lighter p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-ufcg-blue mb-4">
              Visão
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional e internacional em pesquisa e desenvolvimento
              de novos materiais, reconhecido pela excelência científica e
              impacto social de suas pesquisas.
            </p>
          </div>
        </div>

        <div className="bg-ufcg-blue-lighter p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-4">
            Valores
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">•</span>
              Excelência científica
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">•</span>
              Inovação e criatividade
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">•</span>
              Colaboração e trabalho em equipe
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">•</span>
              Sustentabilidade ambiental
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">•</span>
              Ética e responsabilidade social
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">•</span>
              Compromisso com a educação
            </li>
          </ul>
        </div>

        <div className="bg-background border border-ufcg-blue-lighter p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-4">
            Infraestrutura
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">✓</span>
              <span><strong>Área total:</strong> 100 m² de laboratório dedicado</span>
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">✓</span>
              <span><strong>Credenciamento:</strong> ANP (Agência Nacional do Petróleo, Gás Natural e Biocombustíveis)</span>
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">✓</span>
              <span><strong>Equipamentos:</strong> Tecnologia de última geração para síntese e caracterização de materiais</span>
            </li>
            <li className="flex items-start">
              <span className="text-ufcg-blue mr-2">✓</span>
              <span><strong>Localização:</strong> Unidade Acadêmica de Engenharia Química (UAEQ), Centro de Ciências e Tecnologia (CCT) - UFCG, Campina Grande - PB</span>
            </li>
          </ul>
        </div>

        <div className="bg-ufcg-blue-lighter p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-4">
            Premiações
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Prêmio Professor Ramdayal Swarnakar 2017</p>
              <p className="text-sm">Nível: Doutorado</p>
              <p className="text-sm">Trabalho: "Síntese de membranas zeolíticas (Mordenita/α-alumina)..."</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Prêmio Petrobras de Tecnologia (3ª edição) 2007</p>
              <p className="text-sm">Trabalho: "Desenvolvimento de catalisadores (Fe/HZSM-5)..."</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Etapa Paraibana das Bolsas IEL/SEBRAE/CNPq 2003</p>
              <p className="text-sm">Nível: Graduação</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Etapa Nacional 2003 de Bolsas IEL/SEBRAE/CNPq</p>
              <p className="text-sm">Nível: Graduação</p>
            </div>
          </div>
        </div>

        <div className="bg-background border border-ufcg-blue-lighter p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-ufcg-blue mb-4">
            Financiamentos
          </h2>
          <p className="text-muted-foreground mb-4">
            O LABNOV conta com o apoio dos seguintes órgãos de fomento e empresas:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
            <div>• CNPq</div>
            <div>• CAPES</div>
            <div>• FapesQ PB</div>
            <div>• PRH</div>
            <div>• ANP</div>
            <div>• PETROBRAS</div>
            <div>• ALUMAR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
