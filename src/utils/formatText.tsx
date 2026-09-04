import React from 'react';
import { ExternalLink } from 'lucide-react';

const CODE_KEYWORDS = new Set([
  'DOCTYPE', 'HTML5', 'HTML', 'DOM', 'CSS3', 'CSS', 'ES6+', 'ES6', 'W3C',
  'JSON-LD', 'Schema.org', 'Quirks Mode', 'CLS', 'AVIF', 'WebP', 'SVG', 'XML',
  'html', 'head', 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'div', 'span', 'p', 'a', 'img', 'button', 'input', 'label', 'form',
  'fieldset', 'legend', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
  'caption', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'header', 'nav', 'main',
  'article', 'aside', 'footer', 'section', 'details', 'summary', 'figure',
  'figcaption', 'blockquote', 'code', 'pre', 'video', 'audio', 'canvas', 'svg',
  'iframe', 'link', 'meta', 'script', 'style',
  'html lang', 'href', 'src', 'alt', 'title',
  'target', 'rel', 'type', 'id', 'class', 'name', 'value', 'placeholder',
  'disabled', 'checked', 'required', 'readonly', 'for', 'scope', 'colspan',
  'rowspan', 'poster', 'loading', 'defer', 'async',
  'display', 'flex', 'grid', 'inline-block', 'inline', 'block', 'none',
  'relative', 'absolute', 'fixed', 'sticky', 'static',
  'margin', 'padding', 'border', 'border-radius', 'font-size', 'font-family',
  'font-weight', 'line-height', 'color', 'background', 'background-color',
  'justify-content', 'align-items', 'flex-direction', 'flex-wrap', 'flex-grow',
  'flex-shrink', 'flex-basis', 'grid-template-columns', 'grid-template-rows',
  'gap', 'row-gap', 'column-gap', 'minmax', 'clamp', 'rem', 'em', 'vh', 'vw', 'px',
  'transform', 'transition', 'animation', 'keyframes', 'backdrop-filter',
  'box-shadow', 'text-shadow', 'opacity', 'z-index', 'overflow', 'cursor',
  'min-width', 'max-width', 'min-height', 'max-height', 'width', 'height',
  'box-sizing', 'border-box', 'content-box', 'auto', 'inherit',
  'const', 'let', 'var', 'function', 'return', 'import', 'export',
  'async', 'await', 'Promise', 'Promise.all', 'fetch', 'response.ok',
  'response.json', 'response.text', 'localStorage',
  'sessionStorage', 'JSON.stringify', 'JSON.parse', 'document.querySelector',
  'document.querySelectorAll', 'getElementById', 'addEventListener',
  'removeEventListener', 'preventDefault',
  'event.preventDefault', 'stopPropagation',
  'textContent', 'innerHTML', 'classList',
  'setAttribute', 'getAttribute', 'map', 'filter', 'reduce', 'forEach',
  'find', 'findIndex', 'some', 'every', 'includes', 'push', 'pop',
  'shift', 'unshift', 'splice', 'slice', 'join', 'split', 'trim',
  'replace', 'replaceAll', 'bind', 'call', 'apply',
  'extends', 'super', 'class', 'constructor', 'this',
  'null', 'undefined', 'NaN', 'true', 'false', 'for..of', 'for...of',
  'for..in', 'for...in',
  'git', 'npm', 'npx', 'yarn', 'pnpm',
  'feat:', 'fix:', 'refactor:', 'style:', 'docs:', 'chore:'
]);

// 1. **[text](url)** (bold outer link)
// 2. [**text**](url) (bold inner link)
// 3. [text](url) (normal link)
// 4. `code` (inline code)
// 5. **bold** (bold text)
// 6. <tag> (html tag)
// 7. https://... (standalone url)
const PRIMARY_REGEX = new RegExp(
  '\\*\\*\\[([^\\]]+)\\]\\((https?:\\/\\/[^\\s)]+)\\)\\*\\*|' +
  '\\[\\*\\*([^*]+)\\*\\*\\]\\((https?:\\/\\/[^\\s)]+)\\)|' +
  '\\[([^\\]]+)\\]\\((https?:\\/\\/[^\\s)]+)\\)|' +
  '\x60([^\x60]+)\x60|' +
  '\\*\\*([^*]+)\\*\\*|' +
  '(<\\/?[a-zA-Z!][a-zA-Z0-9_-]*(?:\\s+[^>]*)?>)|' +
  '(https?:\\/\\/[^\\s<)]+)',
  'g'
);

const TOKEN_REGEX = new RegExp(
  '(<!DOCTYPE\\s+html>|<!DOCTYPE>|html\\s+lang|DOCTYPE|HTML5|ES6\\+|DOM|CSS3|W3C|JSON-LD|Schema\\.org|' +
  'data-\\S+|dist\\/|package\\.json|feat:|fix:|refactor:|' +
  'event\\.preventDefault\\(\\)|event\\.preventDefault|response\\.json\\(\\)|response\\.json|response\\.ok|' +
  'JSON\\.stringify|JSON\\.parse|\\?\\?|\\.\\.\\.|for\\.\\.of|for\\.\\.\\.of|' +
  '\\b[a-zA-Z][a-zA-Z0-9_.-]*(?:\\(\\))?\\b)',
  'g'
);

export const formatInlineCode = (text: string): React.ReactNode[] => {
  if (!text) return [];
  PRIMARY_REGEX.lastIndex = 0;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;


  while ((match = PRIMARY_REGEX.exec(text)) !== null) {
    if (match.index > lastIdx) {
      const plain = text.slice(lastIdx, match.index);
      nodes.push(...highlightPlainKeywords(plain, nodes.length));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // 1. **[text](url)**
      nodes.push(
        <a
          key={'l-bold1-' + nodes.length}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="theory-link theory-link-bold"
        >
          <strong>{match[1]}</strong>
          <ExternalLink size={12} className="inline-link-icon" />
        </a>
      );
    } else if (match[3] !== undefined && match[4] !== undefined) {
      // 2. [**text**](url)
      nodes.push(
        <a
          key={'l-bold2-' + nodes.length}
          href={match[4]}
          target="_blank"
          rel="noopener noreferrer"
          className="theory-link theory-link-bold"
        >
          <strong>{match[3]}</strong>
          <ExternalLink size={12} className="inline-link-icon" />
        </a>
      );
    } else if (match[5] !== undefined && match[6] !== undefined) {
      // 3. [text](url)
      nodes.push(
        <a
          key={'l-' + nodes.length}
          href={match[6]}
          target="_blank"
          rel="noopener noreferrer"
          className="theory-link"
        >
          {match[5]}
          <ExternalLink size={12} className="inline-link-icon" />
        </a>
      );
    } else if (match[7] !== undefined) {
      // 4. code
      nodes.push(<code key={'c-' + nodes.length} className="inline-code">{match[7]}</code>);
    } else if (match[8] !== undefined) {
      // 5. bold
      nodes.push(<strong key={'b-' + nodes.length}>{match[8]}</strong>);
    } else if (match[9] !== undefined) {
      // 6. tag
      nodes.push(<code key={'t-' + nodes.length} className="inline-code">{match[9]}</code>);
    } else if (match[10] !== undefined) {
      // 7. Standalone URL
      nodes.push(
        <a
          key={'u-' + nodes.length}
          href={match[10]}
          target="_blank"
          rel="noopener noreferrer"
          className="theory-link"
        >
          {match[10]}
          <ExternalLink size={12} className="inline-link-icon" />
        </a>
      );
    }
    lastIdx = match.index + match[0].length;
  }

  if (lastIdx < text.length) {
    nodes.push(...highlightPlainKeywords(text.slice(lastIdx), nodes.length));
  }

  return nodes.length > 0 ? nodes : [text];
};

function highlightPlainKeywords(plainText: string, baseKey: number): React.ReactNode[] {
  if (!plainText) return [];
  TOKEN_REGEX.lastIndex = 0;
  const result: React.ReactNode[] = [];
  let lastPos = 0;
  let m: RegExpExecArray | null;

  while ((m = TOKEN_REGEX.exec(plainText)) !== null) {
    if (m.index > lastPos) {
      result.push(plainText.slice(lastPos, m.index));
    }
    const token = m[1];
    const cleanToken = token.replace(/\(\)$/, '');
    if (
      CODE_KEYWORDS.has(token) ||
      CODE_KEYWORDS.has(cleanToken) ||
      CODE_KEYWORDS.has(token.toLowerCase()) ||
      token.startsWith('data-') ||
      token.endsWith('.json') ||
      (token.includes('()') && CODE_KEYWORDS.has(cleanToken))
    ) {
      result.push(
        <code key={'k' + baseKey + '-' + result.length} className="inline-code">{token}</code>
      );
    } else {
      result.push(token);
    }
    lastPos = m.index + m[0].length;
  }

  if (lastPos < plainText.length) {
    result.push(plainText.slice(lastPos));
  }

  return result.length > 0 ? result : [plainText];
}
