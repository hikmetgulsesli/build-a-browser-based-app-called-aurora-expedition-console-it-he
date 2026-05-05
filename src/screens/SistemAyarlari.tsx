// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sistem Ayarları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SistemAyarlariProps {}

export function SistemAyarlari(props: SistemAyarlariProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-64 border-r border-slate-800 bg-slate-900 flex flex-col py-6 z-50">
      <div className="px-6 mb-8 flex flex-col gap-1">
      <div className="text-lg font-bold tracking-wider text-slate-100 uppercase">Aurora Console</div>
      <div className="font-inter antialiased text-sm tracking-tight text-slate-400">Mission Control</div>
      </div>
      <div className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
      <span className="font-inter antialiased text-sm tracking-tight">Ana Ekran</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>leaderboard</span>
      <span className="font-inter antialiased text-sm tracking-tight">İstatistikler</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-inter antialiased text-sm tracking-tight">Ayarlar</span>
      </a>
      </div>
      <div className="px-4 mt-auto">
      <button className="w-full h-touch-target bg-primary-container text-on-primary-container rounded flex items-center justify-center font-inter antialiased text-sm tracking-tight hover:bg-slate-800/50 hover:text-white transition-colors">
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
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 flex items-center justify-center w-touch-target h-touch-target">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 flex items-center justify-center w-touch-target h-touch-target">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Page Canvas */}
      <div className="p-margin max-w-7xl mx-auto w-full flex-1 flex flex-col gap-margin">
      {/* Header Section */}
      <div className="flex flex-col gap-sm">
      <h1 className="font-h1 text-h1 text-on-surface">Konfigürasyon Paneli</h1>
      <p className="font-body-base text-body-base text-on-surface-variant">Sistem ayarlarını, API anahtarlarını ve görev tercihlerini yönetin.</p>
      </div>
      {/* Tabs Navigation */}
      <div className="flex items-center gap-sm border-b border-outline-variant pb-xs overflow-x-auto">
      <button className="px-md py-sm rounded-full bg-primary-container text-on-primary-container font-h3 text-h3 flex items-center justify-center whitespace-nowrap h-touch-target">
                          Genel
                      </button>
      <button className="px-md py-sm rounded-full bg-transparent text-on-surface-variant hover:bg-surface-container-high transition-colors font-h3 text-h3 flex items-center justify-center whitespace-nowrap h-touch-target">
                          Ekip Yönetimi
                      </button>
      <button className="px-md py-sm rounded-full bg-transparent text-on-surface-variant hover:bg-surface-container-high transition-colors font-h3 text-h3 flex items-center justify-center whitespace-nowrap h-touch-target">
                          Donanım Kalibrasyonu
                      </button>
      <button className="px-md py-sm rounded-full bg-transparent text-on-surface-variant hover:bg-surface-container-high transition-colors font-h3 text-h3 flex items-center justify-center whitespace-nowrap h-touch-target">
                          Veri Saklama
                      </button>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Main Column (Forms) */}
      <div className="lg:col-span-2 flex flex-col gap-gutter">
      {/* Server Settings Card */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-margin">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-primary-container">dns</span>
      <h2 className="font-h2 text-h2 text-on-surface">Sunucu Bağlantısı</h2>
      </div>
      <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Ana Endpoint URL</label>
      <input className="w-full h-touch-target bg-surface border border-outline-variant rounded px-md font-data-mono text-data-mono text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" type="text" value="https://api.aurora-expedition.sys/v3/" />
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Yedek Telsiz Rölesi</label>
      <input className="w-full h-touch-target bg-surface border border-outline-variant rounded px-md font-data-mono text-data-mono text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" type="text" value="udp://relay-alpha.aurora.local:9092" />
      </div>
      </div>
      </section>
      {/* API Keys Card */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-margin">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-primary-container">key</span>
      <h2 className="font-h2 text-h2 text-on-surface">Erişim Anahtarları</h2>
      </div>
      <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Operasyonel API Anahtarı</label>
      <div className="flex gap-sm">
      <input className="flex-1 h-touch-target bg-surface border border-outline-variant rounded px-md font-data-mono text-data-mono text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" type="password" value="aurora-xxxxxxxxxxxxxxxxx" />
      <button className="h-touch-target px-md bg-surface border border-outline-variant rounded hover:bg-surface-container-high transition-colors flex items-center justify-center text-on-surface">
      <span className="material-symbols-outlined">visibility</span>
      </button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Bu anahtar, sahadaki sensör ağlarına tam okuma/yazma erişimi sağlar.</p>
      </div>
      </div>
      <div className="pt-sm flex justify-end">
      <button className="h-touch-target px-lg bg-primary-container text-on-primary-container rounded font-h3 text-h3 hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
                                      Değişiklikleri Kaydet
                                  </button>
      </div>
      </section>
      </div>
      {/* Side Column (Toggles & Info) */}
      <div className="lg:col-span-1 flex flex-col gap-gutter">
      {/* Preferences Card */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-margin">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-primary-container">tune</span>
      <h2 className="font-h2 text-h2 text-on-surface">Arayüz Tercihleri</h2>
      </div>
      <div className="flex flex-col gap-md">
      {/* Toggle Item 1 */}
      <div className="flex items-center justify-between min-h-touch-target">
      <div className="flex flex-col">
      <span className="font-h3 text-h3 text-on-surface">Karanlık Mod</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Sistem temasını zorla.</span>
      </div>
      <div className="w-12 h-6 bg-primary-container rounded-full relative cursor-pointer border border-primary-container flex items-center px-1">
      <div className="w-4 h-4 bg-on-primary-container rounded-full absolute right-1 shadow-sm"></div>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Toggle Item 2 */}
      <div className="flex items-center justify-between min-h-touch-target">
      <div className="flex flex-col">
      <span className="font-h3 text-h3 text-on-surface">Acil Durum Bildirimleri</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Sesli uyarıları etkinleştir.</span>
      </div>
      <div className="w-12 h-6 bg-primary-container rounded-full relative cursor-pointer border border-primary-container flex items-center px-1">
      <div className="w-4 h-4 bg-on-primary-container rounded-full absolute right-1 shadow-sm"></div>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Toggle Item 3 */}
      <div className="flex items-center justify-between min-h-touch-target">
      <div className="flex flex-col">
      <span className="font-h3 text-h3 text-on-surface">Telemetri Senkronizasyonu</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Arka planda veri çek.</span>
      </div>
      <div className="w-12 h-6 bg-surface-container-highest rounded-full relative cursor-pointer border border-outline-variant flex items-center px-1">
      <div className="w-4 h-4 bg-outline rounded-full absolute left-1 shadow-sm"></div>
      </div>
      </div>
      </div>
      </section>
      {/* Status Info Card */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-md relative overflow-hidden">
      {/* Decorative background texture */}
      <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none text-9xl">
      <span className="material-symbols-outlined">satellite_alt</span>
      </div>
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-xs">Mevcut Durum</div>
      <div className="flex items-center gap-md">
      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      <span className="font-data-mono text-data-mono text-on-surface">SİSTEM ÇEVRİMİÇİ</span>
      </div>
      <div className="flex justify-between items-center border-t border-outline-variant pt-sm mt-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Sürüm</span>
      <span className="font-data-mono text-data-mono text-on-surface">v2.4.1-polar</span>
      </div>
      <div className="flex justify-between items-center border-t border-outline-variant pt-sm mt-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Son Yedekleme</span>
      <span className="font-data-mono text-data-mono text-on-surface">04:32 AM Z</span>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
