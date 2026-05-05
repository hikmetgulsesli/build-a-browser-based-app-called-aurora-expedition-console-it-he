// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Kullanıcı Profili
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface KullaniciProfiliProps {}

export function KullaniciProfili(props: KullaniciProfiliProps) {
  return (
    <>
      {/* JSON Anchor: SideNavBar */}
      {/* Executing styles: style_component_shape, style_bg_color, style_separation_logic, style_typography */}
      <nav className="fixed left-0 top-0 h-full w-64 border-r border-slate-800 bg-slate-900 font-inter antialiased text-sm tracking-tight z-50">
      {/* Executing style: style_shell_layout */}
      <div className="flex flex-col h-full py-6">
      {/* Header section */}
      <div className="px-6 mb-8 flex flex-col gap-2">
      {/* Executing style: style_brand_logo */}
      <div className="text-lg font-bold tracking-wider text-slate-100 uppercase">
                          Aurora Console
                      </div>
      <div className="text-slate-400 text-xs tracking-widest uppercase">
                          Mission Control
                      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col mt-4">
      {/* Tab 0: Ana Ekran (Inactive) */}
      {/* Executing style: style_inactive_navigation, style_universal_hover, style_interactions */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span>Ana Ekran</span>
      </a>
      {/* Tab 1: İstatistikler (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">leaderboard</span>
      <span>İstatistikler</span>
      </a>
      {/* Tab 2: Ayarlar (Active - matching Profile/Settings context) */}
      {/* Executing style: style_active_navigation, style_interactions */}
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-medium">Ayarlar</span>
      </a>
      </div>
      {/* Bottom CTA */}
      <div className="mt-auto px-6">
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded py-2.5 px-4 font-medium hover:bg-blue-700 transition-colors active:scale-[0.98]">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Yeni Görev Ekle
                      </button>
      </div>
      </div>
      </nav>
      {/* Main Canvas Area (Offset by SideNav width) */}
      <main className="ml-64 flex-1 flex flex-col h-full bg-background relative overflow-hidden">
      {/* JSON Anchor: TopAppBar */}
      {/* Executing styles: style_component_shape, style_bg_color, style_separation_logic, style_typography */}
      <header className="docked full-width top-0 sticky z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md font-inter text-sm font-medium">
      {/* Executing style: style_shell_layout */}
      <div className="flex justify-between items-center w-full px-6 py-4">
      {/* Brand Anchor */}
      {/* Executing style: style_brand_logo */}
      <div className="text-xl font-black text-slate-100 flex items-center gap-2">
      <span className="material-symbols-outlined text-blue-500">radar</span>
                          Aurora Expedition Console
                      </div>
      {/* Actions Container (search_bar: on_right logic + trailing_icon_actions) */}
      <div className="flex items-center gap-4">
      <div className="relative hidden lg:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
      <input className="bg-slate-900 border border-slate-700 rounded-full pl-10 pr-4 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm w-64" placeholder="Sistemde ara..." type="text" />
      </div>
      <div className="flex items-center gap-2 border-l border-slate-800 pl-4 ml-2">
      {/* Executing style: style_inactive_navigation, style_universal_hover, style_interactions */}
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 hover:bg-slate-800/50">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      {/* Active action corresponding to current page intent */}
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-blue-500 font-bold cursor-pointer active:opacity-80 bg-blue-500/10">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
      </button>
      </div>
      </div>
      </div>
      </header>
      {/* Canvas Content: Profile Panel */}
      <div className="flex-1 overflow-y-auto p-margin md:p-xl custom-scrollbar">
      <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-lg">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Personel Profili</h1>
      <p className="font-body-base text-body-base text-on-surface-variant mt-1">Sistem erişimi ve operasyonel kayıtlar</p>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Sistem Bağlantısı Aktif</span>
      </div>
      </div>
      {/* Bento Grid Layout for Profile Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Identity Card (Spans 4 columns) */}
      <div className="lg:col-span-4 bg-surface-container rounded-lg border border-outline-variant p-lg flex flex-col relative overflow-hidden">
      {/* Subtle background texture indication */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-32 h-32 rounded-full border-2 border-outline-variant p-1 mb-4 relative">
      <img alt="Dr. Aurora Explorer Profil Fotoğrafı" className="w-full h-full rounded-full object-cover" data-alt="A hyper-realistic, highly detailed portrait of a female polar research scientist named Dr. Aurora Explorer. She is wearing high-tech, insulated cold-weather gear with subtle glowing blue accents indicating active thermal regulation. The lighting is cool, clinical, and moody, reflecting a high-stakes operational environment inside a futuristic mission control station. The background is slightly blurred but suggests heavy machinery and digital readouts. The overall aesthetic is cinematic, modern, and conveys professional calm and technical confidence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPJT_6rWGcEC-Uy95XhlX78WAtXI39A54fjpX-Q97p7oR0F3xmKcpdG3ilnAFVVdNmPtUAESymv9LHb8sOjKMbZY24uLtoknOzyZeetWkom2sn8ds60Mge5U1kxF_SY0rdYC3_EFilR0H_XXoyib1gsdOqZnFKdVYLbQyZ1BmK7Im343fnH9pecNl-chTiN15QurhAeNwNnZvbsk2F4NM_LDop7fMFUHCH7Sb_eUzWNvtxKmqRoAPMOWhepY7U-GUNuxeaNsm5LKPi" />
      {/* Status indicator on avatar */}
      <div className="absolute bottom-1 right-1 w-6 h-6 bg-surface-container rounded-full flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-surface-container"></div>
      </div>
      </div>
      <h2 className="font-h2 text-h2 text-on-surface mb-1">Dr. Aurora Explorer</h2>
      {/* Role Badge */}
      <div className="inline-flex items-center gap-1.5 bg-primary-container/10 text-primary border border-primary-container/30 px-3 py-1 rounded-full font-label-caps text-label-caps mt-2">
      <span className="material-symbols-outlined text-[14px]">star</span>
                                      Görev Lideri (Mission Lead)
                                  </div>
      <div className="w-full border-t border-outline-variant my-6"></div>
      {/* Vitals / Status (Aligned with brand operational precision) */}
      <div className="w-full space-y-4 text-left">
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Konum ID</span>
      <span className="font-data-mono text-data-mono text-on-surface">İSTASYON ALPHA</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Termal Durum</span>
      <span className="font-data-mono text-data-mono text-primary flex items-center gap-1">
                                              Optimum <span className="material-symbols-outlined text-[16px]">thermostat</span>
      </span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Erişim Seviyesi</span>
      <span className="font-data-mono text-data-mono text-on-surface">SEVİYE-5 (MAX)</span>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column Group (Spans 8 columns) */}
      <div className="lg:col-span-8 flex flex-col gap-gutter">
      {/* Activity Logs Card */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col flex-1">
      <div className="flex items-center justify-between mb-md pb-sm border-b border-outline-variant">
      <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">history</span>
                                          Operasyonel Kayıtlar
                                      </h3>
      <button className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors">Tümünü İndir</button>
      </div>
      {/* Data Table Style List */}
      <div className="flex flex-col space-y-1">
      {/* Log Item 1 */}
      <div className="group flex items-start gap-4 p-3 rounded hover:bg-surface-container-highest transition-colors">
      <div className="w-8 h-8 rounded bg-primary-container/10 border border-primary-container/20 flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-primary text-[18px]">satellite_alt</span>
      </div>
      <div className="flex-1 min-w-0">
      <p className="font-body-base text-body-base text-on-surface truncate">Veri senkronizasyonu tamamlandı. Ana karargah ile bağlantı stabil.</p>
      <p className="font-data-mono text-body-sm text-on-surface-variant mt-1 opacity-70">MODÜL: İletişim Sistemleri</p>
      </div>
      <div className="font-data-mono text-body-sm text-on-surface-variant shrink-0 text-right">
      <div>[14:02:45Z]</div>
      <div className="text-[10px] opacity-50 mt-1">BUGÜN</div>
      </div>
      </div>
      {/* Log Item 2 */}
      <div className="group flex items-start gap-4 p-3 rounded hover:bg-surface-container-highest transition-colors">
      <div className="w-8 h-8 rounded bg-surface-bright border border-outline-variant flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">settings_input_component</span>
      </div>
      <div className="flex-1 min-w-0">
      <p className="font-body-base text-body-base text-on-surface truncate">Sektör 7G dış alan termal sensör kalibrasyonu başlatıldı.</p>
      <p className="font-data-mono text-body-sm text-on-surface-variant mt-1 opacity-70">MODÜL: Çevre Kontrolü</p>
      </div>
      <div className="font-data-mono text-body-sm text-on-surface-variant shrink-0 text-right">
      <div>[11:15:22Z]</div>
      <div className="text-[10px] opacity-50 mt-1">BUGÜN</div>
      </div>
      </div>
      {/* Log Item 3 */}
      <div className="group flex items-start gap-4 p-3 rounded hover:bg-surface-container-highest transition-colors">
      <div className="w-8 h-8 rounded bg-surface-bright border border-outline-variant flex items-center justify-center shrink-0 mt-0.5">
      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">vpn_key</span>
      </div>
      <div className="flex-1 min-w-0">
      <p className="font-body-base text-body-base text-on-surface truncate">Güvenlik protokolü güncellendi. Sistem erişimi doğrulandı.</p>
      <p className="font-data-mono text-body-sm text-on-surface-variant mt-1 opacity-70">MODÜL: Kimlik Yönetimi</p>
      </div>
      <div className="font-data-mono text-body-sm text-on-surface-variant shrink-0 text-right">
      <div>[08:30:00Z]</div>
      <div className="text-[10px] opacity-50 mt-1">BUGÜN</div>
      </div>
      </div>
      </div>
      </div>
      {/* Settings & Security Horizontal Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Security Settings */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md">
      <h3 className="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-on-surface-variant">shield_lock</span>
                                          Güvenlik Ayarları
                                      </h3>
      <div className="space-y-4">
      {/* Toggle Item */}
      <div className="flex items-center justify-between">
      <div>
      <div className="font-body-base text-body-base text-on-surface">Biyometrik Doğrulama</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Sistem erişimi için gerekli</div>
      </div>
      {/* Custom Toggle Switch */}
      <div className="w-10 h-6 bg-primary-container rounded-full relative cursor-pointer flex items-center shrink-0">
      <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm"></div>
      </div>
      </div>
      <div className="w-full border-t border-outline-variant"></div>
      {/* Link Item */}
      <button className="w-full flex items-center justify-between text-left group">
      <div>
      <div className="font-body-base text-body-base text-on-surface group-hover:text-primary transition-colors">Erişim Anahtarlarını Yönet</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">2 aktif cihaz</div>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
      </button>
      </div>
      </div>
      {/* Session Actions */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-md flex flex-col">
      <h3 className="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-on-surface-variant">power_settings_new</span>
                                          Oturum Yönetimi
                                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Mevcut konsol bağlantısını sonlandırarak sistemi uyku moduna alır.</p>
      {/* Primary Action Buttons mapped to styling guidance */}
      <div className="mt-auto flex flex-col gap-3">
      <button className="w-full h-touch-target flex items-center justify-center gap-2 bg-transparent border border-outline-variant text-on-surface rounded hover:bg-surface-bright transition-colors font-medium">
      <span className="material-symbols-outlined text-[20px]">lock_clock</span>
                                              Ekranı Kilitle
                                          </button>
      <button className="w-full h-touch-target flex items-center justify-center gap-2 bg-error-container/10 border border-error-container text-error rounded hover:bg-error-container/20 transition-colors font-medium">
      <span className="material-symbols-outlined text-[20px]">logout</span>
                                              Oturumu Kapat
                                          </button>
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
