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
        },
        {
          side: "right",
          year: "2015",
          title: "Técnico em Redes de Computadores",
          subTitle:
            "Escola Estadual de Educação Profissional Dr. Solon Tavares",
          text: "",
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

  <section className="container mx-auto w-full h-full px-4 py-12">
    <h2 className="mb-6 text-3xl md:text-4xl text-center font-extrabold tracking-tight leading-none dark:text-white"></h2>

    <div className="relative wrap overflow-hidden h-full">
      <div className="border-2-2 absolute border-opacity-20 border-gray-300 dark:border-gray-700 h-full border left-1/2"></div>
    </div>
  </section>;
}
