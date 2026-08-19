import React, { useEffect, useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import confetti from 'canvas-confetti';
import { Award, X, Download, Sparkles, CheckCircle } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const { internName, setInternName } = useProgress();
  const [name, setName] = useState(internName || 'Алексей Смирнов');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveName = () => {
    setInternName(name);
    setIsEditing(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const dateStr = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="certificate-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <Award size={22} className="text-warning" />
            <h3>Сертификат об окончании обучения</h3>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="certificate-body">
          <div className="certificate-paper" id="certificate-node">
            <div className="cert-border-outer">
              <div className="cert-border-inner">
                <div className="cert-header">
                  <div className="cert-logo">
                    <Sparkles size={32} color="#f59e0b" />
                    <span>FRONTEND ACADEMY</span>
                  </div>
                  <h1 className="cert-title">СЕРТИФИКАТ</h1>
                  <p className="cert-subtitle">ОБ УСПЕШНОМ ПРОХОЖДЕНИИ СТАЖИРОВКИ</p>
                </div>

                <div className="cert-recipient-block">
                  <p className="cert-text-present">Настоящий сертификат подтверждает, что</p>
                  {isEditing ? (
                    <div className="cert-name-edit">
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="cert-name-input"
                        placeholder="Ваше имя и фамилия"
                      />
                      <button className="btn btn-primary btn-sm" onClick={handleSaveName}>
                        Сохранить
                      </button>
                    </div>
                  ) : (
                    <h2
                      className="cert-recipient-name"
                      onClick={() => setIsEditing(true)}
                      title="Нажмите, чтобы изменить имя"
                    >
                      {name}
                    </h2>
                  )}
                  <p className="cert-achievement-text">
                    успешно освоил(а) программу стажировки по направлению <strong>Frontend Development</strong>:
                    HTML5, CSS3, Flexbox, Grid, JavaScript ES6+, Асинхронное программирование, Web API и командные стандарты разработки.
                  </p>
                </div>

                <div className="cert-stats-row">
                  <div className="cert-stat-item">
                    <span className="cert-stat-val">48 / 48</span>
                    <span className="cert-stat-lbl">Уровней завершено</span>
                  </div>
                  <div className="cert-stat-item">
                    <span className="cert-stat-val">100%</span>
                    <span className="cert-stat-lbl">Практических задач</span>
                  </div>
                  <div className="cert-stat-item">
                    <span className="cert-stat-val">Junior Frontend</span>
                    <span className="cert-stat-lbl">Квалификация</span>
                  </div>
                </div>

                <div className="cert-footer">
                  <div className="cert-signature">
                    <div className="cert-sig-line">Frontend Lead / Mentor</div>
                    <span className="cert-sig-label">Руководитель стажировки</span>
                  </div>
                  <div className="cert-date">
                    <span className="cert-date-val">{dateStr}</span>
                    <span className="cert-date-label">Дата выдачи</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="cert-hint">
            Нажмите на имя, чтобы отредактировать его перед печатью
          </div>
          <div className="modal-footer-actions">
            <button className="btn btn-secondary" onClick={handlePrint}>
              <Download size={16} />
              <span>Печать / Сохранить в PDF</span>
            </button>
            <button className="btn btn-primary" onClick={onClose}>
              <CheckCircle size={16} />
              <span>Отлично!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
