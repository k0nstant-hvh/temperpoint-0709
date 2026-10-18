"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Check } from "lucide-react";
import { categories } from "@/lib/mock";

const TITLE_MIN = 16;

type Props = {
  kind: "resume" | "vacancy";
  titlePlaceholder: string;
  descriptionLabel: string;
  descriptionPlaceholder: string;
  payLabel: string;
};

export default function CreateListingForm({
  kind,
  titlePlaceholder,
  descriptionLabel,
  descriptionPlaceholder,
  payLabel,
}: Props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [pay, setPay] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const titleValid = title.trim().length >= TITLE_MIN;
  const canSubmit = titleValid && category !== "" && description.trim() !== "";

  function pickPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPhoto(URL.createObjectURL(file));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 px-4 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-black">
          <Check size={32} />
        </span>
        <h2 className="text-lg font-semibold text-white">
          {kind === "resume" ? "Резюме опубликовано" : "Вакансия опубликована"}
        </h2>
        <p className="text-sm text-muted">
          Модерация занимает до 24 часов. Мы пришлём уведомление.
        </p>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-2 rounded-xl bg-card px-5 py-2.5 text-sm text-white"
        >
          На главную
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 px-4 py-5">
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FACC15]"
      >
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="Фото" className="h-full w-full object-cover" />
        ) : (
          <span className="flex flex-col items-center gap-2 text-black/80">
            <Camera size={28} />
            <span className="text-sm font-medium">Добавить фото</span>
          </span>
        )}
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={pickPhoto}
        className="hidden"
      />

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-white">Заголовок</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={titlePlaceholder}
          className="rounded-xl bg-card px-3 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
        />
        <span
          className={`text-xs ${
            title.length === 0 || titleValid ? "text-muted" : "text-red-400"
          }`}
        >
          Минимум {TITLE_MIN} символов ({title.trim().length}/{TITLE_MIN})
        </span>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-white">Категория</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl bg-card px-3 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="" disabled>
            Выберите категорию
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-white">{descriptionLabel}</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={descriptionPlaceholder}
          rows={5}
          className="resize-none rounded-xl bg-card px-3 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-white">{payLabel}</span>
        <input
          value={pay}
          onChange={(e) => setPay(e.target.value)}
          inputMode="numeric"
          placeholder="Напр. 5 000 ₸ / день"
          className="rounded-xl bg-card px-3 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </label>

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-1 w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-black transition-opacity disabled:opacity-40"
      >
        Опубликовать
      </button>
    </form>
  );
}
