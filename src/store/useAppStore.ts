import { create } from 'zustand';
import { Language, Lesson, LessonCode } from '@/types';

interface AppState {
  activeSection: Language;
  setActiveSection: (section: Language) => void;

  selectedLesson: Lesson | null;
  setSelectedLesson: (lesson: Lesson | null) => void;

  isEditorOpen: boolean;
  setIsEditorOpen: (isOpen: boolean) => void;

  editedCode: LessonCode;
  setEditedCodeField: (field: keyof LessonCode, value: string) => void;
  setEditedCode: (code: LessonCode) => void;

  activeTab: Language;
  setActiveTab: (tab: Language) => void;

  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: 'html',
  setActiveSection: (section) => set({ activeSection: section }),

  selectedLesson: null,
  setSelectedLesson: (lesson) => set({ selectedLesson: lesson }),

  isEditorOpen: false,
  setIsEditorOpen: (isOpen) => set({ isEditorOpen: isOpen }),

  editedCode: { html: '', css: '', javascript: '', git: undefined },
  setEditedCodeField: (field, value) =>
    set((state) => ({ editedCode: { ...state.editedCode, [field]: value } })),
  setEditedCode: (code) => set({ editedCode: code }),

  activeTab: 'html',
  setActiveTab: (tab) => set({ activeTab: tab }),

  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
