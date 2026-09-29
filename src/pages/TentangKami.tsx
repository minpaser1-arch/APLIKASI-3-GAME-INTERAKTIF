import React from 'react';
import { 
  GraduationCap, 
  Heart, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Sparkles,
  Building,
  Target,
  Compass
} from 'lucide-react';

export const TentangKami: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      {/* Hero Profile Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 sm:p-12 shadow-xl overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-amber-300 text-xs font-bold border border-white/25">
            <GraduationCap className="w-4 h-4" /> Profil Madrasah Ibtidaiyah Ceria
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            Madrasah Mandiri, Santri Berprestasi
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            Madrasah Ibtidaiyah Ceria berkomitmen menghadirkan ekosistem pendidikan dasar Islam yang memadukan nilai keimanan, sains modern, dan teknologi ramah anak untuk mencetak generasi sholeh dan berwawasan luas.
          </p>
        </div>
      </div>

      {/* Visi & Misi Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visi */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-md space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Compass className="w-6 h-6 text-emerald-700" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-800">
            Visi Madrasah
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            "Terwujudnya Generasi Santri Madrasah Ibtidaiyah yang Unggul dalam Prestasi, Kokoh dalam Imtaq, Berakhlakul Karimah, serta Terampil Menguasai Teknologi Informasi."
          </p>
        </div>

        {/* Misi */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-md space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Target className="w-6 h-6 text-amber-700" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-800">
            Misi Madrasah
          </h2>
          <ul className="text-slate-600 text-xs sm:text-sm space-y-2.5">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Menyelenggarakan pembelajaran Al-Qur'an, Hadits, Fikih, dan Bahasa Arab yang menyenangkan.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mengembangkan potensi literasi, numerasi, dan sains teknologi digital santri.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Membiasakan akhlakul karimah dan adab islami dalam kehidupan sehari-hari santri.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 6 Karakter Santri Madrasah */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Pilar Karakter
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800">
            6 Nilai Utama Santri Ceria
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: 'Religius', desc: 'Rajin shalat dhuha & fardhu', icon: '🤲' },
            { title: 'Jujur', desc: 'Menjunjung nilai kebenaran', icon: '🌟' },
            { title: 'Mandiri', desc: 'Disiplin dan bertanggung jawab', icon: '🚀' },
            { title: 'Cerdas', desc: 'Kritis dan gemar membaca', icon: '💡' },
            { title: 'Santun', desc: 'Hormat guru & orang tua', icon: '🤝' },
            { title: 'Peduli', desc: 'Cinta lingkungan & sesama', icon: '🌱' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 text-center border border-slate-200 shadow-sm space-y-1.5"
            >
              <div className="text-3xl mb-1">{item.icon}</div>
              <h4 className="font-heading font-bold text-sm text-slate-800">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-500 leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tenaga Pendidik & Ustadz */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Pendidik Teladan
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800">
            Guru & Pengasuh Santri
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Drs. H. Ahmad Fauzi, M.Pd.', role: 'Kepala Madrasah', subj: 'Manajemen Pendidikan MI', icon: '👨‍🏫' },
            { name: 'Ustadzah Maryam, S.Pd.I.', role: 'Waka Kurikulum', subj: 'Guru Al-Qur\'an Hadits', icon: '🧕' },
            { name: 'Ustadz Ridwan, S.Ag.', role: 'Waka Kesiswaan', subj: 'Guru Fikih & Akidah Akhlak', icon: '👨‍🏫' },
            { name: 'Ustadzah Nurul, S.Pd.', role: 'Koordinator Digital', subj: 'Guru Tematik & Bahasa Arab', icon: '🧕' },
          ].map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 text-center border border-emerald-100 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-3xl mx-auto border border-emerald-200">
                {teacher.icon}
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-slate-800">
                  {teacher.name}
                </h4>
                <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {teacher.role}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {teacher.subj}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fasilitas & Kontak */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-heading text-2xl font-bold text-slate-800">
            Fasilitas Pembelajaran Madrasah
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Madrasah didukung sarana representatif yang nyaman, bersih, dan memacu kreativitas santri dalam belajar agama maupun pengetahuan umum.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Building className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Masjid Jami' Santri</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Perpustakaan Digital</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Lab Komputer Santri</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Lapangan Olahraga</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-emerald-50 rounded-2xl p-6 border border-emerald-200 space-y-4">
          <h3 className="font-heading text-lg font-bold text-emerald-950">
            Hubungi Kami & Kunjungan Madrasah
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>Jl. Pendidikan Pesantren No. 12, Kompleks Terpadu</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Telepon: (021) 789-2345 | WhatsApp: 0812-3456-7890</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Email: info@madrasah-ceria.sch.id</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Jam Operasional: Senin - Sabtu (07.00 - 14.30 WIB)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
