export type Language = 'html' | 'css' | 'javascript' | 'git';

export interface LessonCode {
  html: string;
  css: string;
  javascript: string;
  git: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  language: Language;
  category: string;
  code: LessonCode;
}

export interface Tab {
  id: Language;
  label: string;
  icon: string;
}
