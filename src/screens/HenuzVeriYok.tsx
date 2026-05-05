// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Henüz Veri Yok
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HenuzVeriYokProps {}

export function HenuzVeriYok(props: HenuzVeriYokProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full w-64 border-r bg-slate-900 border-slate-800 py-6 shrink-0 z-50 relative shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div className="px-6 mb-8 flex flex-col gap-1">
      <h1 className="text-lg font-bold tracking-wider text-slate-100 uppercase truncate">Aurora Console</h1>
      <span className="font-body-sm text-body-sm text-slate-400 truncate">Mission Control</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
      <ul className="flex flex-col gap-1 font-inter antialiased text-sm tracking-tight">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                              Ana Ekran
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">leaderboard</span>
                              İstatistikler
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
                              Ayarlar
                          </a>
      </li>
      </ul>
      </nav>
      <div className="px-4 mt-auto pt-6">
      <button className="w-full h-touch-target bg-primary-container text-on-primary-container font-h3 text-h3 rounded flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Yeni Görev Ekle
                  </button>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
      {/* TopAppBar */}
      <header className="docked full-width top-0 sticky z-40 bg-slate-950/80 backdrop-blur-md flex justify-between items-center w-full px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-4">
      <button className="md:hidden text-slate-400 hover:text-slate-100 transition-colors focus:outline-none">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-xl font-black text-slate-100 font-inter text-sm font-medium tracking-tight">Aurora Expedition Console</div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant">
      <span className="material-symbols-outlined">search</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Empty State Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center p-gutter md:p-margin overflow-y-auto bg-surface-container-lowest relative">
      {/* Decorative background elements for subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container/20 via-surface-container-lowest/0 to-transparent pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-lg mx-auto bg-surface border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      {/* Icon Container */}
      <div className="w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/5">
      <span className="material-symbols-outlined text-[48px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                              explore
                          </span>
      </div>
      {/* Text Content */}
      <h2 className="font-h1 text-h1 text-on-surface mb-3 tracking-tight">
                          Henüz Görev Planlanmadı
                      </h2>
      <p className="font-body-base text-body-base text-on-surface-variant mb-8 max-w-sm mx-auto leading-relaxed">
                          Kutup keşiflerinizi başlatmak için ilk görevinizi planlayın. Hedef koordinatları, ekipmanları ve takım üyelerini belirleyerek operasyonu başlatabilirsiniz.
                      </p>
      {/* CTA */}
      <button className="h-touch-target px-8 bg-primary-container text-on-primary-container font-h3 text-h3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container/90 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-primary-container focus-visible:outline-none shadow-lg shadow-primary-container/20">
      <span className="material-symbols-outlined text-[20px]">add</span>
                          İlk Görevi Oluştur
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
