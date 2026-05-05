// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İstatistikler ve Analiz
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Mission, TeamMember, EquipmentPack, WeatherWindow, RouteCheckpoint, RiskFlag, ScreenName } from "../types/domain";

interface IstatistiklerVeAnalizProps {
  missions: Mission[];
  teamMembers: TeamMember[];
  equipmentPacks: EquipmentPack[];
  weatherWindows: WeatherWindow[];
  routeCheckpoints: RouteCheckpoint[];
  riskFlags: RiskFlag[];
  onNavigate: (screen: ScreenName) => void;
  onNewMission: () => void;
}

export function IstatistiklerVeAnaliz({
  missions,
  teamMembers,
  equipmentPacks,
  weatherWindows,
  routeCheckpoints,
  riskFlags,
  onNavigate,
  onNewMission,
}: IstatistiklerVeAnalizProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-slate-900 fixed left-0 top-0 h-full w-64 border-r border-slate-800 flex flex-col h-full py-6 z-50">
      <div className="px-6 mb-8">
      <div className="text-lg font-bold tracking-wider text-slate-100 uppercase mb-1">Aurora Console</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant">Mission Control</div>
      </div>
      <div className="flex-1 flex flex-col gap-1 font-inter antialiased text-sm tracking-tight">
      {/* Ana Ekran (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('dashboard')}>
      <span className="material-symbols-outlined">dashboard</span>
      <span>Ana Ekran</span>
      </a>
      {/* İstatistikler (Active) */}
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('stats')}>
      <span className="material-symbols-outlined">leaderboard</span>
      <span>İstatistikler</span>
      </a>
      {/* Ayarlar (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('settings')}>
      <span className="material-symbols-outlined">settings</span>
      <span>Ayarlar</span>
      </a>
      </div>
      <div className="px-6 mt-auto">
      <button className="w-full h-touch-target bg-primary-container text-white font-h3 text-h3 rounded-DEFAULT hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-2 cursor-pointer" onClick={onNewMission}>
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
                      Yeni Görev Ekle
                  </button>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 ml-64 flex flex-col h-full overflow-hidden bg-background">
      {/* TopAppBar */}
      <header className="bg-slate-950/80 backdrop-blur-md docked full-width top-0 sticky z-40 border-b border-slate-800 flex justify-between items-center w-full px-6 py-4">
      <div className="text-xl font-black text-slate-100 font-inter text-sm font-medium">Aurora Expedition Console</div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-variant" onClick={() => onNavigate('profile')} aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-variant" onClick={() => onNavigate('profile')} aria-label="Profil">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-margin">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Operasyonel Metrikler</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tarihsel görev verileri ve sistem performansı</p>
      </div>
      <div className="flex items-center gap-sm">
      <select className="h-touch-target bg-surface-container border border-outline-variant rounded-DEFAULT px-4 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none">
      <option>Kasım</option>
      <option>Ekim</option>
      <option>Eylül</option>
      </select>
      <select className="h-touch-target bg-surface-container border border-outline-variant rounded-DEFAULT px-4 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none">
      <option>2024</option>
      <option>2023</option>
      </select>
      </div>
      </div>
      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {/* Card 1: Total Missions */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col justify-between min-h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Toplam Görev</span>
      <span className="material-symbols-outlined text-on-surface-variant" style={{fontSize: "18px"}}>explore</span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
      <span className="font-h1 text-h1 text-on-surface text-3xl">{missions.length}</span>
      <span className="font-body-sm text-body-sm text-primary">+{missions.filter(m => new Date(m.createdAt).getMonth() === new Date().getMonth()).length} bu ay</span>
      </div>
      </div>
      {/* Card 2: Success Rate */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col justify-between min-h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Başarı Oranı</span>
      <span className="material-symbols-outlined text-primary-container" style={{fontSize: "18px"}}>check_circle</span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
      <span className="font-h1 text-h1 text-on-surface text-3xl">{missions.length > 0 ? Math.round((missions.filter(m => m.status === 'tamamlandi').length / missions.length) * 100) : 0}<span className="text-xl text-on-surface-variant">%</span></span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 mt-3 rounded-full overflow-hidden">
      <div className="bg-primary-container h-full" style={{width: `${missions.length > 0 ? (missions.filter(m => m.status === 'tamamlandi').length / missions.length) * 100 : 0}%`}}></div>
      </div>
      </div>
      {/* Card 3: Equipment Usage */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col justify-between min-h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Ekipman Kullanımı</span>
      <span className="material-symbols-outlined text-on-surface-variant" style={{fontSize: "18px"}}>construction</span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
      <span className="font-h1 text-h1 text-on-surface text-3xl">{equipmentPacks.length > 0 ? Math.round((equipmentPacks.filter(e => e.isAssigned).length / equipmentPacks.length) * 100) : 0}<span className="text-xl text-on-surface-variant">%</span></span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Kapasite</span>
      </div>
      </div>
      {/* Card 4: Weather Downtime */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col justify-between min-h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-error uppercase">Hava Kaynaklı Kesinti</span>
      <span className="material-symbols-outlined text-error" style={{fontSize: "18px"}}>severe_cold</span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
      <span className="font-h1 text-h1 text-error text-3xl">{weatherWindows.filter(w => !w.isUsable).length}</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Riskli Pencere</span>
      </div>
      </div>
      </div>
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mt-2">
      {/* Main Chart: Operational Trend (Span 2) */}
      <div className="lg:col-span-2 bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h2 className="font-h3 text-h3 text-on-surface">Görev Hacmi ve Kesinti Trendi</h2>
      <button className="text-on-surface-variant hover:text-on-surface p-1">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>more_vert</span>
      </button>
      </div>
      {/* Simulated Chart Area using Grid/Flex */}
      <div className="flex-1 min-h-[240px] flex items-end gap-2 pt-4 relative border-b border-surface-container-highest pb-2">
      {/* Y-Axis Labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-on-surface-variant font-data-mono text-xs pb-2 pr-2 border-r border-surface-container-highest">
      <span>100</span>
      <span>75</span>
      <span>50</span>
      <span>25</span>
      <span>0</span>
      </div>
      {/* Bars (Simulated Data) */}
      <div className="flex-1 flex justify-around items-end h-full ml-8">
      {/* Week 1 */}
      <div className="flex flex-col justify-end items-center gap-1 w-full group">
      <div className="w-full max-w-[32px] bg-primary-container/80 hover:bg-primary-container h-[40%] rounded-t-sm transition-all relative"></div>
      <div className="w-full max-w-[32px] bg-error/80 hover:bg-error h-[10%] rounded-t-sm transition-all relative mt-1"></div>
      <span className="font-data-mono text-[10px] text-on-surface-variant mt-2">H1</span>
      </div>
      {/* Week 2 */}
      <div className="flex flex-col justify-end items-center gap-1 w-full">
      <div className="w-full max-w-[32px] bg-primary-container/80 hover:bg-primary-container h-[65%] rounded-t-sm transition-all relative"></div>
      <div className="w-full max-w-[32px] bg-error/80 hover:bg-error h-[5%] rounded-t-sm transition-all relative mt-1"></div>
      <span className="font-data-mono text-[10px] text-on-surface-variant mt-2">H2</span>
      </div>
      {/* Week 3 */}
      <div className="flex flex-col justify-end items-center gap-1 w-full">
      <div className="w-full max-w-[32px] bg-primary-container/80 hover:bg-primary-container h-[85%] rounded-t-sm transition-all relative"></div>
      <div className="w-full max-w-[32px] bg-error/80 hover:bg-error h-[20%] rounded-t-sm transition-all relative mt-1"></div>
      <span className="font-data-mono text-[10px] text-on-surface-variant mt-2">H3</span>
      </div>
      {/* Week 4 */}
      <div className="flex flex-col justify-end items-center gap-1 w-full">
      <div className="w-full max-w-[32px] bg-primary-container/80 hover:bg-primary-container h-[55%] rounded-t-sm transition-all relative"></div>
      <div className="w-full max-w-[32px] bg-error/80 hover:bg-error h-[30%] rounded-t-sm transition-all relative mt-1"></div>
      <span className="font-data-mono text-[10px] text-on-surface-variant mt-2">H4</span>
      </div>
      </div>
      </div>
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-primary-container"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Başarılı Görev</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-error"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Kesinti (Saat)</span>
      </div>
      </div>
      </div>
      {/* Secondary Chart: Equipment Status List */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h2 className="font-h3 text-h3 text-on-surface">Kritik Sistem Durumu</h2>
      </div>
      <div className="flex flex-col gap-4 flex-1">
      {/* Item 1 */}
      <div>
      <div className="flex justify-between font-body-sm text-body-sm text-on-surface mb-1">
      <span>Termal Jeneratörler</span>
      <span className="font-data-mono">92%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
      <div className="bg-primary-container h-full w-[92%]"></div>
      </div>
      </div>
      {/* Item 2 */}
      <div>
      <div className="flex justify-between font-body-sm text-body-sm text-on-surface mb-1">
      <span>İletişim Röleleri</span>
      <span className="font-data-mono">78%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
      <div className="bg-tertiary-container h-full w-[78%]"></div>
      </div>
      </div>
      {/* Item 3 */}
      <div>
      <div className="flex justify-between font-body-sm text-body-sm text-on-surface mb-1">
      <span>Zemin Araçları (Rover)</span>
      <span className="font-data-mono text-error">45%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
      <div className="bg-error h-full w-[45%]"></div>
      </div>
      </div>
      {/* Item 4 */}
      <div>
      <div className="flex justify-between font-body-sm text-body-sm text-on-surface mb-1">
      <span>Yaşam Destek Üniteleri</span>
      <span className="font-data-mono">99%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
      <div className="bg-primary-container h-full w-[99%]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
