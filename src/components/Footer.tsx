import React from 'react';
import { TabType, GameType } from '../types';
import { GraduationCap, Heart, Sparkles, MapPin, Phone, Mail, Award, BookCheck } from 'lucide-react';
import { sound } from '../utils/sound';

interface FooterProps {
  onSelectTab: (tab: TabType, game?: GameType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (tab: TabType, game?: GameType) => {
    sound.play('click');
    onSelectTab(tab, game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-emerald-900/40 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-200" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                Madrasah Ceria <span className="text-amber-400">MI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mewujudkan generasi santri Madrasah Ibtidaiyah yang cerdas, sholeh, mandiri, dan berakhlakul karimah melalui pembelajaran interaktif modern.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-xs font-medium text-emerald-400">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Madrasah Mandiri Berprestasi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <BookCheck className="w-4 h-4 text-emerald-400" />
              <span>Jelajah Menu</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('beranda')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('materi')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Kumpulan Materi Pelajaran MI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('tentang')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tentang Madrasah & Profil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('bantuan')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Panduan Guru & Panduan Vercel
                </button>
              </li>
            </ul>
          </div>

          {/* Game Modules */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>3 Game Interaktif</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('game', 'ular-tangga')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span>🎲</span> Ular Tangga Santri (50 Soal)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('game', 'jutawan')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span>💰</span> Siapa Ingin Menjadi Jutawan (50 Soal)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('game', 'ifp')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span>✨</span> Kuis IFP Interaktif (50 Soal)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Madrasah Info */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Kontak Madrasah</span>
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Jl. Pendidikan Pesantren No. 12, Kompleks Madrasah Terpadu</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>(021) 789-2345 / 0812-3456-7890</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@madrasah-ceria.sch.id</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Madrasah Ceria MI. Didesain untuk kemajuan pendidikan anak bangsa.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Dibuat dengan penuh</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>untuk Santri Madrasah Ibtidaiyah se-Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
