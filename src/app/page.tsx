'use client';

import { useAppStore } from '@/store/useAppStore';
import { lessons } from '@/data/lessons';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import Modal from '@/components/Modal';

const sectionMeta = {
  html: {
    title: 'HTML',
    subtitle: 'HyperText Markup Language',
    description: 'El lenguaje de marcado que estructura todo el contenido web. Aprende etiquetas, atributos y la semántica que hace accesible tu contenido.',
    color: 'from-orange-500 to-amber-500',
  },
  css: {
    title: 'CSS',
    subtitle: 'Cascading Style Sheets',
    description: 'El lenguaje de estilos que transforma layouts en experiencias visuales memorables. Domina selectores, flexbox, grid y animaciones.',
    color: 'from-blue-500 to-cyan-500',
  },
  javascript: {
    title: 'JavaScript',
    subtitle: 'El lenguaje de la web',
    description: 'El único lenguaje de programación que funciona en navegadores. Añade interactividad, manipula el DOM y crea aplicaciones dinámicas.',
    color: 'from-yellow-500 to-amber-500',
  },
};

export default function Home() {
  const { activeSection, darkMode, selectedLesson } = useAppStore();

  const filteredLessons = lessons.filter((lesson) => lesson.language === activeSection);
  const meta = sectionMeta[activeSection];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main
        className={`flex-1 overflow-auto transition-colors duration-300 ${
          darkMode ? 'bg-[#08080a]' : 'bg-gray-50/50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-12 py-12">
          {/* Hero Section */}
          <header className="mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${meta.color} shadow-lg`}
              >
                {activeSection === 'html' && (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6l8-4 8 4v12l-8 4-8-4V6z" strokeLinejoin="round"/>
                    <path d="M12 2v20M4 6l8 4 8-4" strokeLinejoin="round"/>
                  </svg>
                )}
                {activeSection === 'css' && (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                )}
                {activeSection === 'javascript' && (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 9v6"/>
                    <path d="M15 9v6l-3-3"/>
                  </svg>
                )}
              </div>

              <div className="flex-1 pt-2">
                <div className="flex items-baseline gap-4 mb-2">
                  <h1
                    className={`text-4xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {meta.title}
                  </h1>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? 'text-[#666]' : 'text-gray-500'
                    }`}
                  >
                    {meta.subtitle}
                  </span>
                </div>
                <p
                  className={`text-base leading-relaxed max-w-2xl ${
                    darkMode ? 'text-[#777]' : 'text-gray-600'
                  }`}
                >
                  {meta.description}
                </p>
              </div>
            </div>

            {/* Stats bar */}
            <div
              className={`flex items-center gap-8 px-6 py-4 rounded-2xl ${
                darkMode ? 'bg-[#111115]' : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {filteredLessons.length}
                </span>
                <span className={darkMode ? 'text-[#666]' : 'text-gray-500'}>
                  lecciones
                </span>
              </div>

              <div
                className={`w-px h-8 ${darkMode ? 'bg-[#1f1f25]' : 'bg-gray-200'}`}
              />

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 ${
                        darkMode ? 'border-[#111115]' : 'border-white'
                      } bg-gradient-to-br ${
                        i === 1
                          ? 'from-orange-400 to-amber-500'
                          : i === 2
                          ? 'from-blue-400 to-cyan-500'
                          : 'from-yellow-400 to-amber-500'
                      }`}
                    />
                  ))}
                </div>
                <span className={darkMode ? 'text-[#666]' : 'text-gray-500'}>
                  3 módulos
                </span>
              </div>

              <div
                className={`w-px h-8 ${darkMode ? 'bg-[#1f1f25]' : 'bg-gray-200'}`}
              />

              <div className="flex items-center gap-2">
                <svg
                  className={`w-5 h-5 ${darkMode ? 'text-[#f59e0b]' : 'text-orange-500'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className={darkMode ? 'text-[#666]' : 'text-gray-500'}>
                  Práctica interactiva
                </span>
              </div>
            </div>
          </header>

          {/* Lessons Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2
                className={`text-sm font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-[#555]' : 'text-gray-500'
                }`}
              >
                Lecciones disponibles
              </h2>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  darkMode ? 'bg-[#111115] text-[#666]' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {filteredLessons.length} total
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredLessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-in"
                >
                  <Card lesson={lesson} />
                </div>
              ))}
            </div>

            {filteredLessons.length === 0 && (
              <div
                className={`text-center py-24 rounded-2xl ${
                  darkMode ? 'bg-[#111115]' : 'bg-white border border-gray-100'
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    darkMode ? 'bg-[#1a1a20]' : 'bg-gray-100'
                  }`}
                >
                  <svg
                    className={`w-8 h-8 ${darkMode ? 'text-[#444]' : 'text-gray-300'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className={darkMode ? 'text-[#666]' : 'text-gray-500'}>
                  No hay lecciones disponibles aún
                </p>
              </div>
            )}
          </section>

          {/* Footer */}
          <footer
            className={`mt-20 pt-8 border-t ${
              darkMode ? 'border-[#111115] text-[#444]' : 'border-gray-200 text-gray-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm">
                CodeLearn — Aprende HTML, CSS y JavaScript de forma práctica
              </p>
              <a href="https://ranserot.xyz" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">by Francisco Cerda</a>
            </div>
          </footer>
        </div>
      </main>

      {selectedLesson && <Modal />}
    </div>
  );
}
