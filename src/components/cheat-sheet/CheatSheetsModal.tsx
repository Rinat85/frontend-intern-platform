import React, { useState } from 'react';
import { CheatSheetCategory } from '../../types/curriculum';
import { CodeBlock } from '../lesson/CodeBlock';
import { X, BookOpen, Search } from 'lucide-react';

interface CheatSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CheatSheetCategory[];
}

export const CheatSheetsModal: React.FC<CheatSheetsModalProps> = ({
  isOpen,
  onClose,
  categories
}) => {
  const [activeCat, setActiveCat] = useState<string>(categories[0]?.id || '');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const currentCategory = categories.find(c => c.id === activeCat) || categories[0];

  const filteredItems = currentCategory
    ? currentCategory.items.filter(item => {
        const q = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.syntax.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="cheatsheet-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <BookOpen size={22} className="text-accent" />
            <h3>Интерактивные шпаргалки по Frontend</h3>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cheatsheet-toolbar">
          <div className="cheatsheet-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`cheatsheet-tab-btn ${activeCat === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCat(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="cheatsheet-search-wrap">
            <Search size={16} className="text-muted" />
            <input
              type="text"
              placeholder="Поиск по шпаргалке..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="cheatsheet-search-input"
            />
          </div>
        </div>

        <div className="cheatsheet-body">
          {filteredItems.length === 0 ? (
            <div className="cheatsheet-empty">
              <p>Ничего не найдено по запросу "{search}"</p>
            </div>
          ) : (
            <div className="cheatsheet-grid">
              {filteredItems.map((item, idx) => (
                <div key={idx} className="cheatsheet-item-card">
                  <div className="cheatsheet-item-header">
                    <h4>{item.name}</h4>
                    <span className="cheatsheet-item-desc">{item.description}</span>
                  </div>
                  <div className="cheatsheet-item-code">
                    <CodeBlock code={item.syntax} title={item.name} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
