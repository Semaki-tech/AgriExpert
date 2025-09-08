import Link from "next/link";
import { Menu, Leaf } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 sm:hidden">
      <button className="rounded-full p-2 hover:bg-accent">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Ouvrir le menu</span>
      </button>
      <div className="flex items-center gap-2">
        <Leaf className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold font-poppins text-foreground">
          AgriExpert
        </h1>
      </div>
    </header>
  );
}
