'use client';

import { Lesson } from '@/types';
import { useAppStore } from '@/store/useAppStore';

interface CardProps {
  lesson: Lesson;
}

export default function Card({ lesson }: CardProps) {
  const { darkMode, setSelectedLesson } = useAppStore();

  const categoryColors: Record<string, string> = {
    fundamentos: darkMode ? 'from-amber-500/20 to-orange-500/20 border-amber-500/30' : 'from-amber-50 to-orange-50 border-amber-200',
    estructura: darkMode ? 'from-blue-500/20 to-cyan-500/20 border-blue-500/30' : 'from-blue-50 to-cyan-50 border-blue-200',
    layout: darkMode ? 'from-purple-500/20 to-pink-500/20 border-purple-500/30' : 'from-purple-50 to-pink-50 border-purple-200',
    formularios: darkMode ? 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30' : 'from-emerald-50 to-teal-50 border-emerald-200',
    datos: darkMode ? 'from-rose-500/20 to-red-500/20 border-rose-500/30' : 'from-rose-50 to-red-50 border-rose-200',
    selectores: darkMode ? 'from-violet-500/20 to-indigo-500/20 border-violet-500/30' : 'from-violet-50 to-indigo-50 border-violet-200',
    animaciones: darkMode ? 'from-pink-500/20 to-rose-500/20 border-pink-500/30' : 'from-pink-50 to-rose-50 border-pink-200',
    avanzado: darkMode ? 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30' : 'from-cyan-50 to-blue-50 border-cyan-200',
    dom: darkMode ? 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30' : 'from-yellow-50 to-amber-50 border-yellow-200',
    arrays: darkMode ? 'from-green-500/20 to-emerald-500/20 border-green-500/30' : 'from-green-50 to-emerald-50 border-green-200',
    async: darkMode ? 'from-teal-500/20 to-cyan-500/20 border-teal-500/30' : 'from-teal-50 to-cyan-50 border-teal-200',
  };

  const languageColors = {
    html: darkMode ? 'text-orange-400' : 'text-orange-600',
    css: darkMode ? 'text-blue-400' : 'text-blue-600',
    javascript: darkMode ? 'text-yellow-400' : 'text-yellow-600',
    git: darkMode ? 'text-red-400' : 'text-red-600',
  };

  const colorClass = categoryColors[lesson.category] || categoryColors.fundamentos;

  return (
    <button
      onClick={() => setSelectedLesson(lesson)}
      className={`group relative w-full text-left p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        darkMode
          ? 'bg-[#111115] hover:bg-[#141418] border border-[#1f1f25] hover:border-[#2a2a32]'
          : 'bg-white hover:bg-white border border-gray-100 hover:shadow-lg hover:shadow-black/5'
      }`}
    >
      {/* Gradient accent */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${colorClass}`} />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className={`inline-block px-2.5 py-1 text-xs font-medium rounded-md mb-3 ${
                darkMode
                  ? 'bg-[#1a1a20] text-[#888]'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {lesson.category}
            </span>
          </div>

          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
              darkMode ? 'bg-[#1a1a20]' : 'bg-gray-100'
            }`}
          >
            <svg
              className={`w-4 h-4 transition-colors ${darkMode ? 'text-[#666] group-hover:text-[#f59e0b]' : 'text-gray-400 group-hover:text-gray-900'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-lg font-bold mb-2 transition-colors duration-200 ${
            darkMode ? 'text-white group-hover:text-[#f59e0b]' : 'text-gray-900 group-hover:text-orange-600'
          }`}
        >
          {lesson.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
          {lesson.description}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-2 pt-3 border-t border-dashed border-opacity-30 ${darkMode ? 'border-[#2a2a30]' : 'border-gray-200'}">
          <span className={`text-xs font-mono uppercase tracking-wider ${languageColors[lesson.language]}`}>
            {lesson.language}
          </span>
          <span className={darkMode ? 'text-[#333]' : 'text-gray-300'}>•</span>
          <span className={`text-xs ${darkMode ? 'text-[#555]' : 'text-gray-400'}`}>
            {lesson.code.html ? 'HTML' : ''}
            {lesson.code.css ? ' CSS' : ''}
            {lesson.code.javascript ? ' JS' : ''}
          </span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${
          lesson.language === 'html'
            ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20'
            : lesson.language === 'css'
            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
            : 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20'
        }`}
      />
    </button>
  );
}
