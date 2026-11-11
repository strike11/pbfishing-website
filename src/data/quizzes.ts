import type { Quiz } from "./quiz-types";
export type { Quiz, QuizQuestion, QuizOption, QuizResult, Tint } from "./quiz-types";

const mods = import.meta.glob<{ default: Quiz }>("./quizzes/*.ts", { eager: true });
export const QUIZZES: Quiz[] = Object.values(mods).map((m) => m.default).sort((a, b) => a.title.localeCompare(b.title));
export const quizBySlug = (slug: string) => QUIZZES.find((q) => q.slug === slug);
