import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SandboxData } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { Play, RotateCcw, Save, Terminal, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface LiveSandboxProps {
  lessonId: string;
  sandboxData: SandboxData;
}

export const LiveSandbox: React.FC<LiveSandboxProps> = ({ lessonId, sandboxData }) => {
  const { getSavedSandboxCode, saveSandboxCode } = useProgress();
  const saved = getSavedSandboxCode(lessonId);

  const [html, setHtml] = useState(saved?.html ?? sandboxData.initialHtml);
  const [css, setCss] = useState(saved?.css ?? sandboxData.initialCss);
  const [js, setJs] = useState(saved?.js ?? sandboxData.initialJs);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [logs, setLogs] = useState<string[]>([]);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync state when lessonId changes
  useEffect(() => {
    const currentSaved = getSavedSandboxCode(lessonId);
    setHtml(currentSaved?.html ?? sandboxData.initialHtml);
    setCss(currentSaved?.css ?? sandboxData.initialCss);
    setJs(currentSaved?.js ?? sandboxData.initialJs);
    setLogs([]);
  }, [lessonId, sandboxData]);

  const runCode = useCallback(() => {
    setLogs([]);
    if (!iframeRef.current) return;

    // Use string concatenation for closing script tag to avoid syntax issues
    const scriptEnd = '</' + 'script>';

    const combinedDoc = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background-color: #ffffff;
      line-height: 1.5;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    (function() {
      const origLog = console.log;
      const origErr = console.error;
      const origWarn = console.warn;

      function sendLog(level, args) {
        try {
          const str = Array.from(args).map(arg => {
            if (typeof arg === 'object' && arg !== null) {
              try { return JSON.stringify(arg); } catch(e) { return String(arg); }
            }
            return String(arg);
          }).join(' ');
          window.parent.postMessage({ type: 'SANDBOX_LOG', level: level, message: str }, '*');
        } catch(e) {}
      }

      console.log = function(...args) {
        origLog.apply(console, args);
        sendLog('log', args);
      };
      console.error = function(...args) {
        origErr.apply(console, args);
        sendLog('error', args);
      };
      console.warn = function(...args) {
        origWarn.apply(console, args);
        sendLog('warn', args);
      };

      try {
        ${js}
      } catch(err) {
        console.error(err.message || String(err));
      }
    })();
  ${scriptEnd}
</body>
</html>`;

    iframeRef.current.srcdoc = combinedDoc;
  }, [html, css, js]);

  // Handle messages from sandbox iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'SANDBOX_LOG') {
        setLogs(prev => [...prev, `[${String(e.data.level).toUpperCase()}] ${e.data.message}`]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Run code on initial mount and when code changes
  useEffect(() => {
    const timer = setTimeout(() => {
      runCode();
    }, 100);
    return () => clearTimeout(timer);
  }, [lessonId, runCode]);

  const handleReset = () => {
    setHtml(sandboxData.initialHtml);
    setCss(sandboxData.initialCss);
    setJs(sandboxData.initialJs);
    setLogs([]);
  };

  const handleSave = () => {
    saveSandboxCode(lessonId, { html, css, js });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="sandbox-container">
      <div className="sandbox-instructions">
        <Sparkles size={18} className="text-warning" />
        <span>{sandboxData.instructions}</span>
      </div>

      <div className="sandbox-toolbar">
        <div className="sandbox-tabs">
          <button
            className={`sandbox-tab ${activeTab === 'html' ? 'active' : ''}`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            className={`sandbox-tab ${activeTab === 'css' ? 'active' : ''}`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
          <button
            className={`sandbox-tab ${activeTab === 'js' ? 'active' : ''}`}
            onClick={() => setActiveTab('js')}
          >
            JS
          </button>
        </div>

        <div className="sandbox-actions">
          <button className="btn btn-secondary btn-sm" onClick={handleReset} title="Сбросить к начальному коду">
            <RotateCcw size={14} />
            <span>Сброс</span>
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleSave} title="Сохранить код">
            {savedSuccess ? <CheckCircle2 size={14} className="text-success" /> : <Save size={14} />}
            <span>{savedSuccess ? 'Сохранено!' : 'Сохранить'}</span>
          </button>
          <button className="btn btn-primary btn-sm" onClick={runCode} title="Запустить код">
            <Play size={14} />
            <span>Запустить</span>
          </button>
        </div>
      </div>

      <div className="sandbox-workspace">
        <div className="sandbox-editor-panel">
          {activeTab === 'html' && (
            <textarea
              className="sandbox-code-area"
              value={html}
              onChange={e => setHtml(e.target.value)}
              placeholder="<!-- Введите HTML разметку -->"
              spellCheck={false}
            />
          )}
          {activeTab === 'css' && (
            <textarea
              className="sandbox-code-area"
              value={css}
              onChange={e => setCss(e.target.value)}
              placeholder="/* Введите CSS стили */"
              spellCheck={false}
            />
          )}
          {activeTab === 'js' && (
            <textarea
              className="sandbox-code-area"
              value={js}
              onChange={e => setJs(e.target.value)}
              placeholder="// Введите JavaScript код"
              spellCheck={false}
            />
          )}
        </div>

        <div className="sandbox-preview-panel">
          <div className="sandbox-preview-header">
            <Layers size={16} />
            <span>Живой предварительный просмотр (Live Preview)</span>
          </div>
          <iframe
            ref={iframeRef}
            className="sandbox-iframe"
            title="Sandbox Output"
            sandbox="allow-scripts allow-modals"
          />
        </div>
      </div>

      <div className="sandbox-console-panel">
        <div className="sandbox-console-header">
          <Terminal size={16} />
          <span>Консоль вывода ({logs.length})</span>
          {logs.length > 0 && (
            <button className="btn-text text-xs" onClick={() => setLogs([])}>
              Очистить
            </button>
          )}
        </div>
        <div className="sandbox-console-body">
          {logs.length === 0 ? (
            <div className="console-empty">Вывод console.log появится здесь после запуска...</div>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="console-log-line">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
