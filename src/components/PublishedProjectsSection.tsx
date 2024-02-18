import Image from "next/image";

export function PublishedProjectsSection() {
  function renderContent({
    link,
    title,
    image,
  }: {
    link: string;
    title: string;
    image: string;
  }) {
    return (
      <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init
        data-te-ripple-color="dark"
      >
        <Image
          src={image}
          width={350}
          height={260}
          alt={title}
          className="w-full align-middle transition duration-300 ease-linear"
        />
        <a href={link} target="_blank">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">{title}</h5>
            </div>
          </div>
          <div>
            <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
          </div>
        </a>
      </div>
    );
  }

  return (
    <section className="container mx-auto w-full h-full px-4 py-12">
      <h2 className="mb-6 text-3xl md:text-4xl text-center font-extrabold tracking-tight leading-none dark:text-white">
        Projetos Publicados
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {renderContent({
          image: "/assets/silvapereiraeduardo.png",
          title: "Eduardo Pereira - Portifólio",
          link: "https://silvapereiraeduardo.github.io/",
        })}
        {renderContent({
          image: "/assets/siag.png",
          title: "sIAG",
          link: "http://siag.setudec.com.br/",
        })}
        {renderContent({
          image: "/assets/imob7.png",
          title: "Imobiliária 7 de Setembro",
          link: "https://imobiliaria7setembro.com.br/",
        })}
        {renderContent({
          image: "/assets/merkator.png",
          title: "Merkator Feiras",
          link: "https://merkatorfeiras.com.br/pt",
        })}
      </div>
    </section>
  );
}
