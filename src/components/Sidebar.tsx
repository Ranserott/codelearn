'use client';

import { useAppStore } from '@/store/useAppStore';
import { Language } from '@/types';

const sections: { id: Language; label: string; description: string }[] = [
  { id: 'html', label: 'HTML', description: 'Estructura' },
  { id: 'css', label: 'CSS', description: 'Estilos' },
  { id: 'javascript', label: 'JS', description: 'Interacción' },
  { id: 'git', label: 'Git', description: 'Versiones' },
];

export default function Sidebar() {
  const { activeSection, setActiveSection, darkMode, toggleDarkMode } = useAppStore();

  return (
    <aside
      className={`w-72 min-h-screen flex flex-col relative transition-colors duration-300 ${
        darkMode
          ? 'bg-[#0c0c0e] border-r border-[#1a1a20]'
          : 'bg-white border-r border-gray-100'
      }`}
    >
      {/* Logo */}
      <div className="px-8 py-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M4 6l8-4 8 4v12l-8 4-8-4V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M12 2v20M4 6l8 4 8-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              CodeLearn
            </h1>
            <p className={`text-xs ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
              Aprende haciendo
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className={`text-xs font-medium uppercase tracking-wider mb-3 px-4 ${darkMode ? 'text-[#666]' : 'text-gray-400'}`}>
          Lenguajes
        </div>

        <ul className="space-y-1">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group relative ${
                  activeSection === section.id
                    ? darkMode
                      ? 'bg-[#1a1a20]'
                      : 'bg-gray-50'
                    : darkMode
                    ? 'hover:bg-[#111115]'
                    : 'hover:bg-gray-50'
                }`}
              >
                {/* Active indicator */}
                {activeSection === section.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#f59e0b] rounded-r-full" />
                )}

                {/* Number */}
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-[#f59e0b] text-black'
                      : darkMode
                      ? 'bg-[#1a1a20] text-[#888] group-hover:text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:text-gray-900'
                  }`}
                >
                  {index + 1}
                </span>

                {/* Text */}
                <div className="flex-1 text-left">
                  <div
                    className={`font-semibold text-sm transition-colors ${
                      activeSection === section.id
                        ? darkMode ? 'text-white' : 'text-gray-900'
                        : darkMode ? 'text-[#aaa]' : 'text-gray-600'
                    }`}
                  >
                    {section.label}
                  </div>
                  <div
                    className={`text-xs transition-colors ${
                      darkMode ? 'text-[#555]' : 'text-gray-400'
                    }`}
                  >
                    {section.description}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className={`w-4 h-4 transition-all duration-200 ${
                    activeSection === section.id
                      ? 'text-[#f59e0b] opacity-100'
                      : 'opacity-0 group-hover:opacity-100 ' + (darkMode ? 'text-[#666]' : 'text-gray-400')
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-6">
        <button
          onClick={toggleDarkMode}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            darkMode
              ? 'bg-[#111115] hover:bg-[#1a1a20] text-[#888] hover:text-white'
              : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            darkMode ? 'bg-[#1a1a20]' : 'bg-gray-100'
          }`}>
            {darkMode ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </div>
          <span className="text-sm font-medium">
            {darkMode ? 'Modo claro' : 'Modo oscuro'}
          </span>
        </button>
      </div>

      {/* Decorative corner */}
      <div
        className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-5 ${
          darkMode ? 'bg-[#f59e0b]' : 'bg-gray-900'
        }`}
      />
    </aside>
  );
}
