import React, { useState, useMemo, useCallback } from 'react';
import { QuizQuestion } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import { formatInlineCode } from '../../utils/formatText';
import { CodeBlock, detectLanguage } from './CodeBlock';

interface QuizSectionProps {
  lessonId: string;
  questions: QuizQuestion[];
  onQuizPassed?: () => void;
}

const PASS_THRESHOLD = 70;

/**
 * Fisher-Yates shuffle. Returns the original indices in a new random order,
 * so that the position of the correct answer differs on every attempt and
 * cannot be memorised or shared between interns.
 */
const shuffledIndices = (length: number): number[] => {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

export const QuizSection: React.FC<QuizSectionProps> = ({ lessonId, questions, onQuizPassed }) => {
  const { setQuizScore } = useProgress();
  // Answers are stored as the ORIGINAL option index, so shuffling never affects scoring.
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(0);

  // Re-shuffled on every attempt.
  const optionOrder = useMemo(() => {
    const map: Record<string, number[]> = {};
    questions.forEach(q => {
      map[q.id] = shuffledIndices(q.options.length);
    });
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, attempt]);

  const handleSelect = useCallback((questionId: string, originalIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: originalIndex }));
  }, [submitted]);

  const correctCount = questions.reduce(
    (acc, q) => acc + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0),
    0
  );
  const score = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
    setQuizScore(lessonId, score);
    if (score >= PASS_THRESHOLD && onQuizPassed) {
      onQuizPassed();
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setAttempt(a => a + 1);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <HelpCircle size={24} className="text-accent" />
        <div>
          <h2>Тест для самопроверки</h2>
          <p>
            Ответьте на вопросы, чтобы закрепить понимание изученной темы. Проходной балл —{' '}
            {PASS_THRESHOLD}%. Варианты ответов перемешиваются при каждой попытке.
          </p>
        </div>
      </div>

      <div className="quiz-questions-list">
        {questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.correctIndex;
          const order = optionOrder[q.id] ?? q.options.map((_, i) => i);

          return (
            <div key={q.id} className="quiz-question-card">
              <div className="quiz-question-title">
                <span className="quiz-question-num">Вопрос {qIndex + 1}:</span>
                <span>{formatInlineCode(q.question)}</span>
              </div>

              {q.codeSnippet && (
                <div className="quiz-code-snippet">
                  <CodeBlock
                    code={q.codeSnippet}
                    language={detectLanguage(q.codeSnippet)}
                    title="Фрагмент кода к вопросу"
                  />
                </div>
              )}

              <div
                className="quiz-options-list"
                role="radiogroup"
                aria-label={`Варианты ответа на вопрос ${qIndex + 1}`}
              >
                {order.map(originalIndex => {
                  const opt = q.options[originalIndex];
                  const isSelected = selected === originalIndex;
                  const isTheAnswer = originalIndex === q.correctIndex;
                  let optionClass = 'quiz-option';

                  if (submitted) {
                    if (isTheAnswer) {
                      optionClass += ' option-correct';
                    } else if (isSelected) {
                      optionClass += ' option-wrong';
                    }
                  } else if (isSelected) {
                    optionClass += ' option-selected';
                  }

                  return (
                    <div
                      key={originalIndex}
                      className={optionClass}
                      role="radio"
                      aria-checked={isSelected}
                      aria-disabled={submitted}
                      tabIndex={submitted ? -1 : 0}
                      onClick={() => handleSelect(q.id, originalIndex)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelect(q.id, originalIndex);
                        }
                      }}
                    >
                      <div className="quiz-option-radio">
                        {submitted && isTheAnswer ? (
                          <CheckCircle2 size={16} className="text-success" />
                        ) : submitted && isSelected ? (
                          <XCircle size={16} className="text-danger" />
                        ) : (
                          <span className={`radio-dot ${isSelected ? 'active' : ''}`} />
                        )}
                      </div>
                      <span className="quiz-option-text">{formatInlineCode(opt)}</span>
                    </div>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={`quiz-explanation ${isCorrect ? 'explanation-correct' : 'explanation-wrong'}`}
                  role="note"
                >
                  <strong>{isCorrect ? 'Правильно!' : 'Неверно.'}</strong>{' '}
                  {formatInlineCode(q.explanation)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="quiz-footer">
        {!submitted ? (
          <button className="btn btn-primary" onClick={handleSubmit} disabled={!allAnswered}>
            Проверить ответы
          </button>
        ) : (
          <div className="quiz-result-summary">
            <div className="quiz-result-score" aria-live="polite">
              <Award size={24} className={score >= PASS_THRESHOLD ? 'text-success' : 'text-warning'} />
              <span>
                Результат: <strong>{score}%</strong> ({correctCount} из {questions.length}) —{' '}
                {score >= PASS_THRESHOLD ? 'тест сдан!' : 'вернитесь к теории и попробуйте ещё раз'}
              </span>
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
