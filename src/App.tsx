import React, { useState, useEffect } from 'react';
import { TabType, GameType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Beranda } from './pages/Beranda';
import { Materi } from './pages/Materi';
import { PermainanHub } from './pages/PermainanHub';
import { UlarTangga } from './pages/UlarTangga';
import { Jutawan } from './pages/Jutawan';
import { IFPQuiz } from './pages/IFPQuiz';
import { TentangKami } from './pages/TentangKami';
import { Bantuan } from './pages/Bantuan';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('beranda');
  const [activeGame, setActiveGame] = useState<GameType>('hub');

  const handleSelectTab = (tab: TabType, game?: GameType) => {
    setCurrentTab(tab);
    if (tab === 'game' && game) {
      setActiveGame(game);
    } else if (tab === 'game' && !game) {
      setActiveGame('hub');
    }
  };

  const handleSelectGame = (game: GameType) => {
    setActiveGame(game);
    setCurrentTab('game');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setActiveGame('hub');
    setCurrentTab('game');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-emerald-50/60 text-slate-800">
      {/* Sticky Top Navigation */}
      <Navbar 
        currentTab={currentTab} 
        onSelectTab={handleSelectTab} 
        activeGame={activeGame} 
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {currentTab === 'beranda' && (
          <Beranda onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'materi' && (
          <Materi onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'game' && (
          <div>
            {activeGame === 'hub' && (
              <PermainanHub onSelectGame={handleSelectGame} />
            )}
            {activeGame === 'ular-tangga' && (
              <UlarTangga onBackToHub={handleBackToHub} />
            )}
            {activeGame === 'jutawan' && (
              <Jutawan onBackToHub={handleBackToHub} />
            )}
            {activeGame === 'ifp' && (
              <IFPQuiz onBackToHub={handleBackToHub} />
            )}
          </div>
        )}

        {currentTab === 'tentang' && (
          <TentangKami />
        )}

        {currentTab === 'bantuan' && (
          <Bantuan />
        )}
      </main>

      {/* Bottom Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
