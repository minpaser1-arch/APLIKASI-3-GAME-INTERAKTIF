import React, { useState } from 'react';
import { 
  HelpCircle, 
  Gamepad2, 
  UploadCloud, 
  Github, 
  FileCode, 
  CheckCircle2, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { sound } from '../utils/sound';

export const Bantuan: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [openSection, setOpenSection] = useState<'games' | 'github' | 'soal'>('games');

  const sampleCodeSnippet = `// CONTOH FORMAT SOAL DI data-soal.js
const bankSoalUlarTangga = [
  {
    id: 1,
    pertanyaan: "Simbol sila pertama Pancasila yang mencerminkan Ketuhanan Yang Maha Esa adalah...",
    pilihan: ["Pohon Beringin", "Bintang Emas", "Kepala Banteng", "Rantai"],
    jawaban: 1, // Indeks 1 berarti opsi ke-2 ("Bintang Emas")
    pembahasan: "Bintang emas berlatar perisai hitam adalah lambang sila pertama Pancasila.",
    kategori: "Pendidikan Pancasila",
    fase: "Fase A", // Fase A (Kls 1-2), Fase B (Kls 3-4), Fase C (Kls 5-6)
    kelas: 1
  }
];`;

  const handleCopyCode = () => {
    sound.play('click');
    navigator.clipboard.writeText(sampleCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    sound.play('click');
    // Trigger download of /data-soal.js
    const element = document.createElement('a');
    element.href = '/data-soal.js';
    element.download = 'data-soal.js';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" /> Pusat Bantuan & Dokumentasi
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Panduan Penggunaan & Publikasi
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Temukan cara bermain 3 game edukasi, langkah mengupload website ke GitHub & Vercel, serta panduan menambah dan mengedit bank soal.
        </p>
      </div>

      {/* Navigation Tabs between Help Sections */}
      <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-md mx-auto">
        <button
          onClick={() => { sound.play('click'); setOpenSection('games'); }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            openSection === 'games'
              ? 'bg-white text-emerald-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🎮 Cara Main
        </button>
        <button
          onClick={() => { sound.play('click'); setOpenSection('github'); }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            openSection === 'github'
              ? 'bg-white text-emerald-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🚀 Upload Vercel
        </button>
        <button
          onClick={() => { sound.play('click'); setOpenSection('soal'); }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            openSection === 'soal'
              ? 'bg-white text-emerald-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          ✏️ Edit Soal
        </button>
      </div>

      {/* SECTION 1: PANDUAN 3 GAME */}
      {openSection === 'games' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Game 1: Ular Tangga */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎲</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-800">
                  Game 1: Ular Tangga Santri (50 Soal)
                </h3>
                <span className="text-xs font-semibold text-emerald-700">Papan 10x10 = 100 Kotak</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Lempar Dadu:</strong> Klik dadu animasi untuk mendapatkan angka acak 1 sampai 6. Pion akan melangkah sesuai angka.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Tangga Naik:</strong> Jika mendarat di pangkal tangga, pion otomatis naik ke atas (misal dari kotak 4 ke 14, 28 ke 84).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Ular Turun:</strong> Jika mendarat di kepala ular, pion akan tergelincir turun ke bawah (misal kotak 17 turun ke 7, 87 ke 24).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Kotak Soal Tantangan ❓:</strong> Saat mendarat di kotak tantangan, soal pilihan ganda akan muncul. Jika <strong>BENAR</strong>, pion tetap di posisi dan lanjut; jika <strong>SALAH</strong>, pion mundur 2 petak!</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Menang:</strong> Pemain yang pertama kali mencapai kotak 100 dinyatakan menang dengan sambutan pesta kembang api (confetti).</span>
              </li>
            </ul>
          </div>

          {/* Game 2: Jutawan */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💰</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-800">
                  Game 2: Siapa Ingin Menjadi Jutawan (50 Soal)
                </h3>
                <span className="text-xs font-semibold text-amber-700">15 Tingkat Hadiah Poin & 2 Titik Aman</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>15 Tingkat Tangga Hadiah:</strong> Dimulai dari 100 poin sampai puncak 1.000.000 poin dengan tingkat kesulitan yang semakin menantang.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>2 Titik Aman:</strong> Soal ke-5 (1.000 poin) dan Soal ke-10 (32.000 poin). Jika salah setelah melewati titik ini, kamu tetap membawa pulang poin titik aman tersebut.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>3 Bantuan Unik:</strong></span>
              </li>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-6 text-xs">
                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                  <strong>🔍 50:50:</strong> Menghapus 2 opsi salah sehingga tersisa 2 pilihan.
                </div>
                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  <strong>📞 Tanya Teman:</strong> Simulasi telepon ustadz/teman cerdas memberi bocoran.
                </div>
                <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-200">
                  <strong>👥 Tanya Penonton:</strong> Grafik persentase polling suara teman sekelas.
                </div>
              </div>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Bawa Pulang Hadiah:</strong> Pemain dapat memutuskan berhenti di tengah kuis untuk mengamankan poin yang sudah terkumpul.</span>
              </li>
            </ul>
          </div>

          {/* Game 3: IFP */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✨</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-800">
                  Game 3: Kuis IFP Interaktif (50 Soal)
                </h3>
                <span className="text-xs font-semibold text-purple-700">10 Soal Acak per Sesi & Skor Real-Time</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Format Cerdas Cermat:</strong> Soal muncul satu per satu dengan 4 opsi pilihan ganda.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Timer Fleksibel:</strong> Tersedia pilihan timer 15 detik (cepat), 30 detik (standar), atau mode santai tanpa batasan waktu.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Streak Multiplier:</strong> Jawab benar berturut-turut untuk meraih bonus kombo pengali skor!</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Rangkuman Hasil:</strong> Di akhir 10 soal, ditampilkan skor total, predikat nilai (Mumtaz/Jayyid), dan evaluasi pembahasan setiap nomor.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* SECTION 2: PANDUAN GITHUB & VERCEL */}
      {openSection === 'github' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-md space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <UploadCloud className="w-8 h-8 text-emerald-600" />
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-800">
                  Panduan Deploy ke GitHub & Online di Vercel
                </h3>
                <p className="text-xs text-slate-500">
                  Aplikasi ini 100% murni frontend statis, tanpa database luar sehingga sangat cepat & gratis di Vercel.
                </p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h4 className="font-heading font-bold text-base text-slate-800">
                  Langkah 1: Siapkan di GitHub
                </h4>
              </div>
              <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-2">
                <p>1. Buka <strong>github.com</strong> dan buat repositori baru dengan nama <code>belajar-madrasah</code>.</p>
                <p>2. Upload semua file proyek ini ke repositori tersebut.</p>
                <p>3. Pastikan file <code>README.md</code> dan <code>package.json</code> berada di root folder.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h4 className="font-heading font-bold text-base text-slate-800">
                  Langkah 2: Onlinekan di Vercel
                </h4>
              </div>
              <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-2">
                <p>1. Buka <strong>vercel.com</strong> dan login menggunakan akun GitHub Anda.</p>
                <p>2. Klik tombol <strong>Add New</strong> → <strong>Project</strong>.</p>
                <p>3. Pilih repositori <code>belajar-madrasah</code> dari daftar repositori Anda.</p>
                <p>4. Klik tombol <strong>Deploy</strong>. Vercel akan otomatis melakukan proses build dalam ~30 detik!</p>
                <p className="p-3 bg-emerald-50 rounded-xl text-emerald-900 border border-emerald-200">
                  🎉 Website Anda langsung online di alamat: <br />
                  <strong className="text-emerald-700">https://belajar-madrasah.vercel.app</strong>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h4 className="font-heading font-bold text-base text-slate-800">
                  Langkah 3: Pembaruan Otomatis (CI/CD)
                </h4>
              </div>
              <div className="pl-8 text-xs sm:text-sm text-slate-600 space-y-1">
                <p>Setiap kali Anda mengubah soal atau materi di GitHub (git commit & push), Vercel secara otomatis akan memperbarui website Anda tanpa perlu deploy manual lagi!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: PANDUAN EDIT DATA SOAL */}
      {openSection === 'soal' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <FileCode className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-800">
                    Panduan Mengedit Bank Soal
                  </h3>
                  <p className="text-xs text-slate-500">
                    File: <code>public/data-soal.js</code> atau <code>src/data/soal.ts</code>
                  </p>
                </div>
              </div>

              <button
                onClick={handleDownloadFile}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Unduh data-soal.js</span>
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Semua soal tersusun dalam format <strong>Array of Objects</strong>. Bapak/Ibu guru dapat mengubah pertanyaan, mengganti pilihan jawaban, ataupun mengubah kunci jawaban dengan mudah.
              </p>

              <div className="bg-slate-900 rounded-2xl p-4 text-slate-200 text-xs font-mono relative overflow-x-auto">
                <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800 text-slate-400">
                  <span>Format Struktur Objek Soal</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Contoh'}</span>
                  </button>
                </div>
                <pre>{sampleCodeSnippet}</pre>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-heading font-bold text-sm text-slate-800">
                  Petunjuk Komponen Objek:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 pl-4 list-disc">
                  <li><strong>id:</strong> Nomor unik untuk membedakan tiap soal.</li>
                  <li><strong>pertanyaan:</strong> Kalimat pertanyaan yang akan tampil di layar siswa.</li>
                  <li><strong>pilihan:</strong> Array 4 pilihan jawaban teks <code>["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"]</code>.</li>
                  <li><strong>jawaban:</strong> Angka indeks opsi yang benar: <code>0</code> untuk A, <code>1</code> untuk B, <code>2</code> untuk C, atau <code>3</code> untuk D.</li>
                  <li><strong>pembahasan:</strong> Penjelasan edukatif yang tampil saat siswa selesai menjawab.</li>
                  <li><strong>kategori:</strong> Mata pelajaran madrasah: Matematika, Bahasa Indonesia, IPAS, Pendidikan Pancasila, SBDP, PJOK, Tahfidz Qur'an, Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, atau Bahasa Arab.</li>
                  <li><strong>fase:</strong> Tingkatan Fase Kurikulum: <code>Fase A</code> (Kelas 1-2), <code>Fase B</code> (Kelas 3-4), atau <code>Fase C</code> (Kelas 5-6).</li>
                  <li><strong>kelas:</strong> Angka kelas 1 sampai 6.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
