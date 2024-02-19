import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <header className="h-15 w-full shadow-sm dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
          <Link href="/">Eduardo Pereira</Link>
        </h2>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
