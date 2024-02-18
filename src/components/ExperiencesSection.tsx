import { TimelineSection } from "./TimelineSection";

export function ExperiencesSection() {
  return (
    <TimelineSection
      title="Experiências"
      values={[
        {
          side: "left",
          month: "JAN",
          year: "2023",
          title: "Desenvolvedor Mobile Pleno",
          subTitle: "Compass UOL",
          text: "",
        },
        {
          side: "right",
          month: "MAI",
          year: "2020",
          title: "Desenvolvedor",
          subTitle: "Digifred - Sistemas para Gestão Pública",
          text: "",
        },
        {
          side: "left",
          month: "AGO",
          year: "2016",
          title: "Desenvolvedor Front End 4",
          subTitle: "Object Edge Inc",
          text: "",
        },
        {
          side: "right",
          month: "JUL",
          year: "2015",
          title: "Programador Júnior",
          subTitle: "Reweb",
          text: "",
        },
      ]}
    />
  );
}
