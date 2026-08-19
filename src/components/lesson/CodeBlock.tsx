import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

interface Token {
  type: string;
  text: string;
}

export function detectLanguage(code: string): string {
  const trimmed = code.trim();
  if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<!--') || (trimmed.includes('<') && (trimmed.includes('>') || trimmed.includes('</')))) {
    return 'html';
  }
  if (/^[.#@a-zA-Z0-9_-]+\s*\{/m.test(trimmed) || /:\s*[^;{}]+;/.test(trimmed)) {
    return 'css';
  }
  if (/\b(const|let|var|function|return|import|export|typeof|console|new|class|=>)\b/.test(trimmed)) {
    return 'javascript';
  }
  if (/^(git|npm|yarn|pnpm|npx|cd|ls|mkdir)\b/m.test(trimmed) || trimmed.startsWith('#') || trimmed.startsWith('[x]')) {
    return 'bash';
  }
  return 'html';
}

export function tokenizeCode(rawCode: string, lang: string): Token[][] {
  const normalizedLang = (lang || detectLanguage(rawCode)).toLowerCase();
  const tokens: Token[] = [];

  if (normalizedLang === 'html' || normalizedLang === 'xml') {
    const htmlRegex = new RegExp(
      '(<!--[\\s\\S]*?-->|<!DOCTYPE[\\s\\S]*?>|<\\/?[a-zA-Z0-9_-]+|[a-zA-Z0-9_:-]+=(?:"[^"]*"|\'[^\']*\')|[a-zA-Z0-9_:-]+|"[^"]*"|\'[^\']*\'|\\/?>|>|[^<\\s"\'=]+|\\s+)',
      'g'
    );
    let match: RegExpExecArray | null;
    let inTag = false;

    while ((match = htmlRegex.exec(rawCode)) !== null) {
      const text = match[0];
      if (text.startsWith('<!--')) {
        tokens.push({ type: 'syn-comment', text });
      } else if (text.toUpperCase().startsWith('<!DOCTYPE')) {
        tokens.push({ type: 'syn-doctype', text });
      } else if (text.startsWith('</')) {
        tokens.push({ type: 'syn-bracket', text: '</' });
        tokens.push({ type: 'syn-tag', text: text.slice(2) });
        inTag = true;
      } else if (text.startsWith('<')) {
        tokens.push({ type: 'syn-bracket', text: '<' });
        tokens.push({ type: 'syn-tag', text: text.slice(1) });
        inTag = true;
      } else if (text === '>' || text === '/>') {
        tokens.push({ type: 'syn-bracket', text });
        inTag = false;
      } else if (inTag && text.includes('=')) {
        const eqIdx = text.indexOf('=');
        const name = text.slice(0, eqIdx);
        const val = text.slice(eqIdx + 1);
        tokens.push({ type: 'syn-attr', text: name });
        tokens.push({ type: 'syn-operator', text: '=' });
        tokens.push({ type: 'syn-string', text: val });
      } else if (inTag && (text.startsWith('"') || text.startsWith("'"))) {
        tokens.push({ type: 'syn-string', text });
      } else if (inTag && /^[a-zA-Z0-9_:-]+$/.test(text)) {
        tokens.push({ type: 'syn-attr', text });
      } else {
        tokens.push({ type: 'syn-text', text });
      }
    }
  } else if (normalizedLang === 'css') {
    const cssRegex = new RegExp(
      '(\\/\\*[\\s\\S]*?\\*\\/|"[^"]*"|\'[^\']*\'|[a-zA-Z0-9_-]+(?=\\s*:)|:[^;{}]+|[{};:,]|@[a-zA-Z0-9_-]+|\\.[a-zA-Z0-9_-]+|#[a-zA-Z0-9_-]+|[a-zA-Z0-9_-]+|\\s+|[^\\s])',
      'g'
    );
    let match: RegExpExecArray | null;
    while ((match = cssRegex.exec(rawCode)) !== null) {
      const text = match[0];
      if (text.startsWith('/*')) {
        tokens.push({ type: 'syn-comment', text });
      } else if (text.startsWith('"') || text.startsWith("'")) {
        tokens.push({ type: 'syn-string', text });
      } else if (text.startsWith('.')) {
        tokens.push({ type: 'syn-tag', text });
      } else if (text.startsWith('#')) {
        tokens.push({ type: 'syn-attr', text });
      } else if (text.startsWith('@')) {
        tokens.push({ type: 'syn-keyword', text });
      } else if (text === '{' || text === '}' || text === ';' || text === ':') {
        tokens.push({ type: 'syn-bracket', text });
      } else {
        tokens.push({ type: 'syn-text', text });
      }
    }
  } else {
    // JavaScript / TypeScript / Bash / JSON / Default
    const jsKeywords = new Set([
      'const', 'let', 'var', 'function', 'return', 'import', 'export', 'from',
      'async', 'await', 'class', 'extends', 'super', 'new', 'if', 'else', 'for',
      'while', 'do', 'switch', 'case', 'break', 'continue', 'try', 'catch',
      'finally', 'throw', 'typeof', 'instanceof', 'in', 'of', 'this', 'null',
      'undefined', 'true', 'false', 'NaN', 'default', 'git', 'npm', 'yarn', 'pnpm'
    ]);
    const jsRegex = new RegExp(
      '(\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/|`[^`]*`|"[^"]*"|\'[^\']*\'|\\b[a-zA-Z0-9_$]+\\b|[{}()\\[\\].,;:+\\-*\\/%=<>!&|^~?]+|\\s+)',
      'g'
    );
    let match: RegExpExecArray | null;
    while ((match = jsRegex.exec(rawCode)) !== null) {
      const text = match[0];
      if (text.startsWith('//') || text.startsWith('/*')) {
        tokens.push({ type: 'syn-comment', text });
      } else if (text.startsWith('`') || text.startsWith('"') || text.startsWith("'")) {
        tokens.push({ type: 'syn-string', text });
      } else if (jsKeywords.has(text)) {
        tokens.push({ type: 'syn-keyword', text });
      } else if (/^[0-9]+(\.[0-9]+)?$/.test(text)) {
        tokens.push({ type: 'syn-string', text });
      } else if (/^[{}()[\],;:+\-*\/%=<>!&|^~?]+$/.test(text)) {
        tokens.push({ type: 'syn-bracket', text });
      } else {
        tokens.push({ type: 'syn-text', text });
      }
    }
  }

  // Split tokens into lines for numbering
  const lines: Token[][] = [[]];
  for (const token of tokens) {
    const parts = token.text.split('\n');
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        lines.push([]);
      }
      if (parts[i]) {
        lines[lines.length - 1].push({ type: token.type, text: parts[i] });
      }
    }
  }

  return lines;
}

/**
 * Compact Code Snippet for inline blocks and mistake examples
 */
export const CodeSnippet: React.FC<{ code: string; language?: string; className?: string }> = ({
  code,
  language,
  className
}) => {
  const lang = language || detectLanguage(code);
  const lines = tokenizeCode(code, lang);

  return (
    <pre className={`code-snippet ${className || ''}`}>
      {lines.map((lineTokens, lineIdx) => (
        <div key={lineIdx} className="code-snippet-line">
          {lineTokens.map((t, tokenIdx) => (
            <span key={tokenIdx} className={t.type}>
              {t.text}
            </span>
          ))}
        </div>
      ))}
    </pre>
  );
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = tokenizeCode(code, language);

  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="code-block-header-left">
          <Terminal size={13} className="text-accent" />
          <span className="code-block-lang">{title || language.toUpperCase()}</span>
        </div>
        <button className="code-block-copy" onClick={handleCopy}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
        </button>
      </div>
      <div className="code-block-body">
        <pre className="code-block-pre">
          {lines.map((lineTokens, lineIdx) => (
            <div key={lineIdx} className="code-block-line">
              <span className="code-block-line-num">{lineIdx + 1}</span>
              <span className="code-block-line-text">
                {lineTokens.map((t, tokenIdx) => (
                  <span key={tokenIdx} className={t.type}>
                    {t.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
