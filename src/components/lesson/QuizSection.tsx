import React, { useState } from 'react';
import { QuizQuestion } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

interface QuizSectionProps {
  lessonId: string;
  questions: QuizQuestion[];
  onQuizPassed?: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ lessonId, questions, onQuizPassed }) => {
  const { setQuizScore } = useProgress();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setSubmitted(true);
    setQuizScore(lessonId, score);
    if (score >= 70 && onQuizPassed) {
      onQuizPassed();
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <HelpCircle size={24} className="text-accent" />
        <div>
          <h2>Тест для самопроверки</h2>
          <p>Ответьте на вопросы, чтобы закрепить понимание изученной темы.</p>
        </div>
      </div>

      <div className="quiz-questions-list">
        {questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.correctIndex;

          return (
            <div key={q.id} className="quiz-question-card">
              <div className="quiz-question-title">
                <span className="quiz-question-num">Вопрос {qIndex + 1}:</span>
                <span>{q.question}</span>
              </div>

              <div className="quiz-options-list">
                {q.options.map((opt, optIndex) => {
                  const isSelected = selected === optIndex;
                  let optionClass = 'quiz-option';

                  if (submitted) {
                    if (optIndex === q.correctIndex) {
                      optionClass += ' option-correct';
                    } else if (isSelected) {
                      optionClass += ' option-wrong';
                    }
                  } else if (isSelected) {
                    optionClass += ' option-selected';
                  }

                  return (
                    <div
                      key={optIndex}
                      className={optionClass}
                      onClick={() => handleSelect(q.id, optIndex)}
                    >
                      <div className="quiz-option-radio">
                        {submitted && optIndex === q.correctIndex ? (
                          <CheckCircle2 size={16} className="text-success" />
                        ) : submitted && isSelected ? (
                          <XCircle size={16} className="text-danger" />
                        ) : (
                          <span className={`radio-dot ${isSelected ? 'active' : ''}`} />
                        )}
                      </div>
                      <span className="quiz-option-text">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {submitted && (
                <div className={`quiz-explanation ${isCorrect ? 'explanation-correct' : 'explanation-wrong'}`}>
                  <strong>{isCorrect ? 'Правильно!' : 'Неверно.'}</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="quiz-footer">
        {!submitted ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            Проверить ответы
          </button>
        ) : (
          <div className="quiz-result-summary">
            <div className="quiz-result-score">
              <Award size={24} className={score >= 70 ? 'text-success' : 'text-warning'} />
              <span>Результат: <strong>{score}%</strong> ({score >= 70 ? 'Тест сдан!' : 'Попробуйте еще раз'})</span>
            </div>
            <button className="btn btn-secondary" onClick={handleRetry}>
              <RotateCcw size={16} />
              <span>Пройти заново</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
