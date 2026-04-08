'use client';

import { useAppStore } from '@/store/useAppStore';
import { Highlight, themes } from 'prism-react-renderer';
import { Language } from '@/types';
import { useState } from 'react';

const tabs: { id: Language; label: string; color: string }[] = [
  { id: 'html', label: 'HTML', color: 'text-orange-500' },
  { id: 'css', label: 'CSS', color: 'text-blue-500' },
  { id: 'javascript', label: 'JS', color: 'text-yellow-500' },
  { id: 'git', label: 'Git', color: 'text-red-500' },
];

export default function Modal() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    darkMode,
    selectedLesson,
    setSelectedLesson,
    isEditorOpen,
    setIsEditorOpen,
    editedCode,
    setEditedCodeField,
    setEditedCode,
    activeTab,
    setActiveTab,
  } = useAppStore();

  if (!selectedLesson) return null;

  const handleClose = () => {
    setSelectedLesson(null);
    setIsEditorOpen(false);
    setEditedCode({ html: '', css: '', javascript: '', git: undefined });
  };

  const handleOpenEdit = () => {
    setEditedCode(selectedLesson.code);
    // Set active tab to the primary language of the lesson
    setActiveTab(selectedLesson.language);
    setIsEditorOpen(true);
  };

  // Build the preview HTML combining HTML, CSS, and JS
  // Only include CSS/JS based on the current module (progressive learning)
  const buildPreview = (code: typeof editedCode) => {
    // For Git module, show a terminal simulation with colored syntax
    if (primaryLanguage === 'git') {
      const gitCode = code.git || selectedLesson.code.git || '';
      // Colorize git code: comments (green), commands (yellow), output (gray)
      const colorized = gitCode
        .replace(/^(#.*)$/gm, '<span style="color:#7ee787">$1</span>')
        .replace(/^(git\s+\w+)/gm, '<span style="color:#ff7b72">$1</span>')
        .replace(/^(https?:\/\/[^\s]+)/gm, '<span style="color:#79c0ff">$1</span>')
        .replace(/\b(main|master|HEAD|origin)\b/g, '<span style="color:#d2a8ff">$1</span>')
        .replace(/^(-{2,}[a-zA-Z]+)/gm, '<span style="color:#79c0ff">$1</span>')
        .replace(/\bfalse\b|\btrue\b/g, '<span style="color:#79c0ff">$&</span>');

      return `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #0d1117;
      color: #c9d1d9;
      font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace;
      padding: 20px;
      font-size: 13px;
      line-height: 1.6;
      overflow-x: hidden;
    }
    .terminal-header {
      background: #161b22;
      padding: 10px 15px;
      border-radius: 8px 8px 0 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .terminal-title {
      color: #8b949e;
      font-size: 12px;
      margin-left: 8px;
    }
    .terminal-dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }
    .terminal-body {
      background: #0d1117;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      min-height: 200px;
    }
    .comment { color: #7ee787; }
    .command { color: #ff7b72; }
    .url { color: #79c0ff; }
    .branch { color: #d2a8ff; }
  </style>
</head>
<body>
  <div class="terminal-header">
    <span class="terminal-dot dot-red"></span>
    <span class="terminal-dot dot-yellow"></span>
    <span class="terminal-dot dot-green"></span>
    <span class="terminal-title">terminal</span>
  </div>
  <div class="terminal-body">${colorized.split('\n').join('<br>')}</div>
</body>
</html>`;
    }

    const { html, css, javascript } = code;

    // Progressive: only include CSS for CSS/JS modules, only include JS for JS module
    const shouldIncludeCSS = primaryLanguage !== 'html';
    const shouldIncludeJS = primaryLanguage === 'javascript';

    const cssToInclude = shouldIncludeCSS ? css : '';
    const jsToInclude = shouldIncludeJS ? javascript : '';

    // Check if HTML is a complete document or a fragment
    const isCompleteDocument = html.includes('<html') || html.includes('<!DOCTYPE');

    if (isCompleteDocument) {
      // HTML already has structure - inject CSS and JS into it
      let fullHtml = html;

      if (cssToInclude && !html.includes('<style>')) {
        fullHtml = fullHtml.replace('</head>', `<style>\n${cssToInclude}\n</style></head>`);
      }
      if (jsToInclude && !html.includes('<script>')) {
        fullHtml = fullHtml.replace('</body>', `<script>\n${jsToInclude}\n</script></body>`);
      }
      return fullHtml;
    }

    // HTML is a fragment - wrap it in a complete document
    const cssBlock = cssToInclude ? `\n<style>\n${cssToInclude}\n</style>` : '';
    const jsBlock = jsToInclude ? `\n<script>\n${jsToInclude}\n</script>` : '';

    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">${cssBlock}
</head>
<body>
  ${html}${jsBlock}
</body>
</html>`;
  };

  const currentCode = editedCode.html || editedCode.css || editedCode.javascript || editedCode.git
    ? editedCode
    : selectedLesson.code;

  // Get the language that should be shown first (based on which module we're in)
  const primaryLanguage = selectedLesson.language;

  // Define which tabs should be shown based on the module (progressive learning)
  const tabsOrder: Record<Language, Language[]> = {
    html: ['html'],
    css: ['html', 'css'],
    javascript: ['html', 'css', 'javascript'],
    git: ['git'],
  };

  // Git demo commands for animated preview
  const getGitDemoCommand = (lessonId: string | undefined) => {
    const demos: Record<string, string> = {
      'git-1': 'git init',
      'git-2': 'git clone https://github.com/user/repo.git',
      'git-3': 'git status',
      'git-4': 'git add .',
      'git-5': 'git commit -m "Initial commit"',
      'git-6': 'git config --global user.name "User"',
      'git-7': 'git log --oneline',
      'git-8': 'git diff',
      'git-9': 'git pull origin main',
      'git-10': 'git push -u origin main',
      'git-11': 'git remote add origin https://github.com/user/repo.git',
      'git-12': 'git branch feature/login',
      'git-13': 'git checkout feature/login',
      'git-14': 'git merge feature/login',
      'git-15': 'git branch -d feature/login',
      'git-16': 'git restore --staged file.txt',
      'git-17': 'git restore file.txt',
      'git-18': 'git reset --hard HEAD~1',
      'git-19': 'git revert abc1234',
      'git-20': 'git push -u origin main',
      'git-21': 'git pull origin feature/login',
      'git-22': 'git fetch origin',
      'git-23': 'git config --global alias.lg log --oneline',
      'git-24': 'git stash',
    };
    return demos[lessonId || ''] || 'git command';
  };

  const getGitDemoOutput = (lessonId: string | undefined) => {
    const outputs: Record<string, string> = {
      'git-1': 'Initialized empty Git repository in /path/.git/',
      'git-2': 'Cloning into "repo"...\nremote: Enumerating objects: 100\nReceiving objects: 100%',
      'git-3': 'On branch main\nYour branch is up to date with "origin/main".',
      'git-4': 'Changes to be committed:\n  modified:   src/app.tsx',
      'git-5': '[main abc1234] Initial commit\n 1 file changed, 50 insertions(+)',
      'git-6': 'Username configured successfully',
      'git-7': 'abc1234 (HEAD -> main) Initial commit',
      'git-8': 'diff --git a/src/app.tsx b/src/app.tsx\n--- a/src/app.tsx\n+++ b/src/app.tsx',
      'git-9': 'Updating abc1234..def5678\nFast-forward',
      'git-10': 'Enumerating objects: 5, done.\nCounting objects: 100%',
      'git-11': 'Repository URL associated with "origin"',
      'git-12': 'Created branch feature/login',
      'git-13': 'Switched to branch "feature/login"',
      'git-14': 'Merge made by the "ort" strategy.',
      'git-15': 'Deleted branch feature/login (was abc1234).',
      'git-16': '',
      'git-17': '',
      'git-18': 'HEAD is now at abc1234 Previous commit',
      'git-19': '[main def5678] Revert "Add feature"',
      'git-20': 'Branch "main" set up to track "origin/main"',
      'git-21': 'Updating abc1234..def5678',
      'git-22': 'Fetching origin',
      'git-23': '',
      'git-24': 'Saved working directory and index state WIP on main',
    };
    return outputs[lessonId || ''] || '';
  };

  const previewHtml = buildPreview(currentCode);

  // Only show tabs based on the module's progressive level
  const availableTabs = tabs.filter(tab => tabsOrder[primaryLanguage].includes(tab.id));

  // Default to the primary language tab
  const defaultTab = availableTabs.find(tab => tab.id === primaryLanguage) || availableTabs[0];

  // Set initial tab when modal opens
  React.useEffect(() => {
    if (defaultTab && !isEditorOpen) {
      setActiveTab(defaultTab.id);
    }
  }, []);

  // Reset editedCode when switching lessons
  React.useEffect(() => {
    setEditedCode({ html: '', css: '', javascript: '', git: undefined });
    setIsFullscreen(false);
  }, [selectedLesson?.id]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 ${
          isFullscreen
            ? 'w-[95vw] h-[95vh]'
            : 'max-w-6xl max-h-[92vh]'
        } ${
          darkMode ? 'bg-[#0c0c0e]' : 'bg-white'
        }`}
        style={isFullscreen ? { width: '95vw', height: '95vh' } : {}}
      >
        {!isEditorOpen ? (
          <div className={`flex flex-col ${isFullscreen ? 'h-full' : 'h-full max-h-[92vh]'}`}>
            {/* Header */}
            <header
              className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
                darkMode ? 'border-[#1a1a20]' : 'border-gray-100'
              }`}
            >
              <div>
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    darkMode ? 'text-[#666]' : 'text-gray-400'
                  }`}
                >
                  {selectedLesson.category}
                </span>
                <h2
                  className={`text-xl font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {selectedLesson.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleOpenEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-black font-semibold text-sm rounded-xl transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Editar
                </button>
                <button
                  onClick={handleClose}
                  className={`p-2 rounded-xl transition-colors ${
                    darkMode ? 'hover:bg-[#1a1a20] text-[#666] hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </header>

            {/* Main content area */}
            <div className={`flex flex-1 overflow-hidden ${isFullscreen ? 'flex-col' : ''}`}>
              {/* Fullscreen Preview */}
              {isFullscreen ? (
                <div className="flex-1 flex flex-col relative">
                  <div
                    className={`px-4 py-3 border-b shrink-0 flex items-center justify-between ${
                      darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${darkMode ? 'text-[#555]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                        Vista previa
                      </span>
                    </div>
                    <button
                      onClick={() => setIsFullscreen(false)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        darkMode ? 'hover:bg-[#1a1a20] text-[#888]' : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cerrar
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    <iframe
                      key={selectedLesson.id + '-preview-' + activeTab}
                      srcDoc={previewHtml}
                      className="w-full h-full rounded-xl border bg-white"
                      sandbox="allow-scripts"
                      title="Preview"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* Left side: Preview */}
                  <div
                    className={`w-1/2 border-r shrink-0 flex flex-col ${
                      darkMode ? 'border-[#1a1a20] bg-[#08080a]' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div
                      className={`px-4 py-3 border-b shrink-0 flex items-center justify-between ${
                        darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <svg className={`w-4 h-4 ${darkMode ? 'text-[#555]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                          Vista previa
                        </span>
                      </div>
                      <button
                        onClick={() => setIsFullscreen(true)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          darkMode ? 'hover:bg-[#1a1a20] text-[#666] hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                        }`}
                        title="Pantalla completa"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-1 overflow-hidden p-3">
                      <iframe
                        srcDoc={previewHtml}
                        className="w-full h-full rounded-xl border bg-white"
                        sandbox="allow-scripts"
                        title="Preview"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Right side: Code + tabs - hidden in fullscreen */}
              {!isFullscreen && primaryLanguage === 'git' && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Git preview - animated terminal demo */}
                  <div
                    className={`px-4 py-3 border-b shrink-0 flex items-center justify-between ${
                      darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                        Demo animado
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden p-3 bg-[#0d1117]">
                    <div className="h-full rounded-xl overflow-hidden bg-[#161b22] border border-[#30363d]">
                      <div className="bg-[#1c2128] px-4 py-2 flex items-center gap-2 border-b border-[#30363d]">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="ml-2 text-xs text-[#8b949e]">bash</span>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <div className="text-[#7ee787] animate-pulse">$ {getGitDemoCommand(selectedLesson.id)}</div>
                        <div className="mt-2 text-[#8b949e] text-xs">{getGitDemoOutput(selectedLesson.id)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Right side: Code + tabs - for non-git lessons */}
              {!isFullscreen && primaryLanguage !== 'git' && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Tabs */}
                  <div
                    className={`flex border-b shrink-0 ${
                      darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {availableTabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                          isActive
                            ? darkMode ? 'text-white bg-[#111115]' : 'text-gray-900 bg-white'
                            : darkMode
                            ? 'text-[#666] hover:text-[#aaa]'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <span className={tab.color}>{tab.label}</span>
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f59e0b]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Code display */}
                <div className="flex-1 overflow-auto p-4">
                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-[#777]' : 'text-gray-600'}`}>
                    {selectedLesson.description}
                  </p>

                  {/* Code block */}
                  {currentCode[activeTab] && (
                    <div
                      className={`rounded-xl overflow-hidden border ${
                        darkMode ? 'border-[#1a1a20]' : 'border-gray-200'
                      }`}
                    >
                      <Highlight
                        theme={darkMode ? themes.nightOwl : themes.github}
                        code={currentCode[activeTab].trim()}
                        language={activeTab === 'javascript' ? 'javascript' : activeTab === 'css' ? 'css' : 'markup'}
                      >
                        {({ style, tokens, getLineProps, getTokenProps }) => (
                          <pre
                            className="p-4 overflow-x-auto text-sm max-h-80"
                            style={{ ...style, background: darkMode ? '#111115' : '#f6f8fa' }}
                          >
                            {tokens.map((line, i) => (
                              <div key={i} {...getLineProps({ line })}>
                                <span
                                  className={`inline-block w-8 text-right mr-4 select-none text-xs ${
                                    darkMode ? 'text-[#3a3a45]' : 'text-gray-300'
                                  }`}
                                >
                                  {i + 1}
                                </span>
                                {line.map((token, key) => (
                                  <span key={key} {...getTokenProps({ token })} />
                                ))}
                              </div>
                            ))}
                          </pre>
                        )}
                      </Highlight>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Editor Mode */
          <div className="flex flex-col h-full max-h-[92vh]">
            {/* Editor Header */}
            <header
              className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
                darkMode ? 'border-[#1a1a20]' : 'border-gray-100'
              }`}
            >
              <div>
                <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Editando: {selectedLesson.title}
                </h2>
                <p className={`text-xs ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                  Modifica y ve los cambios en tiempo real
                </p>
              </div>

              <button
                onClick={handleClose}
                className={`p-2 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-[#1a1a20] text-[#666] hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            {/* Editor body: split view */}
            <div className="flex flex-1 overflow-hidden">
              {/* Code editor */}
              <div className={`flex-1 flex flex-col ${darkMode ? 'bg-[#0a0a0e]' : 'bg-gray-50'}`}>
                {/* Tabs for editing */}
                <div className={`flex border-b ${darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'}`}>
                  {availableTabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors relative ${
                          isActive
                            ? darkMode ? 'text-white bg-[#111115]' : 'text-gray-900 bg-white'
                            : darkMode
                            ? 'text-[#666] hover:text-[#aaa]'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <span className={tab.color}>{tab.label}</span>
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f59e0b]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Textarea */}
                <div className="flex-1 p-4 overflow-auto">
                  <textarea
                    value={currentCode[activeTab] || ''}
                    onChange={(e) => setEditedCodeField(activeTab, e.target.value)}
                    className={`w-full h-full min-h-[300px] p-4 rounded-xl font-mono text-sm resize-none focus:outline-none ${
                      darkMode
                        ? 'bg-[#111115] text-[#e0e0e0] border border-[#2a2a32]'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                    spellCheck={false}
                    style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', monospace" }}
                    placeholder={`Escribe tu código ${activeTab.toUpperCase()} aquí...`}
                  />
                </div>
              </div>

              {/* Preview */}
              <div
                className={`w-1/2 flex flex-col border-l ${
                  darkMode ? 'border-[#1a1a20] bg-[#08080a]' : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div
                  className={`px-4 py-3 border-b shrink-0 ${
                    darkMode ? 'border-[#1a1a20] bg-[#0c0c0e]' : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${darkMode ? 'text-[#555]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className={`text-xs font-medium ${darkMode ? 'text-[#666]' : 'text-gray-500'}`}>
                      Vista previa en vivo
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-3 overflow-hidden">
                  <iframe
                    srcDoc={previewHtml}
                    className="w-full h-full rounded-xl border bg-white"
                    sandbox="allow-scripts"
                    title="Preview"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Need to import React for useEffect
import React from 'react';
