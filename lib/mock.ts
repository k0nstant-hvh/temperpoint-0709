import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Code2,
  Palette,
  Bike,
  GraduationCap,
  Camera,
  Megaphone,
  Sparkles,
} from "lucide-react";

export type Category = {
  slug: string;
  label: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { slug: "services", label: "Услуги", icon: Wrench },
  { slug: "it", label: "IT", icon: Code2 },
  { slug: "design", label: "Дизайн", icon: Palette },
  { slug: "courier", label: "Курьерство", icon: Bike },
  { slug: "tutoring", label: "Репетиторство", icon: GraduationCap },
  { slug: "photo", label: "Фото/Видео", icon: Camera },
  { slug: "promo", label: "Промоутер", icon: Megaphone },
  { slug: "other", label: "Разное", icon: Sparkles },
];

export type Job = {
  id: string;
  title: string;
  price: string;
  location: string;
  online: boolean;
  postedAt: string;
  image: string;
};

export const recommendedJobs: Job[] = [
  {
    id: "1",
    title: "Раздача листовок у ТРЦ в выходные",
    price: "5 000 ₸ / день",
    location: "Алматы",
    online: false,
    postedAt: "15 мин назад",
    image: "https://picsum.photos/seed/oren-flyers/600",
  },
  {
    id: "2",
    title: "Верстка простого лендинга на Tailwind",
    price: "25 000 ₸",
    location: "Онлайн",
    online: true,
    postedAt: "1 ч назад",
    image: "https://picsum.photos/seed/oren-landing/600",
  },
  {
    id: "3",
    title: "Выгул собаки 2 раза в день, район Самал",
    price: "3 000 ₸ / день",
    location: "Алматы",
    online: false,
    postedAt: "2 ч назад",
    image: "https://picsum.photos/seed/oren-dog/600",
  },
  {
    id: "4",
    title: "Оформить 5 сторис для инстаграма кофейни",
    price: "10 000 ₸",
    location: "Онлайн",
    online: true,
    postedAt: "3 ч назад",
    image: "https://picsum.photos/seed/oren-stories/600",
  },
  {
    id: "5",
    title: "Помощь на складе: сборка заказов",
    price: "8 000 ₸ / смена",
    location: "Астана",
    online: false,
    postedAt: "5 ч назад",
    image: "https://picsum.photos/seed/oren-warehouse/600",
  },
  {
    id: "6",
    title: "Репетитор по математике для 6 класса",
    price: "4 000 ₸ / час",
    location: "Онлайн",
    online: true,
    postedAt: "вчера",
    image: "https://picsum.photos/seed/oren-math/600",
  },
  {
    id: "7",
    title: "Курьер на своем велосипеде, центр города",
    price: "1 200 ₸ / заказ",
    location: "Шымкент",
    online: false,
    postedAt: "вчера",
    image: "https://picsum.photos/seed/oren-courier/600",
  },
  {
    id: "8",
    title: "Расшифровка аудио интервью в текст",
    price: "6 000 ₸",
    location: "Онлайн",
    online: true,
    postedAt: "2 дня назад",
    image: "https://picsum.photos/seed/oren-transcribe/600",
  },
];
