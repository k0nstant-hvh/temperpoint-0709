import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CreateListingForm from "@/components/CreateListingForm";

export default function CreateVacancyPage() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center gap-3 px-4 py-3">
        <Link href="/create" aria-label="Назад" className="text-white">
          <ArrowLeft size={22} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Создать вакансию</h1>
      </header>
      <CreateListingForm
        kind="vacancy"
        titlePlaceholder="Напр. Нужен курьер на 3 часа в субботу"
        descriptionLabel="Описание задачи"
        descriptionPlaceholder="Что нужно сделать, требования, условия"
        payLabel="Оплата"
      />
    </div>
  );
}
