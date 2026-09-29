import React, { useState, useMemo } from 'react';
import { kumpulanMateri } from '../data/materi';
import { MateriItem, TabType, GameType, FaseType, MapelType } from '../types';
import { 
  BookOpen, 
  Search, 
  Filter, 
  BookCheck, 
  Sparkles, 
  X, 
  CheckCircle, 
  ArrowRight,
  Layers,
  GraduationCap,
  Sparkle
} from 'lucide-react';
import { sound } from '../utils/sound';

interface MateriProps {
  onSelectTab: (tab: TabType, game?: GameType) => void;
}

export const Materi: React.FC<MateriProps> = ({ onSelectTab }) => {
  const [selectedFase, setSelectedFase] = useState<FaseType | 'Semua'>('Semua');
  const [selectedKelas, setSelectedKelas] = useState<number | 'Semua'>('Semua');
  const [selectedMapel, setSelectedMapel] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMateri, setActiveMateri] = useState<MateriItem | null>(null);

  const faseList: { id: FaseType | 'Semua'; label: string; sub: string }[] = [
    { id: 'Semua', label: 'Semua Fase', sub: 'Kelas 1 - 6' },
    { id: 'Fase A', label: 'Fase A', sub: 'Kelas 1 & 2' },
    { id: 'Fase B', label: 'Fase B', sub: 'Kelas 3 & 4' },
    { id: 'Fase C', label: 'Fase C', sub: 'Kelas 5 & 6' },
  ];

  const kelasList: (number | 'Semua')[] = ['Semua', 1, 2, 3, 4, 5, 6];

  const mapelCategories: { group: string; list: MapelType[] }[] = [
    {
      group: 'Pendidikan Agama Islam & Bahasa',
      list: [
        'Tahfidz Qur\'an',
        'Al-Qur\'an Hadits',
        'Akidah Akhlak',
        'Fikih',
        'SKI',
        'Bahasa Arab'
      ]
    },
    {
      group: 'Mata Pelajaran Umum & Keterampilan',
      list: [
        'Matematika',
        'Bahasa Indonesia',
        'IPAS',
        'Pendidikan Pancasila',
        'SBDP',
        'PJOK'
      ]
    }
  ];

  const filteredMateri = useMemo(() => {
    return kumpulanMateri.filter((item) => {
      const matchFase = selectedFase === 'Semua' || item.fase === selectedFase;
      const matchKelas = selectedKelas === 'Semua' || item.kelas === selectedKelas;
      const matchMapel = selectedMapel === 'Semua' || item.mapel === selectedMapel;
      const matchSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.mapel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFase && matchKelas && matchMapel && matchSearch;
    });
  }, [selectedFase, selectedKelas, selectedMapel, searchQuery]);

  const openMateriDetail = (materi: MateriItem) => {
    sound.play('click');
    setActiveMateri(materi);
  };

  const closeModal = () => {
    sound.play('click');
    setActiveMateri(null);
  };

  const handleFaseClick = (fase: FaseType | 'Semua') => {
    sound.play('click');
    setSelectedFase(fase);
    // If selecting a specific fase, reset specific class if it doesn't belong to the fase
    if (fase === 'Fase A' && typeof selectedKelas === 'number' && selectedKelas > 2) {
      setSelectedKelas('Semua');
    } else if (fase === 'Fase B' && typeof selectedKelas === 'number' && (selectedKelas < 3 || selectedKelas > 4)) {
      setSelectedKelas('Semua');
    } else if (fase === 'Fase C' && typeof selectedKelas === 'number' && selectedKelas < 5) {
      setSelectedKelas('Semua');
    }
  };

  const handleKelasClick = (k: number | 'Semua') => {
    sound.play('click');
    setSelectedKelas(k);
    if (typeof k === 'number') {
      if (k <= 2) setSelectedFase('Fase A');
      else if (k <= 4) setSelectedFase('Fase B');
      else setSelectedFase('Fase C');
    }
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-6 sm:p-10 shadow-lg overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-300 text-xs font-bold border border-white/25">
            <BookOpen className="w-3.5 h-3.5" /> Kurikulum Madrasah Ibtidaiyah Terpadu (Fase A - C)
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight">
            Kumpulan Materi Pembelajaran MI
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            Mencakup materi lengkap <strong>Fase A (Kelas 1–2)</strong>, <strong>Fase B (Kelas 3–4)</strong>, dan <strong>Fase C (Kelas 5–6)</strong>. Dari Matematika, Bahasa Indonesia, IPAS, Pendidikan Pancasila, SBDP, PJOK, hingga Tahfidz Qur'an dan rumpun Pendidikan Agama Islam.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm space-y-5">
        
        {/* Search & Top Action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari materi, konsep, atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
            />
          </div>

          {/* Quick status count */}
          <div className="text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 self-stretch md:self-auto text-center">
            Menampilkan <span className="text-emerald-700 font-extrabold">{filteredMateri.length}</span> Modul Pembelajaran
          </div>
        </div>

        {/* 1. FILTER FASE (Fase A, B, C) */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkle className="w-3.5 h-3.5 text-amber-500" /> Pilih Tingkatan Fase Kurikulum:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {faseList.map((f) => {
              const isSelected = selectedFase === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => handleFaseClick(f.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-gradient-to-tr from-emerald-700 to-teal-600 text-white border-emerald-600 shadow-md scale-[1.02]'
                      : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-emerald-50/60 hover:border-emerald-200'
                  }`}
                >
                  <div className="font-heading font-bold text-sm">
                    {f.label}
                  </div>
                  <div className={`text-[11px] font-medium ${isSelected ? 'text-amber-300' : 'text-slate-400'}`}>
                    {f.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. FILTER KELAS (1 - 6) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0 mr-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600" /> Kelas:
          </span>
          {kelasList.map((k) => (
            <button
              key={String(k)}
              onClick={() => handleKelasClick(k)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedKelas === k
                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {k === 'Semua' ? 'Semua Kelas' : `Kelas ${k}`}
            </button>
          ))}
        </div>

        {/* 3. FILTER MAPEL DENGAN KELOMPOK */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-emerald-600" /> Pilih Mata Pelajaran:
            </span>
            {selectedMapel !== 'Semua' && (
              <button
                onClick={() => { sound.play('click'); setSelectedMapel('Semua'); }}
                className="text-[11px] text-emerald-700 font-bold hover:underline"
              >
                Tampilkan Semua Mapel
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => { sound.play('click'); setSelectedMapel('Semua'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedMapel === 'Semua'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Semua Mapel
            </button>

            {mapelCategories.flatMap(c => c.list).map((m) => (
              <button
                key={m}
                onClick={() => { sound.play('click'); setSelectedMapel(m); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedMapel === m
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200/60 hover:bg-emerald-100'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Materi Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMateri.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl p-6 border-2 border-emerald-100/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                    <GraduationCap className="w-3 h-3 text-emerald-700" /> {item.fase}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    Kelas {item.kelas}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200 line-clamp-1">
                  {item.mapel}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors leading-snug">
                  {item.judul}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {item.ringkasan}
                </p>
              </div>

              {/* Quick Key Takeaways */}
              <div className="bg-emerald-50/60 rounded-2xl p-3.5 border border-emerald-100 space-y-1.5">
                <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> Poin Kunci:
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {item.poinPenting.slice(0, 2).map((poin, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="line-clamp-1">{poin}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => openMateriDetail(item)}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 group-hover:bg-emerald-700 transition-colors"
            >
              <BookCheck className="w-4 h-4" />
              <span>Buka Modul Belajar</span>
            </button>
          </div>
        ))}
      </div>

      {filteredMateri.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-heading text-lg font-bold text-slate-700">Materi Tidak Ditemukan</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Coba pilih Fase lain, reset filter mata pelajaran, atau gunakan kata kunci pencarian yang berbeda.
          </p>
          <button
            onClick={() => {
              setSelectedFase('Semua');
              setSelectedKelas('Semua');
              setSelectedMapel('Semua');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-sm"
          >
            Reset Semua Filter
          </button>
        </div>
      )}

      {/* Reader Modal */}
      {activeMateri && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-emerald-100 overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between shrink-0">
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-amber-200">
                    {activeMateri.fase} • Kelas {activeMateri.kelas}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950">
                    {activeMateri.mapel}
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold leading-snug">
                  {activeMateri.judul}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
              {/* Doa / Dalil Box if available */}
              {activeMateri.doaAtauDalil && (
                <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200 space-y-2 text-center">
                  <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                    Dalil / Nilai Karakter Terkait
                  </div>
                  {activeMateri.doaAtauDalil.arab && (
                    <div className="text-xl sm:text-2xl font-bold text-slate-800 py-1 font-serif">
                      {activeMateri.doaAtauDalil.arab}
                    </div>
                  )}
                  {activeMateri.doaAtauDalil.latin && (
                    <div className="text-xs italic text-slate-600 font-medium">
                      "{activeMateri.doaAtauDalil.latin}"
                    </div>
                  )}
                  {activeMateri.doaAtauDalil.arti && (
                    <div className="text-xs text-slate-700 pt-1 border-t border-amber-200/60">
                      <strong>Artinya:</strong> {activeMateri.doaAtauDalil.arti}
                    </div>
                  )}
                </div>
              )}

              {/* Full Content Paragraphs */}
              <div className="space-y-3">
                <h4 className="font-heading text-base font-bold text-emerald-800 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Uraian Materi Pembelajaran:</span>
                </h4>
                {activeMateri.kontenLengkap.map((p, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-sm">
                    {p}
                  </p>
                ))}
              </div>

              {/* Rangkuman Poin Penting */}
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 space-y-3">
                <h4 className="font-heading text-sm font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Kesimpulan & Poin Kunci Santri:</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {activeMateri.poinPenting.map((poin, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">
                        {idx + 1}
                      </span>
                      <span>{poin}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-colors"
              >
                Tutup Bacaan
              </button>

              <button
                onClick={() => {
                  closeModal();
                  onSelectTab('game', 'hub');
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm shadow-md shadow-amber-400/20 transition-all"
              >
                <span>Uji di 3 Game Interaktif</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
