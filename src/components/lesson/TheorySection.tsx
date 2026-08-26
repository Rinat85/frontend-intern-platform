import React from 'react';
import { LessonTheory } from '../../types/curriculum';
import { CodeBlock, CodeSnippet } from './CodeBlock';
import { Lightbulb, AlertTriangle, CheckCircle, BookOpen, CheckCircle2, ZoomIn, X, Play, ExternalLink, Video } from 'lucide-react';
import { formatInlineCode } from '../../utils/formatText';

interface TheorySectionProps {
  theory: LessonTheory;
}

export const TheorySection: React.FC<TheorySectionProps> = ({ theory }) => {
  const [zoomedImage, setZoomedImage] = React.useState<{ src: string; alt: string; caption?: string } | null>(null);

  // Handle ESC key and prevent body scroll when modal is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [zoomedImage]);

  const parseVideoItem = (itemText: string) => {
    const clean = itemText.replace(/^- /, '').trim();
    const urlMatch = /(https?:\/\/(?:youtu\.be\/|www\.youtube\.com\/)[^\s)]+)/.exec(clean);
    if (!urlMatch) return null;
    const url = urlMatch[1];

    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    }

    let title = '';
    const titleMatch = /\[([^\]]+)\]/.exec(clean);
    if (titleMatch) {
      title = titleMatch[1].replace(/\*\*/g, '').trim();
    } else {
      title = 'Видеоурок';
    }

    let desc = '';
    // Look for description after the markdown link: [title](url)** — description
    const afterLinkMatch = /\]\([^)]+\)\*{0,2}\s*(?:—|-)\s*(.*)$/.exec(clean);
    if (afterLinkMatch) {
      desc = afterLinkMatch[1].trim();
    } else {
      const dashIdx = clean.lastIndexOf('—');
      if (dashIdx !== -1) {
        desc = clean.slice(dashIdx + 1).trim();
      } else {
        const hypIdx = clean.lastIndexOf(' - ');
        if (hypIdx !== -1) {
          desc = clean.slice(hypIdx + 3).trim();
        }
      }
    }

    return { title, url, desc, videoId };
  };

  const renderParagraphs = (text: string) => {
    const normalizedText = text.replace(/\\n/g, '\n');
    return normalizedText.split('\n\n').map((para, i) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      // Check if this paragraph is a list
      if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
        const lines = trimmed.split('\n');
        const items = lines.filter(line => line.trim().startsWith('- '));
        const nonListParts = lines.filter(line => !line.trim().startsWith('- ')).join(' ');

        // Check if all items in this list are YouTube video links
        const videoItems = items.map(parseVideoItem).filter(Boolean);
        const isVideoList = videoItems.length > 0 && videoItems.length === items.length;

        if (isVideoList) {
          return (
            <div key={i} className="theory-paragraph-group">
              {nonListParts && <p className="theory-text-paragraph">{formatInlineCode(nonListParts)}</p>}
              <div className="theory-video-grid">
                {videoItems.map((v, j) => {
                  if (!v) return null;
                  const thumbUrl = v.videoId ? `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg` : '';

                  return (
                    <a
                      key={j}
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theory-video-card"
                    >
                      <div className="theory-video-thumb-wrapper">
                        {thumbUrl ? (
                          <img src={thumbUrl} alt={v.title} className="theory-video-thumb" loading="lazy" />
                        ) : (
                          <div className="theory-video-thumb-placeholder" />
                        )}
                        <div className="theory-video-play-btn">
                          <Play size={22} className="play-icon" fill="currentColor" />
                        </div>
                        <span className="theory-video-badge">
                          <Video size={14} className="yt-icon" />
                          <span>YouTube</span>
                        </span>
                      </div>
                      <div className="theory-video-info">
                        <h4 className="theory-video-title">{v.title}</h4>
                        {v.desc && <p className="theory-video-desc">{v.desc}</p>}
                        <div className="theory-video-action">
                          <span>Смотреть видеоурок</span>
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        }

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

            {section.image && (
              <figure
                className="theory-section-figure"
                onClick={() => setZoomedImage(section.image || null)}
                title="Нажмите, чтобы увеличить схему"
              >
                <div className="theory-image-wrapper">
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    className="theory-section-image"
                    loading="lazy"
                  />
                  <div className="theory-image-overlay">
                    <ZoomIn size={16} />
                    <span>Увеличить</span>
                  </div>
                </div>
                {section.image.caption && (
                  <figcaption className="theory-section-caption">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}

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
                  <CodeSnippet code={m.bad} className="mistake-code-bad" />
                </div>
                <div className="mistake-good">
                  <span className="mistake-badge badge-good">✅ Как правильно</span>
                  <CodeSnippet code={m.good} className="mistake-code-good" />
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

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="image-zoom-modal"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенное изображение"
        >
          <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="image-zoom-close"
              onClick={() => setZoomedImage(null)}
              title="Закрыть (Escape)"
              aria-label="Закрыть модальное окно"
            >
              <X size={20} />
            </button>
            <img src={zoomedImage.src} alt={zoomedImage.alt} className="image-zoom-img" />
            {zoomedImage.caption && (
              <div className="image-zoom-caption">{zoomedImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
