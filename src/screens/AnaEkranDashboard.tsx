// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Ekran - Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaEkranDashboardProps {}

export function AnaEkranDashboard(props: AnaEkranDashboardProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-slate-800 bg-slate-900 flex flex-col py-6 font-inter antialiased text-sm tracking-tight z-50">
      <div className="px-6 mb-8">
      <div className="text-lg font-bold tracking-wider text-slate-100 uppercase">Aurora Console</div>
      <div className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-semibold">Mission Control</div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
      {/* Active Tab: Ana Ekran */}
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150 hover:bg-slate-800/50 hover:text-white" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="font-medium">Ana Ekran</span>
      </a>
      {/* Inactive Tab: İstatistikler */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined">leaderboard</span>
      <span className="font-medium">İstatistikler</span>
      </a>
      {/* Inactive Tab: Ayarlar */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-medium">Ayarlar</span>
      </a>
      </nav>
      <div className="px-4 mt-auto">
      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white h-touch-target rounded-md font-medium transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[20px]">add</span>
                      Yeni Görev Ekle
                  </button>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-w-0 h-screen">
      {/* TopAppBar (Shared Component) */}
      <header className="docked full-width top-0 sticky z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center w-full px-6 py-4 font-inter text-sm font-medium">
      <div className="text-xl font-black text-slate-100 tracking-tight">Aurora Expedition Console</div>
      <div className="flex items-center gap-6">
      {/* Search Bar on right */}
      <div className="relative hidden lg:block w-64">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
      <input className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 pl-10 pr-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors h-[36px]" placeholder="Görev veya personel ara..." type="text" />
      </div>
      <div className="flex items-center gap-2 border-l border-slate-800 pl-6">
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full hover:bg-slate-800">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full hover:bg-slate-800">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Canvas (Design System Driven) */}
      <main className="flex-1 overflow-y-auto p-margin bg-background">
      {/* Operational Alert Banner */}
      <div className="w-full bg-secondary-container/30 border border-secondary/20 rounded-lg p-md mb-margin flex items-start gap-md">
      <span className="material-symbols-outlined text-secondary mt-0.5">severe_cold</span>
      <div>
      <h4 className="font-h3 text-h3 text-on-surface">Sektör 7'de Düşük Görüş Uyarısı</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Tüm aktif saha ekiplerinin termal ekipman protokollerine uyması ve telemetri verilerini saatlik olarak güncellemesi gerekmektedir.</p>
      </div>
      </div>
      {/* Dashboard Header & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-md mb-margin">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Görev Panosu</h1>
      <p className="font-body-base text-body-base text-on-surface-variant mt-xs">Güncel kutup operasyonları ve telemetri durumları.</p>
      </div>
      <div className="flex flex-wrap items-center gap-sm">
      <button className="h-[36px] px-md rounded-DEFAULT bg-surface-container-high border-border-outline-variant text-on-surface font-body-sm text-body-sm hover:bg-surface-bright transition-colors border border-outline/30 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
                              Tümü
                          </button>
      <button className="h-[36px] px-md rounded-DEFAULT bg-surface border-border-outline text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container transition-colors border border-outline/30 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-surface-variant"></span>
                              Planlanan
                          </button>
      <button className="h-[36px] px-md rounded-DEFAULT bg-surface border-border-outline text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container transition-colors border border-outline/30 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                              Devam Eden
                          </button>
      <button className="h-[36px] px-md rounded-DEFAULT bg-surface border-border-outline text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container transition-colors border border-outline/30 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
                              Tamamlanan
                          </button>
      </div>
      </div>
      {/* Mission Cards Grid (Bento Style approach) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
      {/* Active Mission Card (Large/Featured) */}
      <div className="xl:col-span-2 bg-surface-container-high rounded-lg border border-outline-variant overflow-hidden flex flex-col relative">
      {/* Map Underlay effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-background to-background pointer-events-none"></div>
      <div className="p-md border-b border-outline-variant/50 flex justify-between items-center relative z-10 bg-surface-container-highest/50 backdrop-blur-sm">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-primary text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>explore</span>
      <div>
      <h2 className="font-h2 text-h2 text-on-surface">Operasyon: Buzkıran Alpha</h2>
      <p className="font-data-mono text-data-mono text-on-surface-variant text-[12px] mt-1">LAT: 78°13'N | LNG: 15°33'E</p>
      </div>
      </div>
      <div className="h-[24px] px-sm bg-primary/20 text-primary rounded flex items-center justify-center font-label-caps text-label-caps border border-primary/30">
                                  DEVAM EDEN
                              </div>
      </div>
      <div className="p-md flex-1 grid grid-cols-1 md:grid-cols-2 gap-gutter relative z-10">
      {/* Vitals */}
      <div className="bg-surface-container rounded p-md border border-outline/10">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Takım Durumu</h3>
      <div className="space-y-4">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface text-[16px]">person</span>
      </div>
      <div>
      <div className="font-body-sm text-body-sm text-on-surface">Dr. Aris Thorne</div>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">Lider / Jeolog</div>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary text-[18px]">favorite</span>
      </div>
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface text-[16px]">person</span>
      </div>
      <div>
      <div className="font-body-sm text-body-sm text-on-surface">Cmdr. Vael</div>
      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">Navigasyon</div>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary text-[18px]">favorite</span>
      </div>
      </div>
      </div>
      {/* Environment */}
      <div className="bg-surface-container rounded p-md border border-outline/10 flex flex-col justify-between">
      <div>
      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Ortam Metrikleri</h3>
      <div className="grid grid-cols-2 gap-4">
      <div>
      <div className="font-data-mono text-data-mono text-on-surface text-lg">-34°C</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Dış Sıcaklık</div>
      </div>
      <div>
      <div className="font-data-mono text-data-mono text-on-surface text-lg">45 km/s</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Rüzgar (K)</div>
      </div>
      </div>
      </div>
      <div className="mt-4 pt-4 border-t border-outline/10 flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary">ac_unit</span>
      <div className="font-body-sm text-body-sm text-secondary">Ağır kar yağışı bekleniyor (2s)</div>
      </div>
      </div>
      </div>
      </div>
      {/* Upcoming Mission Card */}
      <div className="bg-surface-container-high rounded-lg border border-outline-variant p-md flex flex-col hover:border-outline transition-colors">
      <div className="flex justify-between items-start mb-md">
      <div className="h-[24px] px-sm bg-surface-bright text-on-surface rounded flex items-center justify-center font-label-caps text-label-caps border border-outline/30">
                                  PLANLANAN
                              </div>
      <button className="text-on-surface-variant hover:text-on-surface">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </div>
      <h2 className="font-h3 text-h3 text-on-surface mb-xs">Keşif: Sektör 9</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-1">Buzul altı sismik aktivite ölçümü ve ekipman kurulumu.</p>
      <div className="space-y-3 mt-auto">
      <div className="flex items-center justify-between text-sm border-b border-outline/10 pb-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Başlangıç:</span>
      <span className="font-data-mono text-data-mono text-on-surface">14:00Z | T-04:30</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">group</span> Ekip:
                                  </span>
      <span className="font-data-mono text-data-mono text-on-surface">4 Personel</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">inventory</span> Ekipman:
                                  </span>
      <span className="font-data-mono text-data-mono text-secondary">Hazırlanıyor</span>
      </div>
      </div>
      <button className="w-full mt-md bg-surface-container text-on-surface border border-outline-variant h-[36px] rounded font-body-sm text-body-sm hover:bg-surface-bright transition-colors">
                              Detayları İncele
                          </button>
      </div>
      {/* Another Active Mission Card (Compact) */}
      <div className="bg-surface-container-high rounded-lg border border-outline-variant p-md flex flex-col">
      <div className="flex justify-between items-start mb-md">
      <div className="h-[24px] px-sm bg-tertiary/20 text-tertiary rounded flex items-center justify-center font-label-caps text-label-caps border border-tertiary/30">
                                  BEKLEMEDE
                              </div>
      <span className="material-symbols-outlined text-tertiary">warning</span>
      </div>
      <h2 className="font-h3 text-h3 text-on-surface mb-xs">İkmal Önceliği: Tesis B</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-1">Hava muhalefeti nedeniyle uçuş askıya alındı. Termal pencere bekleniyor.</p>
      <div className="bg-surface-container rounded p-sm border border-outline/10 mb-md">
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-outline text-[16px]">schedule</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Tahmini Gecikme</span>
      </div>
      <div className="font-data-mono text-data-mono text-on-surface text-lg">08:45:00</div>
      </div>
      <div className="mt-auto flex items-center justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pencere:</span>
      <div className="flex items-center gap-1 text-on-surface">
      <span className="material-symbols-outlined text-[16px]">cloud_off</span>
      <span className="font-data-mono text-data-mono">18:00Z</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
