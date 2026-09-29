import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { soalJutawan, shuffleArray } from '../data/soal';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  HelpCircle, 
  ArrowLeft, 
  RotateCcw, 
  PhoneCall, 
  Users, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Award,
  Sparkles,
  Lock,
  ChevronRight,
  LogOut
} from 'lucide-react';

interface JutawanProps {
  onBackToHub: () => void;
}

// 15 Prize levels
const PRIZE_LADDER = [
  { level: 1, prize: 100, isSafe: false },
  { level: 2, prize: 200, isSafe: false },
  { level: 3, prize: 300, isSafe: false },
  { level: 4, prize: 500, isSafe: false },
  { level: 5, prize: 1000, isSafe: true }, // Titik Aman 1
  { level: 6, prize: 2000, isSafe: false },
  { level: 7, prize: 4000, isSafe: false },
  { level: 8, prize: 8000, isSafe: false },
  { level: 9, prize: 16000, isSafe: false },
  { level: 10, prize: 32000, isSafe: true }, // Titik Aman 2
  { level: 11, prize: 64000, isSafe: false },
  { level: 12, prize: 125000, isSafe: false },
  { level: 13, prize: 250000, isSafe: false },
  { level: 14, prize: 500000, isSafe: false },
  { level: 15, prize: 1000000, isSafe: true }, // Grand Prize
];

export const Jutawan: React.FC<JutawanProps> = ({ onBackToHub }) => {
  const [currentLevel, setCurrentLevel] = useState<number>(1); // 1 to 15
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'thinking' | 'correct' | 'wrong'>('thinking');

  // Lifelines
  const [lifeline5050Used, setLifeline5050Used] = useState<boolean>(false);
  const [lifelinePhoneUsed, setLifelinePhoneUsed] = useState<boolean>(false);
  const [lifelineAudienceUsed, setLifelineAudienceUsed] = useState<boolean>(false);

  // Active lifeline effects on current question
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [phoneModal, setPhoneModal] = useState<{ open: boolean; text: string } | null>(null);
  const [audienceModal, setAudienceModal] = useState<{ open: boolean; percentages: number[] } | null>(null);

  // Game End States
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [walkedAway, setWalkedAway] = useState<boolean>(false);
  const [wonGrandPrize, setWonGrandPrize] = useState<boolean>(false);

  // Initialize questions set: pick 1 question for each level 1 to 15 from question pool
  const initGame = () => {
    sound.play('click');
    const selected: Question[] = [];
    for (let lvl = 1; lvl <= 15; lvl++) {
      const candidates = soalJutawan.filter(q => q.tingkat === lvl);
      if (candidates.length > 0) {
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        selected.push(picked);
      } else {
        // Fallback if specific tier runs out
        const remaining = soalJutawan.filter(q => !selected.some(s => s.id === q.id));
        selected.push(remaining[0] || soalJutawan[0]);
      }
    }
    setSessionQuestions(selected);
    setCurrentLevel(1);
    setSelectedAnswer(null);
    setAnswerStatus('thinking');
    setLifeline5050Used(false);
    setLifelinePhoneUsed(false);
    setLifelineAudienceUsed(false);
    setHiddenOptions([]);
    setPhoneModal(null);
    setAudienceModal(null);
    setGameOver(false);
    setWalkedAway(false);
    setWonGrandPrize(false);
    setFinalScore(0);
  };

  useEffect(() => {
    initGame();
  }, []);

  const currentQ = sessionQuestions[currentLevel - 1];

  // Helper to calculate guaranteed safe score
  const getGuaranteedScore = (level: number): number => {
    if (level > 10) return 32000;
    if (level > 5) return 1000;
    return 0;
  };

  // Lifeline 1: 50:50 (Buang 2 opsi salah)
  const useLifeline5050 = () => {
    if (lifeline5050Used || !currentQ || answerStatus !== 'thinking') return;
    sound.play('lifeline');
    setLifeline5050Used(true);

    const correctIdx = currentQ.jawaban;
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    const shuffledWrong = shuffleArray(wrongIndices);
    // Hide 2 wrong options
    setHiddenOptions([shuffledWrong[0], shuffledWrong[1]]);
  };

  // Lifeline 2: Tanya Teman / Ustadz
  const useLifelinePhone = () => {
    if (lifelinePhoneUsed || !currentQ || answerStatus !== 'thinking') return;
    sound.play('lifeline');
    setLifelinePhoneUsed(true);

    const correctIdx = currentQ.jawaban;
    const correctLetter = String.fromCharCode(65 + correctIdx);
    const advisorList = [
      { name: 'Ustadz Mansur', role: 'Guru Fikih & SKI' },
      { name: 'Ustadzah Halimah', role: 'Guru Al-Qur\'an Hadits' },
      { name: 'Fatih', role: 'Sahabat Pintar Kelas 6' }
    ];
    const pickedAdvisor = advisorList[Math.floor(Math.random() * advisorList.length)];

    const response = `Bismillah... Halo! Menurut pemahaman dan hafalan saya, jawaban yang paling tepat untuk soal ini adalah pilihan (${correctLetter}): "${currentQ.pilihan[correctIdx]}". Tingkat keyakinan saya 90%!`;

    setPhoneModal({
      open: true,
      text: `${pickedAdvisor.name} (${pickedAdvisor.role}): "${response}"`
    });
  };

  // Lifeline 3: Tanya Penonton / Kelas
  const useLifelineAudience = () => {
    if (lifelineAudienceUsed || !currentQ || answerStatus !== 'thinking') return;
    sound.play('lifeline');
    setLifelineAudienceUsed(true);

    const correctIdx = currentQ.jawaban;
    const percentages = [0, 0, 0, 0];

    // Give high majority (65-80%) to correct answer
    const correctPct = Math.floor(Math.random() * 16) + 65;
    percentages[correctIdx] = correctPct;

    let remainingPct = 100 - correctPct;
    const otherIndices = [0, 1, 2, 3].filter(i => i !== correctIdx);

    const p1 = Math.floor(Math.random() * (remainingPct - 5));
    percentages[otherIndices[0]] = p1;
    remainingPct -= p1;

    const p2 = Math.floor(Math.random() * remainingPct);
    percentages[otherIndices[1]] = p2;
    remainingPct -= p2;

    percentages[otherIndices[2]] = remainingPct;

    setAudienceModal({
      open: true,
      percentages
    });
  };

  // Player Chooses an Answer
  const handleSelectOption = (idx: number) => {
    if (answerStatus !== 'thinking' || !currentQ || hiddenOptions.includes(idx)) return;

    sound.play('tension');
    setSelectedAnswer(idx);

    // Give 1.2s dramatic suspense delay
    setTimeout(() => {
      const isCorrect = idx === currentQ.jawaban;

      if (isCorrect) {
        sound.play('correct');
        setAnswerStatus('correct');

        if (currentLevel === 15) {
          // WON GRAND PRIZE!
          sound.play('win');
          confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.5 }
          });
          setFinalScore(1000000);
          setWonGrandPrize(true);
          setGameOver(true);
        } else {
          // Advance to next level after celebration pause
          setTimeout(() => {
            setCurrentLevel(prev => prev + 1);
            setSelectedAnswer(null);
            setAnswerStatus('thinking');
            setHiddenOptions([]);
          }, 1800);
        }
      } else {
        // WRONG ANSWER -> Drop to guaranteed safe tier
        sound.play('wrong');
        setAnswerStatus('wrong');
        const guaranteed = getGuaranteedScore(currentLevel);
        setFinalScore(guaranteed);

        setTimeout(() => {
          setGameOver(true);
        }, 2200);
      }
    }, 1200);
  };

  // Walk Away (Bawa Pulang Hadiah Saat Ini)
  const handleWalkAway = () => {
    if (answerStatus !== 'thinking' || currentLevel === 1) return;
    sound.play('click');
    const currentEarned = PRIZE_LADDER[currentLevel - 2]?.prize || 0;
    setFinalScore(currentEarned);
    setWalkedAway(true);
    setGameOver(true);
  };

  return (
    <div className="space-y-6 py-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 border border-amber-500/30 rounded-2xl p-4 text-white shadow-md">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu Game</span>
        </button>

        <div className="flex items-center gap-2 text-center">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span className="font-heading font-bold text-base sm:text-lg text-white">
            Siapa Ingin Menjadi Jutawan Madrasah
          </span>
        </div>

        <button
          onClick={initGame}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Mulai Dari Awal</span>
        </button>
      </div>

      {/* Main Game Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Question Arena, Lifelines, and Options */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Lifelines Bar */}
          <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-4 sm:p-5 shadow-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                3 Bantuan:
              </span>

              {/* 50:50 */}
              <button
                onClick={useLifeline5050}
                disabled={lifeline5050Used || answerStatus !== 'thinking'}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  lifeline5050Used
                    ? 'bg-slate-800 text-slate-500 border-slate-700 line-through opacity-50 cursor-not-allowed'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20 active:scale-95'
                }`}
                title="Buang 2 Jawaban Salah"
              >
                <EyeOff className="w-4 h-4" />
                <span>50:50</span>
              </button>

              {/* Tanya Teman / Ustadz */}
              <button
                onClick={useLifelinePhone}
                disabled={lifelinePhoneUsed || answerStatus !== 'thinking'}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  lifelinePhoneUsed
                    ? 'bg-slate-800 text-slate-500 border-slate-700 line-through opacity-50 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-white border-emerald-400 shadow-md shadow-emerald-500/20 active:scale-95'
                }`}
                title="Tanya Saran Teman / Ustadz"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Tanya Teman</span>
              </button>

              {/* Tanya Penonton / Kelas */}
              <button
                onClick={useLifelineAudience}
                disabled={lifelineAudienceUsed || answerStatus !== 'thinking'}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  lifelineAudienceUsed
                    ? 'bg-slate-800 text-slate-500 border-slate-700 line-through opacity-50 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-400 text-white border-blue-400 shadow-md shadow-blue-500/20 active:scale-95'
                }`}
                title="Polling Suara Teman Sekelas"
              >
                <Users className="w-4 h-4" />
                <span>Tanya Penonton</span>
              </button>
            </div>

            {/* Walk Away Button */}
            {currentLevel > 1 && answerStatus === 'thinking' && (
              <button
                onClick={handleWalkAway}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-bold transition-colors border border-rose-500"
                title="Bawa pulang poin yang sudah didapat dan akhiri permainan"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bawa Pulang Hadiah</span>
              </button>
            )}
          </div>

          {/* Question Display Card */}
          {currentQ && (
            <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                    Soal ke-{currentLevel} dari 15
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Kategori: {currentQ.kategori}
                  </span>
                </div>
                <div className="text-sm font-extrabold text-amber-400 font-heading">
                  Hadiah: {PRIZE_LADDER[currentLevel - 1].prize.toLocaleString('id-ID')} Poin
                </div>
              </div>

              {/* The Question Text */}
              <div className="min-h-[70px] flex items-center">
                <h3 className="text-base sm:text-xl font-bold text-white leading-relaxed">
                  {currentQ.pertanyaan}
                </h3>
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQ.pilihan.map((opsi, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isHidden = hiddenOptions.includes(idx);

                  if (isHidden) {
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border-2 border-slate-800/40 bg-slate-950/40 opacity-20 cursor-not-allowed text-transparent select-none min-h-[56px]"
                      >
                        [Tereliminasi 50:50]
                      </div>
                    );
                  }

                  let btnTheme = 'bg-slate-800/90 border-slate-700 hover:border-amber-400 hover:bg-slate-800 text-white';

                  if (selectedAnswer === idx) {
                    if (answerStatus === 'thinking') {
                      btnTheme = 'bg-amber-500 border-amber-400 text-slate-950 font-bold animate-pulse';
                    } else if (answerStatus === 'correct') {
                      btnTheme = 'bg-emerald-600 border-emerald-400 text-white font-bold ring-2 ring-emerald-300';
                    } else if (answerStatus === 'wrong') {
                      btnTheme = 'bg-rose-600 border-rose-400 text-white font-bold ring-2 ring-rose-300';
                    }
                  } else if (answerStatus === 'wrong' && idx === currentQ.jawaban) {
                    btnTheme = 'bg-emerald-700/80 border-emerald-400 text-emerald-100 font-bold ring-2 ring-emerald-400';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={answerStatus !== 'thinking'}
                      className={`w-full p-4 rounded-2xl border-2 text-left text-sm font-semibold transition-all flex items-center gap-3.5 shadow-md ${btnTheme}`}
                    >
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-extrabold text-xs shrink-0 ${
                        selectedAnswer === idx && answerStatus === 'thinking'
                          ? 'bg-slate-950 text-amber-300'
                          : 'bg-slate-900 border border-slate-700 text-amber-400'
                      }`}>
                        {letter}
                      </span>
                      <span className="leading-snug">{opsi}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation note when correct/wrong */}
              {answerStatus !== 'thinking' && currentQ.pembahasan && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in slide-in-from-bottom duration-200 ${
                  answerStatus === 'correct'
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/60 border-rose-500/50 text-rose-200'
                }`}>
                  <p>
                    <strong>Pembahasan:</strong> {currentQ.pembahasan}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Prize Ladder Sidebar */}
        <div className="lg:col-span-4 bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-5 text-white shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-heading text-sm font-bold text-amber-400 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Tangga Poin Hadiah</span>
            </h4>
            <span className="text-[10px] text-slate-400">
              Titik Aman: 5 & 10
            </span>
          </div>

          <div className="space-y-1">
            {[...PRIZE_LADDER].reverse().map((tier) => {
              const isCurrent = tier.level === currentLevel;
              const isPast = tier.level < currentLevel;
              const isSafe = tier.isSafe;

              let rowStyle = 'text-slate-400 hover:bg-slate-800/40';

              if (isCurrent) {
                rowStyle = 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-400/20 scale-[1.03] rounded-xl';
              } else if (isPast) {
                rowStyle = 'text-emerald-400 font-bold bg-emerald-950/20 rounded-lg';
              } else if (isSafe) {
                rowStyle = 'text-amber-300 font-bold bg-amber-950/20 rounded-lg border border-amber-500/20';
              }

              return (
                <div
                  key={tier.level}
                  className={`flex items-center justify-between px-3.5 py-1.5 text-xs transition-all ${rowStyle}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 text-right font-mono text-[11px]">
                      {tier.level}
                    </span>
                    {isSafe && <Lock className={`w-3 h-3 ${isCurrent ? 'text-slate-950' : 'text-amber-400'}`} />}
                    {isPast && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  </div>

                  <span className="font-heading font-extrabold tracking-wide">
                    {tier.prize.toLocaleString('id-ID')} Poin
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-300">
              <Lock className="w-3 h-3" />
              <span>Titik Aman 1: 1.000 Poin (Soal 5)</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-300">
              <Lock className="w-3 h-3" />
              <span>Titik Aman 2: 32.000 Poin (Soal 10)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Lifeline Modal: Tanya Teman */}
      {phoneModal?.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-emerald-400 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40">
                📞
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-emerald-300">
                  Panggilan Bantuan Teman
                </h4>
                <p className="text-xs text-slate-400">
                  Tersambung ke ruang guru & santri teladan
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-sm text-slate-200 leading-relaxed italic">
              {phoneModal.text}
            </div>

            <button
              onClick={() => setPhoneModal(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors"
            >
              Terima Kasih, Lanjutkan Kuis!
            </button>
          </div>
        </div>
      )}

      {/* Lifeline Modal: Tanya Penonton (Bar Chart) */}
      {audienceModal?.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-blue-400 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl border border-blue-500/40">
                👥
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-blue-300">
                  Hasil Polling Suara Teman Kelas
                </h4>
                <p className="text-xs text-slate-400">
                  Persentase pilihan jawaban santri se-kelas
                </p>
              </div>
            </div>

            {/* Bar Chart Representation */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              {audienceModal.percentages.map((pct, idx) => {
                const letter = String.fromCharCode(65 + idx);
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-amber-400">Pilihan {letter}</span>
                      <span className="text-white">{pct}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setAudienceModal(null)}
              className="w-full py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm transition-colors"
            >
              Tutup Polling & Pilih Jawaban
            </button>
          </div>
        </div>
      )}

      {/* GAME OVER / VICTORY MODAL */}
      {gameOver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in zoom-in-95 duration-200">
          <div className="bg-slate-900 border-4 border-amber-400 rounded-3xl max-w-md w-full p-8 text-center text-white shadow-2xl space-y-6">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 flex items-center justify-center text-5xl shadow-xl">
              {wonGrandPrize ? '👑' : walkedAway ? '💼' : '🌟'}
            </div>

            <div>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-400 text-slate-950 uppercase tracking-widest">
                {wonGrandPrize ? 'LUAR BIASA! GRAND PRIZE!' : walkedAway ? 'KEPUTUSAN BIJAKSANA!' : 'PERMAINAN BERAKHIR'}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {wonGrandPrize
                  ? 'Jutawan Madrasah Sejati!'
                  : walkedAway
                  ? 'Kamu Bawa Pulang Hadiah!'
                  : 'Tetap Semangat & Jangan Menyerah!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                {wonGrandPrize
                  ? 'Maa Syaa Allah! Kamu berhasil menjawab seluruh 15 pertanyaan bertingkat dengan sempurna!'
                  : walkedAway
                  ? `Kamu memutuskan berhenti di level ${currentLevel} dan mengamankan hadiahmu.`
                  : `Jawabanmu salah di level ${currentLevel}. Kamu berhak membawa poin dari titik aman terakhir.`}
              </p>
            </div>

            {/* Final Earned Points */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/40 space-y-1">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                Total Poin yang Kamu Bawa Pulang:
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">
                {finalScore.toLocaleString('id-ID')} Poin
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={initGame}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
              >
                Main Sekali Lagi
              </button>
              <button
                onClick={onBackToHub}
                className="w-full py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 font-bold text-sm transition-colors"
              >
                Pilih Game Lain
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
