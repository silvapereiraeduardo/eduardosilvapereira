import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="container bg-white dark:bg-gray-900">
      <div className="grid px-4 py-12 mx-auto sm:gap-4 sm:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <span className="text-sm italic text-gray-900 dark:text-gray-400">
            Guaíba, Rio Grande do Sul, Brasil
          </span>

          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Eduardo Pereira
          </h1>

          <p className="max-w-2xl mb-6 text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Desenvolvedor Web, com fóco em React, React Native e NodeJS.
          </p>

          <a
            href="https://www.linkedin.com/in/eduardo-silva-pereira-7945026b/"
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/silvapereiraeduardo/"
            target="_blank"
            className="ml-2 inline-flex items-center justify-center px-4 py-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <FaGithub />
          </a>
        </div>

        <div className="relative hidden overflow-hidden lg:mt-0 lg:col-span-5 lg:flex rounded-tr-3xl rounded-bl-3xl">
          <Image
            className="w-full -scale-x-100 grayscale"
            src="/assets/eduardo-silva-pereira-thumb.jpg"
            width={400}
            height={400}
            alt="Foto de Eduardo"
          />

          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r opacity-70"></div>
        </div>
      </div>
    </section>
  );
}
