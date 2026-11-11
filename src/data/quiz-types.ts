/** Tint names map to the app's palette (AssessmentView.swift option chips). */
export type Tint = "navy" | "steel" | "forest" | "orange" | "gold";

export interface QuizOption {
  label: string;
  sub?: string;
  /** Lucide icon name (lucide.dev), rendered inline. */
  icon: string;
  tint?: Tint;
  /** personality quizzes: points per result slug. */
  scores?: Record<string, number>;
  /** trivia quizzes: the right answer. */
  correct?: boolean;
}

export interface QuizQuestion {
  q: string;
  sub?: string;
  icon: string;
  tint?: Tint;
  options: QuizOption[];
  /** trivia: one or two sentences shown after answering. */
  explain?: string;
}

export interface QuizResult {
  slug: string;
  title: string;
  /** One line under the result title; also the share text. */
  tagline: string;
  icon: string;
  tint?: Tint;
  /** trivia: lowest score (number correct) that lands this result. */
  minScore?: number;
  /** 2–4 paragraphs. Inline **bold** and [links](/path) allowed. */
  body: string[];
  /** 3–5 concrete next steps. */
  tips: string[];
  /** Internal guides that fit this result. */
  links: { href: string; label: string }[];
  /** How PB Fishing fits this angler. Honest, specific. */
  app: { title: string; text: string };
}

export interface Quiz {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  /** Two or three sentences on the start screen. */
  intro: string;
  kind: "personality" | "trivia";
  icon: string;
  tint?: Tint;
  minutes: number;
  /** Search phrase this quiz targets. */
  keyword: string;
  art: string;
  questions: QuizQuestion[];
  results: QuizResult[];
  /** Optional FAQ under the quiz (indexable text). */
  faq?: { q: string; a: string }[];
  published: string;
}
