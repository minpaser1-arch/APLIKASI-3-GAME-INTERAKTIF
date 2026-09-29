import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { soalUlarTangga, shuffleArray } from '../data/soal';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  Sparkles, 
  HelpCircle, 
  ArrowUpRight, 
  ArrowDownRight, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft,
  User,
  ShieldCheck,
  Award
} from 'lucide-react';

interface UlarTanggaProps {
  onBackToHub: () => void;
}

// Ladders definition: start -> end (start < end)
const LADDERS: Record<number, number> = {
  4: 14,
  9: 31,
  20: 38,
  28: 84,
  40: 59,
  51: 67,
  63: 81,
  71: 91,
};

// Snakes definition: start -> end (start > end)
const SNAKES: Record<number, number> = {
  17: 7,
  54: 34,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  99: 78,
};

// Designated challenge/question tiles
const QUESTION_TILES = new Set([6, 12, 23, 35, 47, 56, 68, 76, 85, 92]);

// Characters
const AVATARS = [
  { id: 'ahmad', name: 'Ahmad', icon: '👦', desc: 'Santri Rajin' },
  { id: 'fatimah', name: 'Fatimah', icon: '🧕', desc: 'Santriwati Teladan' },
  { id: 'zaid', name: 'Zaid', icon: '🧑', desc: 'Penghafal Qur\'an' },
  { id: 'aisyah', name: 'Aisyah', icon: '👧', desc: 'Bintang Prestasi' },
];

export const UlarTangga: React.FC<UlarTanggaProps> = ({ onBackToHub }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [playerPos, setPlayerPos] = useState<number>(1);
  const [diceNumber, setDiceNumber] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [movesCount, setMovesCount] = useState<number>(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);

  // Question Modal State
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answeredState, setAnsweredState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Logs / Status message
  const [gameMessage, setGameMessage] = useState<string>('Selamat datang! Lempar dadu untuk memulai permainan.');
  const [hasWon, setHasWon] = useState<boolean>(false);

  // Question pool
  const [questionPool, setQuestionPool] = useState<Question[]>(() => shuffleArray(soalUlarTangga));
  const [questionIdx, setQuestionIdx] = useState<number>(0);

  // Trigger win confetti
  useEffect(() => {
    if (hasWon) {
      sound.play('win');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [hasWon]);

  // Roll the dice
  const handleRollDice = () => {
    if (isRolling || activeQuestion || hasWon) return;

    sound.play('dice');
    setIsRolling(true);
    setGameMessage('Mengocok dadu...');

    // Animate dice numbers
    let counter = 0;
    const interval = setInterval(() => {
      setDiceNumber(Math.floor(Math.random() * 6) + 1);
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        const finalDice = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(finalDice);
        setIsRolling(false);
        setMovesCount(prev => prev + 1);
        processMove(finalDice);
      }
    }, 80);
  };

  // Process player movement
  const processMove = (steps: number) => {
    let nextPos = playerPos + steps;

    // Bounce back if overshooting 100
    if (nextPos > 100) {
      const overshoot = nextPos - 100;
      nextPos = 100 - overshoot;
      setGameMessage(`Dadu ${steps}! Melampaui kotak 100, pion memantul mundur ke kotak ${nextPos}.`);
    } else {
      setGameMessage(`Dadu ${steps}! Pion melangkah ke kotak ${nextPos}.`);
    }

    sound.play('click');
    setPlayerPos(nextPos);

    // Check Win
    if (nextPos === 100) {
      setHasWon(true);
      setGameMessage('Maa Syaa Allah! Selamat, kamu berhasil mencapai kotak 100!');
      return;
    }

    // Check Ladder
    if (LADDERS[nextPos]) {
      const targetLadder = LADDERS[nextPos];
      setTimeout(() => {
        sound.play('ladder');
        setPlayerPos(targetLadder);
        setGameMessage(`Alhamdulillah! Menemukan Tangga Berkah dari ${nextPos} naik ke ${targetLadder}! 🪜`);
        checkTileChallenge(targetLadder);
      }, 700);
      return;
    }

    // Check Snake
    if (SNAKES[nextPos]) {
      const targetSnake = SNAKES[nextPos];
      setTimeout(() => {
        sound.play('snake');
        setPlayerPos(targetSnake);
        setGameMessage(`Astagfirullah! Terpeleset Ular Rintangan dari ${nextPos} turun ke ${targetSnake}! 🐍`);
        checkTileChallenge(targetSnake);
      }, 700);
      return;
    }

    // Check Question tile
    checkTileChallenge(nextPos);
  };

  const checkTileChallenge = (pos: number) => {
    if (QUESTION_TILES.has(pos)) {
      setTimeout(() => {
        const nextQ = questionPool[questionIdx % questionPool.length];
        setQuestionIdx(prev => prev + 1);
        setActiveQuestion(nextQ);
        setSelectedOption(null);
        setAnsweredState('idle');
        setGameMessage(`Mendarat di Kotak Tantangan Soal ${pos}! Jawab pertanyaan agar bisa lanjut.`);
      }, 600);
    }
  };

  // Answer question modal
  const handleAnswer = (optionIdx: number) => {
    if (!activeQuestion || answeredState !== 'idle') return;

    setSelectedOption(optionIdx);
    const isCorrect = optionIdx === activeQuestion.jawaban;

    if (isCorrect) {
      sound.play('correct');
      setAnsweredState('correct');
      setCorrectAnswersCount(prev => prev + 1);
      setGameMessage('Jawaban Benar! Alhamdulillah, kamu boleh mempertahankan posisimu.');
    } else {
      sound.play('wrong');
      setAnsweredState('wrong');
      // Penalize: step back 2 tiles or stay if pos <= 2
      const penalizedPos = Math.max(1, playerPos - 2);
      setPlayerPos(penalizedPos);
      setGameMessage(`Jawaban Belum Tepat! Pion mundur 2 langkah ke kotak ${penalizedPos}. Tetap semangat!`);
    }

    // Close question modal after review
    setTimeout(() => {
      setActiveQuestion(null);
      setSelectedOption(null);
      setAnsweredState('idle');
    }, 2800);
  };

  // Restart Game
  const handleRestart = () => {
    sound.play('click');
    setPlayerPos(1);
    setDiceNumber(1);
    setMovesCount(0);
    setCorrectAnswersCount(0);
    setHasWon(false);
    setActiveQuestion(null);
    setGameMessage('Permainan diulang. Ayo mulai lempar dadu!');
    setQuestionPool(shuffleArray(soalUlarTangga));
  };

  // Helper to generate 10x10 board tiles array in alternating snake order
  // Row 10 (top): 100 to 91 (Left to Right)
  // Row 9: 81 to 90 (Right to Left)
  // ...
  // Row 1 (bottom): 1 to 10 (Left to Right)
  const boardRows: number[][] = [];
  for (let r = 9; r >= 0; r--) {
    const rowNumbers: number[] = [];
    for (let c = 0; c < 10; c++) {
      if (r % 2 === 1) {
        // Odd row from bottom (0-indexed: 1, 3, 5, 7, 9 -> 2nd, 4th, 6th, 8th, 10th row)
        // 100 down to 91, 80 down to 71, etc.
        rowNumbers.push((r + 1) * 10 - c);
      } else {
        // Even row: 1 to 10, 21 to 30, etc.
        rowNumbers.push(r * 10 + c + 1);
      }
    }
    boardRows.push(rowNumbers);
  }

  return (
    <div className="space-y-6 py-4">
      {/* Top Bar Navigation & Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu Game</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-500">Pilih Karakter:</span>
          <div className="flex items-center gap-1.5">
            {AVATARS.map((av) => (
              <button
                key={av.id}
                onClick={() => {
                  sound.play('click');
                  setSelectedAvatar(av);
                }}
                className={`p-1.5 px-2.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                  selectedAvatar.id === av.id
                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                title={av.desc}
              >
                <span>{av.icon}</span>
                <span className="hidden sm:inline">{av.name}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Ulang Dari Kotak 1</span>
        </button>
      </div>

      {/* Main Game Layout: Board + Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* The 10x10 Board Grid */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border-2 border-emerald-200 shadow-xl overflow-hidden relative">
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-600 border-b border-slate-100 pb-2">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <Award className="w-4 h-4 text-emerald-600" /> Papan Ular Tangga 100 Kotak
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-emerald-600">
                🪜 Tangga Naik ({Object.keys(LADDERS).length})
              </span>
              <span className="flex items-center gap-1 text-rose-500">
                🐍 Ular Turun ({Object.keys(SNAKES).length})
              </span>
              <span className="flex items-center gap-1 text-amber-600">
                ❓ Tantangan Soal ({QUESTION_TILES.size})
              </span>
            </div>
          </div>

          {/* 10x10 Matrix */}
          <div className="grid grid-cols-10 gap-1 sm:gap-1.5 bg-emerald-950/5 p-2 sm:p-3 rounded-2xl aspect-square">
            {boardRows.flat().map((tileNum) => {
              const isLadderStart = !!LADDERS[tileNum];
              const isLadderEnd = Object.values(LADDERS).includes(tileNum);
              const isSnakeStart = !!SNAKES[tileNum];
              const isSnakeEnd = Object.values(SNAKES).includes(tileNum);
              const isQuestion = QUESTION_TILES.has(tileNum);
              const isPlayerHere = playerPos === tileNum;
              const isFinish = tileNum === 100;
              const isStart = tileNum === 1;

              // Color alternation
              let tileBg = tileNum % 2 === 0 ? 'bg-emerald-50' : 'bg-white';
              if (isFinish) tileBg = 'bg-gradient-to-tr from-amber-400 to-amber-200 border-2 border-amber-500 font-black';
              if (isStart) tileBg = 'bg-emerald-200/80 border border-emerald-400 font-bold';
              if (isLadderStart) tileBg = 'bg-blue-50 border-2 border-blue-300';
              if (isSnakeStart) tileBg = 'bg-rose-50 border-2 border-rose-300';
              if (isQuestion) tileBg = 'bg-amber-50/80 border-2 border-amber-300';

              return (
                <div
                  key={tileNum}
                  className={`relative rounded-lg sm:rounded-xl p-1 flex flex-col items-center justify-between text-[10px] sm:text-xs font-bold transition-all select-none border border-slate-200/60 ${tileBg} ${
                    isPlayerHere ? 'ring-4 ring-emerald-500 ring-offset-1 z-20 scale-105 shadow-md' : ''
                  }`}
                >
                  {/* Tile Number */}
                  <span className={`text-[10px] sm:text-[11px] leading-none ${
                    isFinish ? 'text-amber-950 font-black' : 'text-slate-500'
                  }`}>
                    {tileNum}
                  </span>

                  {/* Special Markers */}
                  <div className="flex items-center justify-center text-xs sm:text-sm my-auto">
                    {isFinish && <span>🏆</span>}
                    {isLadderStart && <span title={`Tangga naik ke ${LADDERS[tileNum]}`}>🪜</span>}
                    {isSnakeStart && <span title={`Ular turun ke ${SNAKES[tileNum]}`}>🐍</span>}
                    {isQuestion && !isPlayerHere && !isFinish && <span className="text-amber-600">❓</span>}
                  </div>

                  {/* Player Pawn */}
                  {isPlayerHere && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 animate-bounce">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-700 text-white shadow-lg flex items-center justify-center text-base sm:text-lg border-2 border-white ring-2 ring-emerald-400">
                        {selectedAvatar.icon}
                      </div>
                    </div>
                  )}

                  {/* Destination tags */}
                  {isLadderStart && (
                    <span className="text-[8px] font-black text-blue-700 leading-none">
                      ▲{LADDERS[tileNum]}
                    </span>
                  )}
                  {isSnakeStart && (
                    <span className="text-[8px] font-black text-rose-600 leading-none">
                      ▼{SNAKES[tileNum]}
                    </span>
                  )}
                  {isStart && !isPlayerHere && (
                    <span className="text-[8px] font-bold text-emerald-800 leading-none">
                      MULAI
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Control and Dice Panel */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Dice & Action Card */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-lg text-center space-y-5">
            <h3 className="font-heading text-lg font-bold text-slate-800">
              Giliran {selectedAvatar.name}
            </h3>

            {/* 3D-styled animated Dice */}
            <div className="flex justify-center py-2">
              <button
                onClick={handleRollDice}
                disabled={isRolling || !!activeQuestion || hasWon}
                className={`w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 text-white shadow-2xl flex flex-col items-center justify-center p-3 border-4 border-emerald-200 focus:outline-none transition-all ${
                  isRolling ? 'animate-spin scale-95' : 'hover:scale-105 active:scale-95 cursor-pointer shadow-emerald-500/30'
                } ${hasWon ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Klik untuk lempar dadu"
              >
                {/* Dice dots layout */}
                <div className="text-4xl font-extrabold text-amber-300 font-heading">
                  {diceNumber}
                </div>
                <span className="text-[11px] font-bold text-emerald-100 uppercase tracking-widest mt-1">
                  {isRolling ? 'Mengocok...' : 'Lempar Dadu'}
                </span>
              </button>
            </div>

            <p className="text-xs text-slate-500">
              {hasWon ? 'Permainan selesai!' : 'Klik tombol dadu di atas untuk melangkah!'}
            </p>

            {/* Status Message Box */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 text-left space-y-1">
              <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Informasi Permainan:
              </div>
              <p className="text-xs font-medium text-slate-700 leading-relaxed">
                {gameMessage}
              </p>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-emerald-700 font-heading">
                  {playerPos}
                </div>
                <div className="text-[10px] text-slate-500">Kotak Saat Ini</div>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-slate-700 font-heading">
                  {movesCount}
                </div>
                <div className="text-[10px] text-slate-500">Total Lemparan</div>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-amber-600 font-heading">
                  {correctAnswersCount}
                </div>
                <div className="text-[10px] text-slate-500">Jawaban Benar</div>
              </div>
            </div>
          </div>

          {/* Quick Rules Box */}
          <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-sm space-y-3">
            <h4 className="font-heading text-sm font-bold text-slate-800 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              <span>Aturan Main Ular Tangga Santri:</span>
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">1.</span>
                <span>Lempar dadu untuk menggerakkan pion dari kotak 1 ke kotak 100.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">2.</span>
                <span>Mendarat di bawah <strong>Tangga</strong> akan meluncur naik ke atas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">3.</span>
                <span>Mendarat di kepala <strong>Ular</strong> akan tergelincir turun ke bawah.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">4.</span>
                <span>Mendarat di <strong>Kotak Tantangan ❓</strong> memicu soal pilihan ganda. Jawab benar tetap di tempat, salah mundur 2 petak!</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* QUESTION MODAL */}
      {activeQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border-4 border-amber-300 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-heading font-extrabold text-lg">
                <span className="text-2xl">❓</span>
                <span>Kotak Tantangan Santri (Kotak {playerPos})</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900 text-amber-300">
                {activeQuestion.kategori}
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                {activeQuestion.pertanyaan}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {activeQuestion.pilihan.map((opsi, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 text-slate-800';

                  if (answeredState !== 'idle') {
                    if (idx === activeQuestion.jawaban) {
                      btnStyle = 'bg-emerald-600 border-emerald-600 text-white font-bold ring-2 ring-emerald-300';
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-rose-600 border-rose-600 text-white font-bold';
                    } else {
                      btnStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={answeredState !== 'idle'}
                      className={`w-full p-3.5 rounded-2xl border-2 text-left text-sm font-semibold transition-all flex items-center gap-3 ${btnStyle}`}
                    >
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-bold text-xs shrink-0 ${
                        answeredState !== 'idle' && idx === activeQuestion.jawaban
                          ? 'bg-amber-300 text-slate-950'
                          : 'bg-white/80 border border-slate-300 text-slate-700'
                      }`}>
                        {letter}
                      </span>
                      <span>{opsi}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {answeredState !== 'idle' && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm animate-in slide-in-from-bottom duration-200 ${
                  answeredState === 'correct'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-rose-50 border-rose-300 text-rose-900'
                }`}>
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {answeredState === 'correct' ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Jawaban Kamu Benar! Posisi aman.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        <span>Jawaban Kurang Tepat! Pion mundur 2 langkah.</span>
                      </>
                    )}
                  </div>
                  {activeQuestion.pembahasan && (
                    <p className="text-slate-600 mt-1 pl-7">
                      <strong>Pembahasan:</strong> {activeQuestion.pembahasan}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VICTORY MODAL */}
      {hasWon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in zoom-in-95 duration-300">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-6 shadow-2xl border-4 border-amber-400">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 flex items-center justify-center text-5xl shadow-xl animate-bounce-slow">
              🏆
            </div>

            <div>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-800 uppercase tracking-widest">
                Maa Syaa Allah, Tabarakallah!
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Selamat, Kamu Juara!
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Karakter <strong>{selectedAvatar.name}</strong> sukses mencapai puncak kotak 100 dengan cemerlang!
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 grid grid-cols-2 gap-3 text-center">
              <div>
                <div className="text-xl font-extrabold text-emerald-800 font-heading">
                  {movesCount}
                </div>
                <div className="text-xs text-slate-500">Total Lemparan Dadu</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-amber-600 font-heading">
                  {correctAnswersCount}
                </div>
                <div className="text-xs text-slate-500">Soal Terjawab Benar</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                Main Sekali Lagi
              </button>
              <button
                onClick={onBackToHub}
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-sm transition-colors"
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
