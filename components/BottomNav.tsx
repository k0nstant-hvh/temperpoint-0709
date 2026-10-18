"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, PlusCircle, MessageSquare, User } from "lucide-react";

const tabs = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/favorites", label: "Избранное", icon: Heart },
  { href: "/create", label: "Создать", icon: PlusCircle, accent: true },
  { href: "/chat", label: "Чат", icon: MessageSquare },
  { href: "/profile", label: "Профиль", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-app border-t border-border bg-card">
      <ul className="flex items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {tabs.map(({ href, label, icon: Icon, accent }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

          if (accent) {
            return (
              <li key={href} className="flex items-center">
                <Link
                  href={href}
                  aria-label={label}
                  className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black shadow-lg shadow-accent/30 transition-colors hover:bg-accent-hover"
                >
                  <Icon size={30} strokeWidth={2.2} />
                </Link>
              </li>
            );
          }

          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 py-2.5 text-[11px] transition-colors ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.4 : 2} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
