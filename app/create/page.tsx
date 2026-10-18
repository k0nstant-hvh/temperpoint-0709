import Link from "next/link";
import { Briefcase, UserRound, ChevronRight } from "lucide-react";

const options = [
  {
    href: "/create/vacancy",
    icon: Briefcase,
    title: "Создать вакансию",
    subtitle: "Для бизнеса — найдите исполнителя на задачу",
  },
  {
    href: "/create/resume",
    icon: UserRound,
    title: "Создать резюме / услугу",
    subtitle: "Для подростка 14+ — расскажите, что вы умеете",
  },
];

export default function CreatePage() {
  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Что публикуем?</h1>
        <p className="mt-1 text-sm text-muted">Выберите тип объявления</p>
      </div>

      {options.map(({ href, icon: Icon, title, subtitle }) => (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-4 rounded-2xl bg-card p-5 transition-colors active:bg-border"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
            <Icon size={26} />
          </span>
          <span className="flex-1">
            <span className="block text-base font-semibold text-white">
              {title}
            </span>
            <span className="mt-0.5 block text-xs text-muted">{subtitle}</span>
          </span>
          <ChevronRight size={20} className="shrink-0 text-muted" />
        </Link>
      ))}
    </div>
  );
}
