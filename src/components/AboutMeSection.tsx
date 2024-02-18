import Image from "next/image";

export function AboutMeSection() {
  return (
    <section className="container mx-auto w-full h-full px-4 py-12">
      <h2 className="mb-6 text-3xl md:text-4xl text-center font-extrabold tracking-tight leading-none dark:text-white">
        Sobre mim
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
        <div className="">
          <Image
            className="rounded-full"
            src="/assets/eduardo-silva-pereira-thumb.jpg"
            width={150}
            height={150}
            alt="Foto de Eduardo"
          />
        </div>

        <div className="flex-1">
          <h3 className="mb-4 font-semibold">
            Olá, eu sou o Eduardo Pereira, Desenvolvedor Front-end e Back-end.
          </h3>

          <p className="text-justify mb-4">
            Adoro linguagens web e estou sempre me atualizando de acordo com o
            mercado atual, aprendendo novas técnicas e boas práticas. Possuo
            conhecimentos na linguagem JavaScript, desenvolvendo com React,
            React Native, Jquery, HTML5, CSS3, Bootstrap, entre outros. Além
            disso, também possuo experiência no desenvolvimento de micro
            serviços com NodeJS e PHP.
          </p>

          <p className="text-justify mb-4">
            Sou graduado no Curso Superior em Tecnólogo em Análise e
            Desenvolvimento de Sistemas, na Universidade Luterana do Brasil
            (ULBRA), além de ser formado em outros dois cursos técnicos, Curso
            Técnico em Redes de Computadores e no Curso Técnico em Informática,
            realizados na Escola Estadual de Educação Profissional Dr. Solon
            Tavares.
          </p>
        </div>
      </div>
    </section>
  );
}
