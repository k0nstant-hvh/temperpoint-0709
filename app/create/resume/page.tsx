import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CreateListingForm from "@/components/CreateListingForm";

export default function CreateResumePage() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center gap-3 px-4 py-3">
        <Link href="/create" aria-label="Назад" className="text-white">
          <ArrowLeft size={22} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Создать резюме</h1>
      </header>
      <CreateListingForm
        kind="resume"
        titlePlaceholder="Напр. Выгуляю собаку или помогу с закупками"
        descriptionLabel="Описание"
        descriptionPlaceholder="Умения, опыт, когда свободны"
        payLabel="Ожидаемая оплата"
      />
    </div>
  );
}
