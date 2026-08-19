import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

/**
 * Syntax highlighter for HTML, CSS, and JS in Cyberpunk aesthetic
 */
function highlightHtmlLine(line: string): React.ReactNode {
  // Check for HTML comment
  if (line.trim().startsWith('<!--') && line.trim().endsWith('-->')) {
    return <span className="syn-comment">{line}</span>;
  }

  // Tokenize HTML tags, attributes, strings, comments
  // Matches tags <...> and content
  const tokens: React.ReactNode[] = [];
  const tagRegex = /(<!--[\s\S]*?-->|<!DOCTYPE\s+html>|<!DOCTYPE>|<\/?[a-zA-Z0-9_-]+(?:\s+[^>]*)?>|[^<]+)/g;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = tagRegex.exec(line)) !== null) {
    const part = match[0];

    if (part.startsWith('<!--')) {
      tokens.push(<span key={key++} className="syn-comment">{part}</span>);
    } else if (part.toUpperCase().startsWith('<!DOCTYPE')) {
      tokens.push(<span key={key++} className="syn-doctype">{part}</span>);
    } else if (part.startsWith('<') && part.endsWith('>')) {
      // Inside a tag: parse tag name, attributes, and string values
      tokens.push(parseTagContent(part, key++));
    } else {
      // Plain text content
      tokens.push(<span key={key++} className="syn-text">{part}</span>);
    }
  }

  return tokens.length > 0 ? tokens : line;
}

function parseTagContent(tagStr: string, baseKey: number): React.ReactNode {
  // E.g. <html lang="ru"> or </h1> or <meta charset="UTF-8">
  const isClosing = tagStr.startsWith('</');
  const inner = isClosing ? tagStr.slice(2, -1) : tagStr.startsWith('<') ? tagStr.slice(1, -1) : tagStr;

  const parts: React.ReactNode[] = [];
  parts.push(<span key="open" className="syn-bracket">{isClosing ? '</' : '<'}</span>);

  // Sub-tokenize tagName, attributes, and strings
  const subRegex = /([a-zA-Z0-9_-]+)(?:=("[^"]*"|'[^']*'))?|("[^"]*"|'[^']*')|\s+/g;
  let subMatch: RegExpExecArray | null;
  let isFirst = true;
  let subKey = 0;

  while ((subMatch = subRegex.exec(inner)) !== null) {
    const full = subMatch[0];
    const attrName = subMatch[1];
    const attrVal = subMatch[2] || subMatch[3];

    if (isFirst && attrName) {
      // Tag name
      parts.push(<span key={'t' + subKey++} className="syn-tag">{attrName}</span>);
      isFirst = false;
      if (attrVal) {
        parts.push(<span key={'e' + subKey++} className="syn-operator">=</span>);
        parts.push(<span key={'v' + subKey++} className="syn-string">{attrVal}</span>);
      }
    } else if (attrName) {
      // Attribute
      parts.push(' ');
      parts.push(<span key={'a' + subKey++} className="syn-attr">{attrName}</span>);
      if (attrVal) {
        parts.push(<span key={'e' + subKey++} className="syn-operator">=</span>);
        parts.push(<span key={'v' + subKey++} className="syn-string">{attrVal}</span>);
      }
    } else if (attrVal) {
      parts.push(<span key={'s' + subKey++} className="syn-string">{attrVal}</span>);
    } else {
      parts.push(full);
    }
  }

  parts.push(<span key="close" className="syn-bracket">&gt;</span>);
  return <span key={baseKey} className="syn-tag-wrapper">{parts}</span>;
}

function highlightCssLine(line: string): React.ReactNode {
  if (line.trim().startsWith('/*')) {
    return <span className="syn-comment">{line}</span>;
  }
  // Property: value;
  const propVal = line.match(/^(\s*)([a-zA-Z0-9_-]+)(\s*:\s*)([^;]+)(;?.*)$/);
  if (propVal) {
    return (
      <>
        {propVal[1]}
        <span className="syn-attr">{propVal[2]}</span>
        <span className="syn-operator">{propVal[3]}</span>
        <span className="syn-string">{propVal[4]}</span>
        {propVal[5]}
      </>
    );
  }
  // Selector
  if (line.includes('{')) {
    const selMatch = line.match(/^([^{]+)(\{.*)$/);
    if (selMatch) {
      return (
        <>
          <span className="syn-tag">{selMatch[1]}</span>
          <span className="syn-bracket">{selMatch[2]}</span>
        </>
      );
    }
  }
  return line;
}

function highlightJsLine(line: string): React.ReactNode {
  if (line.trim().startsWith('//') || line.trim().startsWith('/*')) {
    return <span className="syn-comment">{line}</span>;
  }
  // Simple JS keyword highlighting
  const jsKeywords = /\b(const|let|var|function|return|import|export|from|async|await|class|extends|super|new|if|else|try|catch|throw|typeof)\b/g;
  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;

  while ((m = jsKeywords.exec(line)) !== null) {
    if (m.index > lastIdx) {
      parts.push(line.slice(lastIdx, m.index));
    }
    parts.push(<span key={'kw' + m.index} className="syn-keyword">{m[1]}</span>);
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < line.length) {
    parts.push(line.slice(lastIdx));
  }
  return parts.length > 0 ? parts : line;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');
  const lang = language.toLowerCase();

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
          {lines.map((line, idx) => {
            let highlighted: React.ReactNode;
            if (lang === 'html') {
              highlighted = highlightHtmlLine(line);
            } else if (lang === 'css') {
              highlighted = highlightCssLine(line);
            } else if (lang === 'javascript' || lang === 'js') {
              highlighted = highlightJsLine(line);
            } else {
              highlighted = line;
            }

            return (
              <div key={idx} className="code-block-line">
                <span className="code-block-line-num">{idx + 1}</span>
                <span className="code-block-line-text">{highlighted}</span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};