"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import type { Job } from "@/lib/mock";

export default function JobCard({ job }: { job: Job }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-card">
      <div className="relative aspect-square w-full">
        <Image
          src={job.image}
          alt={job.title}
          fill
          sizes="(max-width: 480px) 50vw, 240px"
          className="rounded-2xl object-cover"
        />
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-label={saved ? "Убрать из избранного" : "В избранное"}
          aria-pressed={saved}
          className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors active:bg-black/70"
        >
          <Heart
            size={18}
            className={saved ? "fill-accent text-accent" : "text-white"}
          />
        </button>
      </div>

      <div className="flex flex-col gap-1 p-3">
        <h3 className="truncate text-sm text-white/90">{job.title}</h3>
        <p className="text-base font-bold text-white">{job.price}</p>
        <p className="text-xs text-muted">
          {job.online ? "Онлайн" : job.location} · {job.postedAt}
        </p>
      </div>
    </article>
  );
}
