import { TimelineSection } from "./TimelineSection";

export function AcademicEducationSection() {
  return (
    <TimelineSection
      title="Formação acadêmica"
      values={[
        {
          side: "left",
          year: "2020",
          title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          subTitle: "Universidade Luterana do Brasil",
          text: "",
          ctaText: "Visualizar artigo",
          ctaLink:
            "/assets/articles/tecnologo-em-analise-e-desenvolvimento-de-sistemas.pdf",
        },
        {
          side: "right",
          year: "2015",
          title: "Técnico em Redes de Computadores",
          subTitle:
            "Escola Estadual de Educação Profissional Dr. Solon Tavares",
          text: "",
          ctaText: "Visualizar artigo",
          ctaLink: "/assets/articles/tecnico-em-redes-de-computadores.pdf",
        },
        {
          side: "left",
          year: "2013",
          title: "Técnico em Informática",
          subTitle:
            "Escola Estadual de Educação Profissional Dr. Solon Tavares",
          text: "",
        },
      ]}
    />
  );
}
