import { FaRegCopyright } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-6 mt-10">
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 flex items-center justify-center text-gray-900 font-bold text-lg mr-2">
          <FaRegCopyright className="inline-flex w-4 mr-1" />
          {`${currentYear} Eduardo Pereira`}
        </span>
        <span>Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
