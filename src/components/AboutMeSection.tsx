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
            priority
            width={150}
            height={150}
            alt="Foto de Eduardo"
          />
        </div>

        <div className="flex-1">
          <p className="text-justify mb-4">
            Sou um desenvolvedor Web e Mobile apaixonado por tecnologia, com
            experiência sólida em React, React Native, Node.js e TypeScript. Meu
            foco é criar soluções de alto desempenho, seguindo boas práticas de
            arquitetura, como Arquitetura Limpa e Hexagonal.
          </p>

          <p className="text-justify mb-4">
            Atualmente, sou Desenvolvedor Mobile Pleno na Compass UOL, onde atuo
            na construção de aplicações performáticas e escaláveis. Tenho
            experiência com Docker, PostgreSQL, Zustand, Redux e Vite, além de
            desenvolver integrações com APIs RESTful e escrever testes
            automatizados com Jest e Vitest.
          </p>

          <p className="text-justify mb-4">
            Estou sempre buscando novos desafios e me aprimorando para entregar
            código limpo, modular e bem estruturado. Se quiser conversar sobre
            tecnologia ou oportunidades, me envie uma mensagem! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
