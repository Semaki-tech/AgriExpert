"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Bot,
  CloudSun,
  LineChart,
  Users,
  Tractor,
  Leaf,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Expert IA", icon: Bot },
  { href: "/weather", label: "Météo Agricole", icon: CloudSun },
  { href: "/market-prices", label: "Prix du Marché", icon: LineChart },
  { href: "/forum", label: "Forum", icon: Users },
  { href: "/cooperative", label: "Coopérative", icon: Tractor },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 flex-col border-r bg-card p-4 sm:flex">
      <div className="mb-8 flex items-center gap-2">
        <Leaf className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold font-poppins text-foreground">
          AgriExpert
        </h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              {
                "bg-accent text-primary": pathname === item.href,
              }
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
