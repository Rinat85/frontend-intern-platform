import React from 'react';
import { LessonTheory } from '../../types/curriculum';
import { CodeBlock } from './CodeBlock';
import { Lightbulb, AlertTriangle, CheckCircle, BookOpen, CheckCircle2 } from 'lucide-react';
import { formatInlineCode } from '../../utils/formatText';

interface TheorySectionProps {
  theory: LessonTheory;
}

export const TheorySection: React.FC<TheorySectionProps> = ({ theory }) => {
  const renderParagraphs = (text: string) => {
    return text.split('\n\n').map((para, i) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      // Check if this paragraph is a list
      if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
        const nonListParts = trimmed.split('\n').filter(line => !line.trim().startsWith('- ')).join(' ');

        return (
          <div key={i} className="theory-paragraph-group">
            {nonListParts && <p className="theory-text-paragraph">{formatInlineCode(nonListParts)}</p>}
            <ul className="theory-bullet-list">
              {items.map((item, j) => (
                <li key={j}>
                  <CheckCircle2 size={15} className="inline-icon text-accent" />
                  <span>{formatInlineCode(item.replace(/^- /, ''))}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      return (
        <p key={i} className="theory-text-paragraph">
          {formatInlineCode(trimmed)}
        </p>
      );
    });
  };

  return (
    <div className="theory-container">
      {/* Overview Block */}
      <div className="theory-overview-card">
        <div className="theory-overview-header">
          <BookOpen size={22} className="text-accent" />
          <h3>Обзор и концепция темы</h3>
        </div>
        <div className="theory-overview-body">
          {renderParagraphs(theory.overview)}
        </div>
      </div>

      {/* Main Sections */}
      <div className="theory-sections-list">
        {theory.sections.map((section, idx) => (
          <div key={idx} className="theory-section-block">
            <div className="theory-section-header">
              <span className="theory-section-number">{idx + 1}</span>
              <h3 className="theory-section-title">{formatInlineCode(section.title)}</h3>
            </div>

            <div className="theory-section-content">
              {renderParagraphs(section.content)}
            </div>

            {section.codeExample && (
              <div className="theory-code-example">
                <CodeBlock
                  code={section.codeExample.code}
                  language={section.codeExample.language}
                  title={section.codeExample.title}
                />
                {section.codeExample.explanation && (
                  <div className="theory-code-expl">
                    <span className="theory-code-expl-label">Разбор кода:</span>
                    <span className="theory-code-expl-text">{formatInlineCode(section.codeExample.explanation)}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Senior Tips */}
      {theory.seniorTips && theory.seniorTips.length > 0 && (
        <div className="senior-tips-card">
          <div className="senior-tips-header">
            <Lightbulb size={22} className="text-warning" />
            <div>
              <h3>Советы Senior-разработчика</h3>
              <p className="text-xs text-muted">Практический опыт и инсайты из коммерческой разработки</p>
            </div>
          </div>
          <ul className="senior-tips-list">
            {theory.seniorTips.map((tip, idx) => (
              <li key={idx}>
                <CheckCircle size={18} className="text-success inline-icon" />
                <span>{formatInlineCode(tip)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {theory.commonMistakes && theory.commonMistakes.length > 0 && (
        <div className="mistakes-card">
          <div className="mistakes-header">
            <AlertTriangle size={22} className="text-danger" />
            <div>
              <h3>Частые ошибки стажёров и антипаттерны</h3>
              <p className="text-xs text-muted">Чего следует избегать на собеседованиях и код-ревью</p>
            </div>
          </div>
          <div className="mistakes-list">
            {theory.commonMistakes.map((m, idx) => (
              <div key={idx} className="mistake-item">
                <div className="mistake-bad">
                  <span className="mistake-badge badge-bad">❌ Как не надо делать</span>
                  <code>{m.bad}</code>
                </div>
                <div className="mistake-good">
                  <span className="mistake-badge badge-good">✅ Как правильно</span>
                  <code>{m.good}</code>
                </div>
                <div className="mistake-reason">
                  <strong>Почему это важно:</strong> {formatInlineCode(m.reason)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {theory.keyTakeaways && theory.keyTakeaways.length > 0 && (
        <div className="takeaways-card">
          <h4>Ключевые выводы урока (шпаргалка):</h4>
          <ul className="takeaways-list">
            {theory.keyTakeaways.map((k, idx) => (
              <li key={idx}>{formatInlineCode(k)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};