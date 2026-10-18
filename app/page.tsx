import Link from "next/link";
import { Search, Bell } from "lucide-react";
import JobCard from "@/components/JobCard";
import { categories, recommendedJobs } from "@/lib/mock";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 pb-4">
      <header className="sticky top-0 z-40 flex items-center gap-3 bg-background/95 px-4 py-3 backdrop-blur">
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-card px-3 py-2.5">
          <Search size={18} className="shrink-0 text-muted" />
          <input
            type="search"
            placeholder="Что ищете?"
            className="w-full bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
          />
        </div>
        <button
          type="button"
          aria-label="Уведомления"
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card"
        >
          <Bell size={20} className="text-white" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent" />
        </button>
      </header>

      <section className="px-4">
        <h2 className="mb-3 text-base font-semibold text-white">Категории</h2>
        <div className="grid grid-cols-4 gap-x-2 gap-y-4">
          {categories.map(({ slug, label, icon: Icon }) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="flex flex-col items-center gap-1.5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card">
                <Icon size={24} className="text-accent" />
              </span>
              <span className="text-center text-[11px] leading-tight text-muted">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4">
        <h2 className="mb-3 text-base font-semibold text-white">Рекомендованное</h2>
        <div className="grid grid-cols-2 gap-3">
          {recommendedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
