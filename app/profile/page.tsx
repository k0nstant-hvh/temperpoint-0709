import Link from "next/link";
import {
  UserRound,
  Wallet,
  FileText,
  MessageSquare,
  CreditCard,
  Settings,
  ChevronRight,
  Plus,
} from "lucide-react";

const menu = [
  { href: "/profile/listings", label: "Мои объявления", icon: FileText },
  { href: "/chat", label: "Чат", icon: MessageSquare },
  { href: "/profile/payments", label: "Платежи", icon: CreditCard },
  { href: "/profile/settings", label: "Настройки", icon: Settings },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-5 px-4 py-6">
      <section className="rounded-2xl bg-card p-4">
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
            <UserRound size={30} />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-lg font-semibold text-white">
              Айгерим Н.
            </h1>
            <p className="text-xs text-muted">ID: 100482</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-background px-4 py-3">
          <span className="flex items-center gap-2 text-sm text-muted">
            <Wallet size={18} className="text-accent" />
            Кошелёк
          </span>
          <span className="text-base font-bold text-white">12 500 ₸</span>
        </div>
      </section>

      <Link
        href="/create"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-black"
      >
        <Plus size={18} />
        Опубликовать
      </Link>

      <section className="overflow-hidden rounded-2xl bg-card">
        {menu.map(({ href, label, icon: Icon }, i) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-4 py-4 transition-colors active:bg-border ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <Icon size={20} className="shrink-0 text-muted" />
            <span className="flex-1 text-sm text-white">{label}</span>
            <ChevronRight size={18} className="shrink-0 text-muted" />
          </Link>
        ))}
      </section>
    </div>
  );
}
