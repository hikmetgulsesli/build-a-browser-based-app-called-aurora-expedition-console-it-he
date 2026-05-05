// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sistem Ayarları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { AppSettings, ScreenName } from "../types/domain";

interface SistemAyarlariProps {
  settings: AppSettings;
  onUpdateSettings: (updates: Partial<AppSettings>) => void;
  onNavigate: (screen: ScreenName) => void;
  onNewMission: () => void;
  onResetData: () => void;
}

export function SistemAyarlari({
  settings,
  onUpdateSettings,
  onNavigate,
  onNewMission,
  onResetData,
}: SistemAyarlariProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-64 border-r border-slate-800 bg-slate-900 flex flex-col py-6 z-50">
      <div className="px-6 mb-8 flex flex-col gap-1">
      <div className="text-lg font-bold tracking-wider text-slate-100 uppercase">Aurora Console</div>
      <div className="font-inter antialiased text-sm tracking-tight text-slate-400">Mission Control</div>
      </div>
      <div className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('dashboard')}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
      <span className="font-inter antialiased text-sm tracking-tight">Ana Ekran</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('stats')}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>leaderboard</span>
      <span className="font-inter antialiased text-sm tracking-tight">İstatistikler</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('settings')}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-inter antialiased text-sm tracking-tight">Ayarlar</span>
      </a>
      </div>
      <div className="px-4 mt-auto">
      <button className="w-full h-touch-target bg-primary-container text-on-primary-container rounded flex items-center justify-center font-inter antialiased text-sm tracking-tight hover:bg-slate-800/50 hover:text-white transition-colors cursor-pointer" onClick={onNewMission}>
                      Yeni Görev Ekle
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col h-full overflow-y-auto relative bg-surface">
      {/* Shared Component: TopAppBar */}
      <header className="w-full sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
      <div className="text-xl font-black text-slate-100">Aurora Expedition Console</div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 flex items-center justify-center w-touch-target h-touch-target cursor-pointer" onClick={() => onNavigate('profile')} aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 flex items-center justify-center w-touch-target h-touch-target cursor-pointer" onClick={() => onNavigate('profile')} aria-label="Profil">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Page Canvas */}
      <div className="p-margin max-w-7xl mx-auto w-full flex-1 flex flex-col gap-margin">
      {/* Header Section */}
      <div className="flex flex-col gap-sm">
      <h1 className="font-h1 text-h1 text-on-surface">Sistem Ayarları</h1>
      <p className="font-body-base text-body-base text-on-surface-variant">Uygulama davranışı, görünüm ve veri yönetimi ayarları.</p>
      </div>
      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
      {/* Appearance */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]">palette</span>
      <h2 className="font-h3 text-h3 text-on-surface">Görünüm</h2>
      </div>
      <div className="flex flex-col gap-sm">
      <label className="font-body-sm text-body-sm text-on-surface-variant">Tema</label>
      <select className="h-touch-target bg-surface border border-outline-variant rounded px-4 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none cursor-pointer" value={settings.theme} onChange={(e) => onUpdateSettings({ theme: e.target.value as 'light' | 'dark' | 'auto' })}>
      <option value="dark">Koyu</option>
      <option value="light">Açık</option>
      <option value="auto">Sistem</option>
      </select>
      </div>
      <div className="flex flex-col gap-sm">
      <label className="font-body-sm text-body-sm text-on-surface-variant">Birim Sistemi</label>
      <select className="h-touch-target bg-surface border border-outline-variant rounded px-4 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none cursor-pointer" value={settings.unitSystem} onChange={(e) => onUpdateSettings({ unitSystem: e.target.value as 'metric' | 'imperial' })}>
      <option value="metric">Metrik (°C, km, kg)</option>
      <option value="imperial">Emperyal (°F, mil, lb)</option>
      </select>
      </div>
      </div>
      {/* Data Management */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]">storage</span>
      <h2 className="font-h3 text-h3 text-on-surface">Veri Yönetimi</h2>
      </div>
      <div className="flex items-center justify-between py-2">
      <div>
      <div className="font-body-sm text-body-sm text-on-surface">Otomatik Kaydetme</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Değişiklikleri otomatik olarak kaydet</div>
      </div>
      <button className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${settings.telemetryEnabled ? 'bg-primary-container' : 'bg-surface-container-highest'}`} onClick={() => onUpdateSettings({ telemetryEnabled: !settings.telemetryEnabled })}>
        <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${settings.telemetryEnabled ? 'translate-x-7' : 'translate-x-1'}`} />
      </button>
      </div>
      <div className="flex flex-col gap-sm">
      <label className="font-body-sm text-body-sm text-on-surface-variant">Otomatik Kaydetme Aralığı (saniye)</label>
      <input className="h-touch-target bg-surface border border-outline-variant rounded px-4 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" type="number" min={5} max={300} value={settings.autoSaveInterval} onChange={(e) => onUpdateSettings({ autoSaveInterval: Number(e.target.value) })} />
      </div>
      <div className="pt-md border-t border-outline-variant">
      <button className="w-full h-touch-target bg-error-container text-on-error-container rounded font-body-sm text-body-sm hover:bg-error-container/90 transition-colors cursor-pointer" onClick={onResetData}>
        Tüm Verileri Sıfırla
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
