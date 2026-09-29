import React from 'react';
import { GameType } from '../types';
import { 
  Gamepad2, 
  Sparkles, 
  Trophy, 
  HelpCircle, 
  ArrowRight, 
  Flame, 
  CheckCircle2, 
  RotateCcw,
  Star,
  Zap,
  Users
} from 'lucide-react';
import { sound } from '../utils/sound';

interface PermainanHubProps {
  onSelectGame: (game: GameType) => void;
}

export const PermainanHub: React.FC<PermainanHubProps> = ({ onSelectGame }) => {
  const handleLaunch = (game: GameType) => {
    sound.play('click');
    onSelectGame(game);
  };

  return (
    <div className="space-y-10 py-6">
      {/* Hub Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Gamepad2 className="w-3.5 h-3.5" /> Arena Permainan Edukatif Santri MI
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          3 Game Seru, Belajar Sambil Bermain!
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Pilih permainan interaktif di bawah ini untuk menguji ingatan dan wawasanmu seputar materi Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, Bahasa Arab, dan Sains MI.
        </p>
      </div>

      {/* 3 Game Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* GAME 1: ULAR TANGGA */}
        <div className="bg-white rounded-3xl p-7 border-2 border-emerald-200/80 shadow-md hover:shadow-2xl hover:border-emerald-400 transition-all flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform" />
          
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-4xl shadow-sm">
                🎲
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Papan 10×10
              </span>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-800">
                Ular Tangga Santri
              </h2>
              <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                50 Bank Soal Pilihan Ganda Acak
              </p>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Papan permainan 100 kotak dengan rintangan ular dan tangga berkah. Lempar dadu, jawab soal saat mendarat di petak tantangan, dan capai kotak 100 untuk menang!
              </p>
            </div>

            {/* Feature Pills */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pilih karakter santri (Ahmad, Fatimah, Zaid, Aisyah)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Benar lanjut giliran, salah mundur 2 langkah</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Efek suara lemparan dadu & animasi pion</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleLaunch('ular-tangga')}
            className="mt-8 relative z-10 w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02]"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Main Ular Tangga Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* GAME 2: SIAPA INGIN MENJADI JUTAWAN */}
        <div className="bg-slate-900 rounded-3xl p-7 border-2 border-amber-500/40 shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all flex flex-col justify-between relative overflow-hidden group text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform" />
          
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-4xl shadow-md">
                💰
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                15 Tingkat Hadiah
              </span>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Siapa Ingin Menjadi Jutawan
              </h2>
              <p className="text-xs font-semibold text-amber-400 mt-0.5">
                50 Soal Bertingkat Kesulitan
              </p>
              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                Raih hadiah utama 1.000.000 poin! Dilengkapi 2 titik aman (Soal 5 & 10) serta 3 bantuan andalan: 50:50, Tanya Teman/Ustadz, dan Polling Penonton kelas.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>3 Bantuan: 🔍 50:50, 📞 Telepon, 👥 Polling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bisa berhenti di tengah & bawa poin yang didapat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Suasana dramatis ala kuis televisi edukatif</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleLaunch('jutawan')}
            className="mt-8 relative z-10 w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02]"
          >
            <Trophy className="w-4 h-4" />
            <span>Mulai Kuis Jutawan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* GAME 3: KUIS IFP */}
        <div className="bg-white rounded-3xl p-7 border-2 border-purple-200/80 shadow-md hover:shadow-2xl hover:border-purple-400 transition-all flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform" />
          
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-4xl shadow-sm">
                ✨
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                10 Soal / Sesi
              </span>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-800">
                Kuis IFP Interaktif
              </h2>
              <p className="text-xs font-semibold text-purple-700 mt-0.5">
                50 Soal Acak & Skor Real-Time
              </p>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                Format kuis cerdas cermat kilat satu per satu! Skor langsung terhitung otomatis, ada pilihan timer per soal, evaluasi jawaban benar/salah, serta nilai predikat kelulusan.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Timer opsional: 15 detik, 30 detik, atau santai</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Bonus beruntun (Streak Multiplier)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Pembahasan lengkap di setiap akhir sesi</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleLaunch('ifp')}
            className="mt-8 relative z-10 w-full py-3.5 px-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4" />
            <span>Mulai Kuis IFP Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Teacher / Student Guide Banner */}
      <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0">
            💡
          </div>
          <div>
            <h3 className="font-heading font-bold text-slate-800 text-base">
              Mau mengedit soal atau membuat kuis sendiri?
            </h3>
            <p className="text-xs text-slate-600">
              Semua bank soal tersimpan rapi di file <code>data-soal.js</code> dan siap diunduh atau diedit dengan mudah oleh bapak/ibu guru.
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectGame('hub')}
          className="shrink-0 text-xs font-bold px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors"
        >
          Lihat Panduan di Menu Bantuan
        </button>
      </div>
    </div>
  );
};
