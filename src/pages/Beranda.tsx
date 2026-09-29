import React from 'react';
import { TabType, GameType } from '../types';
import { 
  Gamepad2, 
  BookOpen, 
  Sparkles, 
  Award, 
  MapPin, 
  Clock, 
  Phone, 
  Compass, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Smile,
  ShieldCheck,
  TrendingUp,
  Coins,
  BrainCircuit
} from 'lucide-react';
import { sound } from '../utils/sound';

interface BerandaProps {
  onSelectTab: (tab: TabType, game?: GameType) => void;
}

export const Beranda: React.FC<BerandaProps> = ({ onSelectTab }) => {
  const handleAction = (tab: TabType, game?: GameType) => {
    sound.play('click');
    onSelectTab(tab, game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white shadow-xl shadow-emerald-700/20 p-6 sm:p-12 lg:p-16">
        {/* Background decorative patterns */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-amber-300 font-bold text-xs sm:text-sm border border-white/25">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Portal Pembelajaran Siswa Madrasah Ibtidaiyah</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Belajar Cerdas, <br className="hidden sm:inline" />
              Bermain Seru <span className="text-amber-300">di Madrasah!</span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-50 max-w-2xl font-normal leading-relaxed">
              Selamat datang di portal edukasi <strong>Madrasah Ceria</strong>. Temukan rangkuman materi pelajaran MI lengkap beserta 3 game interaktif: <strong>Ular Tangga</strong>, <strong>Jutawan</strong>, dan <strong>Kuis IFP</strong> dengan total 150 bank soal nyata!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleAction('game', 'hub')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 shadow-lg shadow-amber-400/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Gamepad2 className="w-5 h-5 text-slate-900" />
                <span>Mulai Bermain Game</span>
              </button>

              <button
                onClick={() => handleAction('materi')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-semibold backdrop-blur-md border border-white/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <BookOpen className="w-5 h-5 text-amber-200" />
                <span>Baca Kumpulan Materi</span>
              </button>
            </div>

            {/* Quick check features */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-emerald-100 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-300" /> 100% Bebas Iklan & Ramah Anak
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-300" /> Kurikulum Kemenag Terkini
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-300" /> Ringan & Siap Vercel
              </span>
            </div>
          </div>

          {/* Mascot / Interactive Showcase Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Card visual showcase */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  </div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                    Santri MI Teladan
                  </span>
                </div>

                <div className="py-6 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-800 flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                    <Smile className="w-14 h-14 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      Ahmad & Fatimah
                    </h3>
                    <p className="text-xs text-emerald-100 mt-1">
                      "Belajar agama dan sains jadi lebih asyik lewat permainan seru!"
                    </p>
                  </div>
                </div>

                {/* Mini Quick Score Preview */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="bg-white/15 rounded-xl p-2.5">
                    <div className="text-base font-extrabold text-amber-300 font-heading">50 Soal</div>
                    <div className="text-[10px] text-emerald-100">Ular Tangga</div>
                  </div>
                  <div className="bg-white/15 rounded-xl p-2.5">
                    <div className="text-base font-extrabold text-amber-300 font-heading">15 Level</div>
                    <div className="text-[10px] text-emerald-100">Jutawan MI</div>
                  </div>
                  <div className="bg-white/15 rounded-xl p-2.5">
                    <div className="text-base font-extrabold text-amber-300 font-heading">10 Ronde</div>
                    <div className="text-[10px] text-emerald-100">Kuis IFP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Games Highlight Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Gamepad2 className="w-3.5 h-3.5" /> 3 Game Interaktif Tersedia
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Pilih Permainan Favoritmu!
            </h2>
          </div>
          <button
            onClick={() => handleAction('game', 'hub')}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 group"
          >
            <span>Buka Semua Game</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Game 1 Card */}
          <div className="group bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                🎲
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-slate-800">
                    Ular Tangga Santri
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    50 Soal
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Papan 10×10 (100 kotak), lempar dadu acak 1–6, lewati rintangan ular, naiki tangga berkah, dan jawab soal islami agar bisa melaju!
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Papan 100 kotak & animasi pion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Jawab benar lanjut, salah mundur 2 petak</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleAction('game', 'ular-tangga')}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 group-hover:bg-emerald-700 transition-colors"
            >
              <span>Main Ular Tangga</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Game 2 Card */}
          <div className="group bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                💰
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-slate-800">
                    Jutawan Madrasah
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    1.000.000 Poin
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Tantangan kuis 15 tingkat hadiah! Dilengkapi 2 titik aman (soal 5 & 10) serta 3 bantuan realistis: 50:50, Tanya Teman, dan Polling Penonton.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>3 Bantuan: 50:50, Telepon, Polling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Bisa bawa pulang hadiah kapan saja</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleAction('game', 'jutawan')}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Main Jadi Jutawan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Game 3 Card */}
          <div className="group bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                ✨
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-slate-800">
                    Kuis IFP Interaktif
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    Fast Quiz
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Kuis interaktif satu per satu dengan skor real-time! 10 soal acak per sesi dari 50 bank soal, batas waktu per soal, serta evaluasi hasil akhir.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Timer dinamis & streak multiplier</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Rangkuman hasil & pembahasan detail</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleAction('game', 'ifp')}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Main Kuis IFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Fase & Subjects Section */}
      <section className="bg-emerald-900/5 rounded-3xl p-6 sm:p-10 border border-emerald-200/60 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Kurikulum Madrasah Ibtidaiyah Terpadu
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800">
            Fase Pembelajaran (Fase A - C) & Mata Pelajaran Lengkap
          </h2>
          <p className="text-sm text-slate-600">
            Materi disusun bertahap sesuai capaian pembelajaran Fase A (Kelas 1-2), Fase B (Kelas 3-4), dan Fase C (Kelas 5-6).
          </p>
        </div>

        {/* 3 Fase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            onClick={() => handleAction('materi')}
            className="cursor-pointer bg-white rounded-2xl p-5 border-2 border-emerald-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all space-y-2 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Kelas 1 & 2
              </span>
              <span className="text-xl">🌱</span>
            </div>
            <h4 className="font-heading font-bold text-base text-slate-800">Fase A (Fondasi Belajar)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mengenal huruf hijaiyah, simbol Pancasila, suku kata, bilangan 1-20, gerak lokomotor, dan tahfidz surah pendek.
            </p>
          </div>

          <div 
            onClick={() => handleAction('materi')}
            className="cursor-pointer bg-white rounded-2xl p-5 border-2 border-amber-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-2 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Kelas 3 & 4
              </span>
              <span className="text-xl">🌿</span>
            </div>
            <h4 className="font-heading font-bold text-base text-slate-800">Fase B (Penguatan Konsep)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Perkalian/pembagian, daur hidup hewan, hak & kewajiban, wujud zat IPAS, seni rupa, dan tahfidz Juz 30 menengah.
            </p>
          </div>

          <div 
            onClick={() => handleAction('materi')}
            className="cursor-pointer bg-white rounded-2xl p-5 border-2 border-teal-200 shadow-sm hover:shadow-md hover:border-teal-400 transition-all space-y-2 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                Kelas 5 & 6
              </span>
              <span className="text-xl">🌳</span>
            </div>
            <h4 className="font-heading font-bold text-base text-slate-800">Fase C (Penalaran & Mandiri)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pecahan & volume ruang, organ tubuh manusia, teks eksplanasi, kebugaran jasmani, zakat & qurban, dan surah An-Naba'.
            </p>
          </div>
        </div>

        {/* 12 Subjects Grid */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider text-center">
            12 Mata Pelajaran Tersedia:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "Tahfidz Qur'an", icon: '👑', desc: 'Hafalan Juz 30 Mutqin' },
              { name: "Matematika", icon: '➗', desc: 'Bilangan & Bangun Ruang' },
              { name: "Bahasa Indonesia", icon: '✍️', desc: 'Literasi & Pidato Santun' },
              { name: "IPAS", icon: '🔬', desc: 'Alam, Sains & Sosial' },
              { name: "Pendidikan Pancasila", icon: '🇮🇩', desc: 'Nilai Kebangsaan & Moral' },
              { name: "SBDP", icon: '🎨', desc: 'Seni Musik & Prakarya' },
              { name: "PJOK", icon: '⚽', desc: 'Kebugaran & Olahraga' },
              { name: "Al-Qur'an Hadits", icon: '📖', desc: 'Tajwid & Dalil Shohih' },
              { name: "Akidah Akhlak", icon: '🤲', desc: 'Rukun Iman & Adab Mulia' },
              { name: "Fikih Ibadah", icon: '🕌', desc: 'Wudhu, Shalat & Zakat' },
              { name: "Sejarah Islam (SKI)", icon: '📜', desc: 'Kisah Nabi & Sahabat' },
              { name: "Bahasa Arab", icon: '🗣️', desc: 'Mufrodat & Bilangan' },
            ].map((subj, idx) => (
              <div
                key={idx}
                onClick={() => handleAction('materi')}
                className="cursor-pointer bg-white rounded-2xl p-3.5 text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <div className="text-2xl mb-1.5">{subj.icon}</div>
                <h4 className="font-heading font-bold text-xs text-slate-800 mb-0.5">
                  {subj.name}
                </h4>
                <p className="text-[10px] text-slate-500 leading-tight">
                  {subj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => handleAction('materi')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all"
          >
            <span>Buka Seluruh Materi Fase A - C</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Quote / Mutiara Hadits Card */}
      <section className="bg-gradient-to-r from-amber-50 via-amber-100/60 to-emerald-50 rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center text-3xl shrink-0 shadow-md">
          📜
        </div>
        <div className="space-y-2 text-center md:text-left">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
            Mutiara Hadits Hari Ini: Keutamaan Menuntut Ilmu
          </div>
          <p className="font-heading text-lg sm:text-xl font-bold text-slate-800 leading-snug">
            "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
          </p>
          <p className="text-sm text-slate-600 italic">
            "Menuntut ilmu itu adalah kewajiban bagi setiap orang muslim." (HR. Ibnu Majah)
          </p>
        </div>
      </section>

      {/* Madrasah Info & Interactive Location */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-sm">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" /> Info & Peta Lokasi Madrasah
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800">
            Madrasah Ibtidaiyah Terpadu Ceria
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Madrasah kami berlokasi di lingkungan asri dan kondusif, memadukan kurikulum Kementerian Agama dengan program tahfidz dan pembelajaran digital ramah anak.
          </p>

          <div className="space-y-2.5 pt-2 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Jl. Pendidikan Pesantren No. 12, Kompleks Terpadu</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span>Senin - Sabtu: 07.00 - 14.30 WIB</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span>Layanan Informasi: (021) 789-2345 / 0812-3456-7890</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleAction('tentang')}
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Lihat Profil Madrasah & Tenaga Pendidik</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Map Preview Card */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-200/80 shadow-md bg-emerald-50 h-72 flex flex-col items-center justify-center p-6 text-center">
            {/* Visual simulation of map */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 mx-auto animate-bounce-slow">
                <MapPin className="w-8 h-8 text-amber-300" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 text-lg">
                  Kampus Madrasah Ceria
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Akses mudah dijangkau kendaraan roda dua & empat, berdampingan dengan Masjid Jami' dan taman hijau santri.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-emerald-800 shadow-sm border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Terakreditasi A (Unggul)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
