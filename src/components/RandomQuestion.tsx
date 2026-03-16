import { useState, useCallback } from 'react';
import { course } from '../data';
import { useProgress } from '../context/ProgressContext';
import type { QuizQuestion } from '../types';

function getAllQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  for (const mod of course.modules) {
    questions.push(...mod.test);
  }
  questions.push(...course.finalTest);
  return questions;
}

function buildQuestionModuleMap(): Map<string, { moduleId: string; moduleTitle: string }> {
  const map = new Map<string, { moduleId: string; moduleTitle: string }>();
  for (const mod of course.modules) {
    for (const q of mod.test) {
      map.set(q.id, { moduleId: mod.id, moduleTitle: mod.title });
    }
  }
  return map;
}

const allQuestions = getAllQuestions();
const questionModuleMap = buildQuestionModuleMap();

function pickRandom(): QuizQuestion {
  return allQuestions[Math.floor(Math.random() * allQuestions.length)];
}

interface Props {
  onClose: () => void;
}

export function RandomQuestion({ onClose }: Props) {
  const { dispatch } = useProgress();
  const [question, setQuestion] = useState<QuizQuestion>(pickRandom);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showStreakEnd, setShowStreakEnd] = useState(false);
  const [endedStreak, setEndedStreak] = useState(0);

  const next = useCallback(() => {
    setQuestion(pickRandom());
    setSelected(null);
    setRevealed(false);
    setShowStreakEnd(false);
  }, []);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === question.correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      dispatch({ type: 'RECORD_RANDOM_QUESTION', payload: { correct: true, streak: newStreak } });
    } else {
      setEndedStreak(streak);
      setShowStreakEnd(true);
      setStreak(0);
      dispatch({ type: 'RECORD_RANDOM_QUESTION', payload: { correct: false, streak: 0 } });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3 className="rq-question">{question.question}</h3>
        {!showStreakEnd && (
          <>
            <div className="rq-options">
              {question.options.map((opt, i) => {
                let cls = 'option';
                if (selected === i) cls += ' selected';
                if (revealed) {
                  if (i === question.correctAnswer) cls += ' correct';
                  else if (selected === i) cls += ' incorrect';
                }
                return (
                  <button key={i} className={cls} onClick={() => handleSelect(i)}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {revealed && selected === question.correctAnswer && (
              <>
                <p className="rq-explanation">{question.explanation}</p>
                {questionModuleMap.has(question.id) && (
                  <a
                    className="module-ref-link"
                    href={`#/module/${questionModuleMap.get(question.id)!.moduleId}`}
                    onClick={onClose}
                  >
                    📖 Learn more: {questionModuleMap.get(question.id)!.moduleTitle}
                  </a>
                )}
              </>
            )}
            {revealed && selected === question.correctAnswer && (
              <div className="rq-actions">
                <span className="rq-streak">🔥 Streak: {streak}</span>
                <button className="btn btn-primary" onClick={next}>
                  Next Random Question →
                </button>
              </div>
            )}
          </>
        )}
        {showStreakEnd && (
          <div className="rq-streak-end">
            <p>OK. This one is incorrect. However, that was <strong>{endedStreak}</strong> correct answer{endedStreak !== 1 ? 's' : ''} in a row. Congrats!</p>
            <p className="rq-explanation">{question.explanation}</p>
            {questionModuleMap.has(question.id) && (
              <a
                className="module-ref-link"
                href={`#/module/${questionModuleMap.get(question.id)!.moduleId}`}
                onClick={onClose}
              >
                📖 Learn more: {questionModuleMap.get(question.id)!.moduleTitle}
              </a>
            )}
            <button className="btn btn-primary" onClick={next}>
              Continue →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
