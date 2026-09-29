import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { soalIFP, shuffleArray } from '../data/soal';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { 
  Zap, 
  ArrowLeft, 
  RotateCcw, 
  Clock, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Award, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  BarChart2
} from 'lucide-react';

interface IFPQuizProps {
  onBackToHub: () => void;
}

type TimerSetting = 0 | 15 | 30; // 0 = unlimited / no timer

export const IFPQuiz: React.FC<IFPQuizProps> = ({ onBackToHub }) => {
  // Session Configuration
  const [timerSetting, setTimerSetting] = useState<TimerSetting>(20 as TimerSetting);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Gameplay State
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(20);

  // Result records for review
  const [answerHistory, setAnswerHistory] = useState<{
    question: Question;
    userChoice: number | null;
    isCorrect: boolean;
  }[]>([]);

  // End State
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Start new 10-question session
  const startNewSession = (timeLimit: TimerSetting = timerSetting) => {
    sound.play('click');
    const shuffledPool = shuffleArray(soalIFP);
    const tenQuestions = shuffledPool.slice(0, 10);
    setSessionQuestions(tenQuestions);
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setAnswerHistory([]);
    setIsFinished(false);
    setTimeLeft(timeLimit === 0 ? 0 : timeLimit);
  };

  useEffect(() => {
    startNewSession(20 as TimerSetting);
  }, []);

  const currentQ = sessionQuestions[currentIdx];

  // Timer Countdown Effect
  useEffect(() => {
    if (isFinished || isAnswered || timerSetting === 0 || !currentQ) return;

    if (timeLeft <= 0) {
      // Time is up! Treat as incorrect
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isFinished, timerSetting, currentQ]);

  // Handle Timeout
  const handleTimeOut = () => {
    sound.play('wrong');
    setIsAnswered(true);
    setSelectedOption(-1); // -1 indicates timeout
    setStreak(0);

    setAnswerHistory(prev => [
      ...prev,
      {
        question: currentQ,
        userChoice: null,
        isCorrect: false,
      }
    ]);
  };

  // Player Chooses Option
  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.jawaban;

    if (isCorrect) {
      sound.play('correct');
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Score formula: base 100 + streak bonus + time speed bonus
      const timeBonus = timerSetting > 0 ? timeLeft * 5 : 0;
      const streakBonus = Math.min(newStreak * 20, 100);
      const pointsGained = 100 + streakBonus + timeBonus;

      setScore(prev => prev + pointsGained);

      setAnswerHistory(prev => [
        ...prev,
        {
          question: currentQ,
          userChoice: idx,
          isCorrect: true,
        }
      ]);
    } else {
      sound.play('wrong');
      setStreak(0);

      setAnswerHistory(prev => [
        ...prev,
        {
          question: currentQ,
          userChoice: idx,
          isCorrect: false,
        }
      ]);
    }
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    sound.play('click');
    if (currentIdx + 1 < sessionQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(timerSetting === 0 ? 0 : timerSetting);
    } else {
      // Finished all 10 questions!
      setIsFinished(true);
      const correctCount = answerHistory.filter(h => h.isCorrect).length;
      if (correctCount >= 8) {
        sound.play('win');
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const correctAnswersCount = answerHistory.filter(h => h.isCorrect).length;

  return (
    <div className="space-y-6 py-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-purple-200 rounded-2xl p-4 shadow-sm">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 text-sm font-bold text-purple-800 hover:text-purple-950 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu Game</span>
        </button>

        {/* Timer Config Selector */}
        {!isFinished && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Timer:</span>
            {[
              { val: 15 as TimerSetting, label: '15d (Cepat)' },
              { val: 30 as TimerSetting, label: '30d (Standar)' },
              { val: 0 as TimerSetting, label: 'Santai' },
            ].map((t) => (
              <button
                key={t.val}
                onClick={() => {
                  sound.play('click');
                  setTimerSetting(t.val);
                  setTimeLeft(t.val);
                }}
                disabled={isAnswered}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  timerSetting === t.val
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => startNewSession()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Mulai Ronde Baru</span>
        </button>
      </div>

      {/* ACTIVE QUIZ ROUND */}
      {!isFinished && currentQ && (
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Status HUD: Question counter, timer, score, streak */}
          <div className="bg-white rounded-3xl p-5 border-2 border-purple-100 shadow-md flex items-center justify-between gap-4">
            
            {/* Progress counter */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Pertanyaan
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-800 font-heading">
                {currentIdx + 1} <span className="text-xs font-semibold text-slate-400">/ 10</span>
              </div>
            </div>

            {/* Optional Timer indicator */}
            {timerSetting > 0 && (
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-extrabold text-sm border-2 ${
                  timeLeft <= 5
                    ? 'bg-rose-100 text-rose-700 border-rose-400 animate-pulse'
                    : 'bg-purple-50 text-purple-700 border-purple-300'
                }`}>
                  {timeLeft}
                </div>
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  detik
                </span>
              </div>
            )}

            {/* Streak Bonus */}
            <div className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 ${
                streak > 1 ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-bounce-slow' : 'bg-slate-100 text-slate-500'
              }`}>
                <Flame className={`w-4 h-4 ${streak > 1 ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
                <span>Streak {streak}x</span>
              </div>
            </div>

            {/* Real-time Score */}
            <div className="text-right">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Skor
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-purple-700 font-heading">
                {score}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / 10) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-100 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                {currentQ.kategori || 'Pendidikan MI'}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Pilih satu jawaban yang benar
              </span>
            </div>

            <h3 className="font-heading text-lg sm:text-2xl font-bold text-slate-800 leading-relaxed">
              {currentQ.pertanyaan}
            </h3>

            {/* 4 Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentQ.pilihan.map((opsi, idx) => {
                const letter = String.fromCharCode(65 + idx);
                let btnTheme = 'bg-slate-50 border-slate-200 hover:bg-purple-50 hover:border-purple-300 text-slate-800';

                if (isAnswered) {
                  if (idx === currentQ.jawaban) {
                    btnTheme = 'bg-emerald-600 border-emerald-600 text-white font-bold ring-2 ring-emerald-300';
                  } else if (idx === selectedOption) {
                    btnTheme = 'bg-rose-600 border-rose-600 text-white font-bold';
                  } else {
                    btnTheme = 'bg-slate-100 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-2xl border-2 text-left text-sm font-semibold transition-all flex items-center gap-3 shadow-sm ${btnTheme}`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-extrabold text-xs shrink-0 ${
                      isAnswered && idx === currentQ.jawaban
                        ? 'bg-amber-300 text-slate-950'
                        : 'bg-white border border-slate-300 text-slate-700'
                    }`}>
                      {letter}
                    </span>
                    <span>{opsi}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Explanation */}
            {isAnswered && (
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in slide-in-from-bottom duration-200 space-y-2 ${
                selectedOption === currentQ.jawaban
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {selectedOption === currentQ.jawaban ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Benar Sekali! Jawaban tepat.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>
                        {selectedOption === -1 ? 'Waktu habis!' : 'Jawaban belum tepat.'} Jawaban yang benar adalah {String.fromCharCode(65 + currentQ.jawaban)}.
                      </span>
                    </>
                  )}
                </div>
                {currentQ.pembahasan && (
                  <p className="text-slate-600 text-xs pl-7">
                    <strong>Pembahasan:</strong> {currentQ.pembahasan}
                  </p>
                )}
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <div className="pt-2 text-right">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-600/20 inline-flex items-center gap-2 transition-colors"
                >
                  <span>{currentIdx + 1 === 10 ? 'Lihat Hasil Akhir' : 'Lanjut Soal Berikutnya'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FINAL SCORE & EVALUATION REPORT */}
      {isFinished && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-purple-200 shadow-2xl space-y-8 animate-in zoom-in-95 duration-200">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center text-4xl shadow-xl">
              {correctAnswersCount >= 8 ? '🎖️' : correctAnswersCount >= 5 ? '👍' : '📖'}
            </div>

            <div>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-purple-100 text-purple-800 uppercase tracking-widest">
                Hasil Akhir Kuis IFP
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800 mt-2">
                {correctAnswersCount >= 8 ? 'Mumtaz! Luar Biasa!' : correctAnswersCount >= 5 ? 'Jayyid Jiddan! Sangat Bagus!' : 'Jayyid! Teruslah Belajar!'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Kamu telah menyelesaikan 10 soal kuis interaktif dengan penuh semangat.
              </p>
            </div>
          </div>

          {/* Score breakdown metrics */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
              <div className="text-2xl font-extrabold text-purple-700 font-heading">
                {score}
              </div>
              <div className="text-xs text-slate-500 font-medium">Total Skor</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
              <div className="text-2xl font-extrabold text-emerald-700 font-heading">
                {correctAnswersCount} / 10
              </div>
              <div className="text-xs text-slate-500 font-medium">Benar</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
              <div className="text-2xl font-extrabold text-amber-700 font-heading">
                {maxStreak}x
              </div>
              <div className="text-xs text-slate-500 font-medium">Max Streak</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => startNewSession()}
              className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan 10 Soal Baru</span>
            </button>
            <button
              onClick={onBackToHub}
              className="w-full py-3.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-sm transition-colors"
            >
              Kembali ke Menu Game
            </button>
          </div>

          {/* Review of all 10 Questions */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="font-heading font-bold text-sm text-slate-700 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-purple-600" />
              <span>Rangkuman Evaluasi 10 Soal:</span>
            </h4>
            <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
              {answerHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                    item.isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-slate-800">
                      Soal {idx + 1}: {item.question.pertanyaan}
                    </span>
                    {item.isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1 shrink-0">
                        <XCircle className="w-3.5 h-3.5" /> Salah
                      </span>
                    )}
                  </div>
                  <div className="text-slate-600">
                    Kunci Jawaban: <strong>{item.question.pilihan[item.question.jawaban]}</strong>
                  </div>
                  {item.question.pembahasan && (
                    <div className="text-slate-500 italic">
                      {item.question.pembahasan}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
