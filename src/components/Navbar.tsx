import React, { useState } from 'react';
import { TabType, GameType } from '../types';
import { 
  BookOpen, 
  Gamepad2, 
  Home, 
  Info, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType, game?: GameType) => void;
  activeGame: GameType;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, activeGame }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(sound.enabled);

  const handleToggleSound = () => {
    const next = sound.toggleSound();
    setSoundActive(next);
  };

  const navItems = [
    { id: 'beranda' as TabType, label: 'Beranda', icon: Home },
    { id: 'materi' as TabType, label: 'Kumpulan Materi', icon: BookOpen },
    { id: 'game' as TabType, label: 'Permainan Edukasi', icon: Gamepad2, badge: '3 Game' },
    { id: 'tentang' as TabType, label: 'Tentang Kami', icon: Info },
    { id: 'bantuan' as TabType, label: 'Bantuan & Panduan', icon: HelpCircle },
  ];

  const handleNavClick = (tab: TabType) => {
    sound.play('click');
    onSelectTab(tab, tab === 'game' ? (activeGame === 'hub' ? 'hub' : activeGame) : undefined);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & School Branding */}
          <button 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-xl sm:text-2xl text-emerald-800 tracking-tight">
                  Madrasah Ceria
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  MI
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Portal Belajar & Game Edukasi Interaktif
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400 group-hover:text-emerald-600'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-amber-400 text-emerald-950 font-extrabold' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls: Audio toggle & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSound}
              title={soundActive ? 'Matikan Suara Efek' : 'Nyalakan Suara Efek'}
              className={`p-2.5 rounded-xl border transition-all ${
                soundActive 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' 
                  : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
              }`}
              aria-label="Toggle Sound"
            >
              {soundActive ? <Volume2 className="w-5 h-5 text-emerald-600" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.play('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-xl md:hidden text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
            Menu Navigasi
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-amber-300' : 'text-emerald-600'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-amber-400 text-emerald-950' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-3 text-xs text-slate-500">
            <span>Efek Suara Game:</span>
            <button
              onClick={handleToggleSound}
              className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              <span>{soundActive ? 'Aktif' : 'Mati'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
