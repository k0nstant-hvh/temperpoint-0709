"use client";

import { useState } from "react";
import { MessageSquareDashed } from "lucide-react";

const tabs = [
  {
    key: "responses",
    label: "Мои отклики",
    hint: "Откликнитесь на объявление на Главной — переписка появится здесь.",
  },
  {
    key: "positions",
    label: "Мои вакансии",
    hint: "Опубликуйте вакансию — сообщения от исполнителей появятся здесь.",
  },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function ChatPage() {
  const [active, setActive] = useState<TabKey>("responses");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <div className="flex min-h-full flex-col">
      <header className="px-4 py-3">
        <h1 className="text-lg font-semibold text-white">Чат</h1>
      </header>

      <div className="flex gap-2 px-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors ${
              active === t.key
                ? "bg-accent text-black"
                : "bg-card text-muted"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 py-20 text-center">
        <MessageSquareDashed size={56} className="text-muted" strokeWidth={1.5} />
        <p className="text-base font-semibold text-white">Сообщений пока нет</p>
        <p className="text-sm text-muted">{current.hint}</p>
      </div>
    </div>
  );
}
