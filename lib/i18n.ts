export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      members: "Membros",
      partners: "Parceiros",
      publications: "Publicações",
      contact: "Contato",
    },
    hero: {
      title: "LABNOV",
      subtitle: "Laboratório de Desenvolvimento de Novos Materiais",
      description:
        "Desenvolvendo soluções inovadoras em catálise e meio ambiente na UFCG",
    },
    mission: {
      title: "Missão",
      content:
        "O LABNOV dedica-se ao desenvolvimento de novos materiais com foco em aplicações em catálise e meio ambiente, contribuindo para o avanço científico e tecnológico na área de materiais.",
    },
    infrastructure: {
      title: "Infraestrutura",
      area: "Área: 100 m²",
      credential: "Credenciado pela ANP",
      equipment: "Equipamentos de última geração para síntese e caracterização de materiais",
    },
    publication: {
      title: "Última Publicação",
      date: "Outubro 2025",
      journal: "MDPI Membranes",
    },
    partners: {
      title: "Parceiros",
    },
    visitas: {
      title: "Visitas & Colaborações",
      noEntries: "Nenhuma entrada ainda.",
    },
    contact: {
      title: "Contato",
      name: "Nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente.",
      lgpd: "Concordo com o processamento dos meus dados pessoais conforme a LGPD",
      required: "Campo obrigatório",
    },
    footer: {
      lab: "LABNOV - Laboratório de Desenvolvimento de Novos Materiais",
      ufcg: "Universidade Federal de Campina Grande",
      campus: "UAEQ/CCT",
      coordinator: "Coordenadora: Profa. Meiry Gláucia",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      members: "Members",
      partners: "Partners",
      publications: "Publications",
      contact: "Contact",
    },
    hero: {
      title: "LABNOV",
      subtitle: "New Materials Development Laboratory",
      description:
        "Developing innovative solutions in catalysis and environment at UFCG",
    },
    mission: {
      title: "Mission",
      content:
        "LABNOV is dedicated to the development of new materials with a focus on applications in catalysis and environment, contributing to scientific and technological advancement in the field of materials.",
    },
    infrastructure: {
      title: "Infrastructure",
      area: "Area: 100 m²",
      credential: "ANP Accredited",
      equipment: "State-of-the-art equipment for material synthesis and characterization",
    },
    publication: {
      title: "Latest Publication",
      date: "October 2025",
      journal: "MDPI Membranes",
    },
    partners: {
      title: "Partners",
    },
    visitas: {
      title: "Visits & Collaborations",
      noEntries: "No entries yet.",
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
      lgpd: "I agree to the processing of my personal data in accordance with LGPD",
      required: "Required field",
    },
    footer: {
      lab: "LABNOV - New Materials Development Laboratory",
      ufcg: "Federal University of Campina Grande",
      campus: "UAEQ/CCT",
      coordinator: "Coordinator: Prof. Meiry Gláucia",
    },
  },
} as const;

export function getTranslations(lang: Language) {
  return translations[lang];
}

