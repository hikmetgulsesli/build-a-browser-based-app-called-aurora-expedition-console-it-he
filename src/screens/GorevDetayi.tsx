// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Görev Detayı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GorevDetayiProps {}

export function GorevDetayi(props: GorevDetayiProps) {
  return (
    <>
      {/* Navigation Shell suppressed for Task-Focused sub-page (Mission Detail implies 'Back' navigation) */}
      {/* Top App Bar for Detay Screen */}
      <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-high/80 backdrop-blur-md border-b border-surface-container-highest">
      <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
      <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant transition-colors text-on-surface">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>arrow_back</span>
      </button>
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Operasyon Kış Fırtınası</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">ID: AX-9942 • Sektör: 4B Kuzey</p>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 h-touch-target rounded bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[18px]">edit</span>
                          Düzenle
                      </button>
      <button className="flex items-center gap-2 px-4 h-touch-target rounded bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[18px]">share</span>
                          Paylaş
                      </button>
      <button className="flex items-center gap-2 px-4 h-touch-target rounded bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[18px]">archive</span>
                          Arşivle
                      </button>
      <button className="flex items-center gap-2 px-6 h-touch-target rounded bg-primary-container hover:bg-blue-700 text-on-primary-container transition-colors font-h3 text-h3 ml-2 focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                          BAŞLAT
                      </button>
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 mt-[88px] p-margin max-w-[1600px] mx-auto w-full">
      {/* Status & Alert Row */}
      <div className="flex items-center justify-between mb-margin bg-surface-container rounded-lg p-md border border-surface-container-highest">
      <div className="flex items-center gap-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps border border-tertiary/30">
                          BEKLEMEDE
                      </span>
      <span className="font-data-mono text-data-mono text-on-surface-variant">
                          Tahmini Başlangıç: T-04:22:10
                      </span>
      </div>
      <div className="flex items-center gap-2 text-error">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      <span className="font-body-sm text-body-sm font-semibold">Risk: Yüksek (Sıcaklık Düşüşü Uyarısı)</span>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
      {/* Left Column: Briefing & Crew (4 cols) */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
      {/* Briefing Card */}
      <div className="bg-surface-container rounded-lg p-lg border border-surface-container-highest flex-1">
      <h2 className="font-h2 text-h2 text-on-surface mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">description</span>
                              Görev Özeti
                          </h2>
      <p className="font-body-base text-body-base text-on-surface-variant mb-6">
                              Sektör 4B'deki otomatik meteoroloji istasyonunun (İstasyon-Delta) sensör kalibrasyonu ve batarya değişimi. Yaklaşan Kategori 3 fırtına öncesi tamamlanması kritiktir. Tahmini dış mekan maruziyet süresi: 45 dakika.
                          </p>
      <div className="grid grid-cols-2 gap-4 border-t border-surface-container-highest pt-4">
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">HEDEF KOORDİNATLAR</span>
      <span className="font-data-mono text-data-mono text-on-surface">82° 10' G, 15° 30' D</span>
      </div>
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">EKİPMAN YÜKÜ</span>
      <span className="font-body-sm text-body-sm text-on-surface">14 kg (Ağır Kit)</span>
      </div>
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">ARAÇ TİPİ</span>
      <span className="font-body-sm text-body-sm text-on-surface">Snowcat M2</span>
      </div>
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">İLETİŞİM PROTOKOLÜ</span>
      <span className="font-body-sm text-body-sm text-on-surface">Kanal 4 (Şifreli)</span>
      </div>
      </div>
      </div>
      {/* Crew List Card */}
      <div className="bg-surface-container rounded-lg p-lg border border-surface-container-highest">
      <div className="flex items-center justify-between mb-md">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">group</span>
                                  Saha Ekibi
                              </h2>
      <span className="font-body-sm text-body-sm text-outline">3 Personel</span>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 p-3 rounded bg-surface border border-surface-container-highest">
      <img alt="Dr. Elif Yılmaz" className="w-10 h-10 rounded-full border border-outline-variant" data-alt="A professional headshot of a polar researcher in dark winter gear against a stark technical background. High-contrast, modern corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAydkVHlrKH4owYGq3PoCdI3CbopGbiVJOUeqChqG4x9H32TXDqOp0qG5SfKip3TCgEtq3QxTG6zRg5lsT_bZAiKw-fcoAoMWNLNhhcvQ5S6GykuEh2y8jHPcuxb4bvE_6hlMpzjzvgk-ZUVZUuEJrLq0_q7EW7ZywJwDla7-76VOc2auAahfSitIWBXSuQNU26-zI-AbLTDrEa-OO7JBFLUoFQ1Wjtl9W9vRY2oMKLBaWr-NH5s3zTpZVBPQC9fOkEAfLCkRmSGmGQ" />
      <div className="flex-1">
      <h3 className="font-h3 text-h3 text-on-surface">Dr. Elif Yılmaz</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Görev Komutanı</p>
      </div>
      <span className="material-symbols-outlined text-primary" title="Tıbbi Onaylı">medical_services</span>
      </div>
      <div className="flex items-center gap-3 p-3 rounded bg-surface border border-surface-container-highest">
      <img alt="Kaan Demir" className="w-10 h-10 rounded-full border border-outline-variant" data-alt="A professional headshot of a rugged field technician in heavy parka gear. Dark background, dramatic lighting, serious mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmt3ZeURTkWB5-ItpeiIXT7Tehj1lWfph5Lygmy4Esuer2-OzuAKZxAD04SYhnuJ-WE-umau8ccJJxoOHnH5tWceWKqUqKMn_DgO2VNspj0h9sgYkVeKIqvthul0vhKuVDtexozIKpDEl9oDMbz7VdzOk3afc3BcDpHLOxdy07sM7tQ3bWYynGFS6plXf_MSfYmutZEZH_KpxDiaQQ6ZqMHxbc7NdN2ldKOdGAwQjUiiGoaISyKCO1rj02MOZBSWr1WYCFqj0QfZUx" />
      <div className="flex-1">
      <h3 className="font-h3 text-h3 text-on-surface">Kaan Demir</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Sistem Mühendisi</p>
      </div>
      <span className="material-symbols-outlined text-outline" title="Tıbbi Onay Bekliyor">pending</span>
      </div>
      <div className="flex items-center gap-3 p-3 rounded bg-surface border border-surface-container-highest">
      <img alt="Ayşe Kaya" className="w-10 h-10 rounded-full border border-outline-variant" data-alt="A professional headshot of an environmental scientist wearing a heavy dark jacket. Neutral expression, stark lighting, technical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWMNxXMm3xK5ZxMXcezShovAFatXCtUDkkorzVW1XQodP8_rSsvDsC6JW7clSEVItgtvmFuh2eDaCUMDZ4g7hjqqYAh_jdS2r3L-YDdtAk9PF3kTEAYILDWyOLpI48Ornv8uORDvXok6kJuQ1NTygzGX3u0iaXt7XxhnMO3OmgmpFhYSHvcqEL0ri6ejj-9lOQqnTGOYEVAlWny_tUtd3RsZLf976IlGvhQFfhWytkDFDMoQK2qox2csFVs-euDhD6Hp-jET5eD1Q1" />
      <div className="flex-1">
      <h3 className="font-h3 text-h3 text-on-surface">Ayşe Kaya</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Navigasyon &amp; İletişim</p>
      </div>
      <span className="material-symbols-outlined text-primary" title="Tıbbi Onaylı">medical_services</span>
      </div>
      </div>
      </div>
      </div>
      {/* Center Column: Map (8 cols) */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
      {/* High-Res Map Placeholder */}
      <div className="bg-surface-container rounded-lg border border-surface-container-highest relative overflow-hidden h-[400px]">
      <div className="absolute inset-0 bg-surface-container-low opacity-80 z-10" style={{backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
      <img alt="Polar Map" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40" data-alt="A high-altitude, technical satellite map view of a frozen polar landscape. Deep dark blue and slate tones dominate the terrain. Grid lines and topographic contours are subtly visible. The overall mood is cold, analytical, and highly operational, fitting a modern mission control interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTfbnnydwDK5tgapScM5-iVytlUPrb5By0LskJY7sgvcQFg_N9k9o5ZLL_dAbq4joNnVJF7t3Iuwzu3dc1QSjfMeBg2ihiWgl2xpcy09rK7d7NxWmn9aMFTYYA1ibrw8lmtZmBU_hqoTG3ykNUe8KwgpkqVYvRHivhWMKzZaxU-wZ-Uu9MhT63T26ZySN1kIAM1cIP8qyF2ZArHetuBxumYj_bIE7CAhHSlhXIMrTw64bKzot1qZMW5Ee49qXLASO4K4E8kad5Tq9z" />
      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
      <button className="w-10 h-10 bg-surface-container-high/80 backdrop-blur-md border border-outline-variant rounded flex items-center justify-center text-on-surface hover:bg-surface-variant">
      <span className="material-symbols-outlined">add</span>
      </button>
      <button className="w-10 h-10 bg-surface-container-high/80 backdrop-blur-md border border-outline-variant rounded flex items-center justify-center text-on-surface hover:bg-surface-variant">
      <span className="material-symbols-outlined">remove</span>
      </button>
      <button className="w-10 h-10 bg-surface-container-high/80 backdrop-blur-md border border-outline-variant rounded flex items-center justify-center text-on-surface hover:bg-surface-variant mt-4">
      <span className="material-symbols-outlined">my_location</span>
      </button>
      </div>
      {/* Map Overlay Data Panel */}
      <div className="absolute bottom-4 left-4 z-20 bg-surface-container-high/90 backdrop-blur-md border border-outline-variant rounded p-4 min-w-[250px]">
      <h4 className="font-label-caps text-label-caps text-outline mb-2">GÜNCEL KONUM VERİSİ</h4>
      <div className="flex justify-between items-center mb-1">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Rakım:</span>
      <span className="font-data-mono text-data-mono text-on-surface">1,240 m</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Buz Kalınlığı:</span>
      <span className="font-data-mono text-data-mono text-on-surface">3.2 m</span>
      </div>
      </div>
      </div>
      {/* Telemetry & Weather Panel */}
      <div className="bg-surface-container rounded-lg p-lg border border-surface-container-highest flex-1">
      <h2 className="font-h2 text-h2 text-on-surface mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">monitoring</span>
                              Hava Durumu Telemetrisi
                          </h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="p-4 rounded bg-surface border border-surface-container-highest">
      <span className="block font-label-caps text-label-caps text-outline mb-2">DIŞ SICAKLIK</span>
      <div className="flex items-end gap-2 text-error">
      <span className="font-h1 text-h1">-42°C</span>
      <span className="material-symbols-outlined mb-1">arrow_downward</span>
      </div>
      </div>
      <div className="p-4 rounded bg-surface border border-surface-container-highest">
      <span className="block font-label-caps text-label-caps text-outline mb-2">RÜZGAR HIZI</span>
      <div className="flex items-end gap-2 text-tertiary">
      <span className="font-h1 text-h1">65 km/s</span>
      <span className="material-symbols-outlined mb-1">air</span>
      </div>
      </div>
      <div className="p-4 rounded bg-surface border border-surface-container-highest">
      <span className="block font-label-caps text-label-caps text-outline mb-2">GÖRÜŞ MESAFESİ</span>
      <div className="flex items-end gap-2 text-primary">
      <span className="font-h1 text-h1">2.4 km</span>
      <span className="material-symbols-outlined mb-1">visibility_off</span>
      </div>
      </div>
      </div>
      {/* Faux Graph Area */}
      <div className="h-32 w-full border-t border-surface-container-highest relative pt-4">
      <span className="absolute top-2 left-0 font-label-caps text-label-caps text-outline">24 SAATLİK SICAKLIK TAHMİNİ</span>
      <div className="w-full h-full flex items-end gap-1 opacity-60">
      {/* Simulated bars */}
      <div className="w-full bg-primary/20 h-[80%] rounded-t"></div>
      <div className="w-full bg-primary/30 h-[70%] rounded-t"></div>
      <div className="w-full bg-primary/40 h-[65%] rounded-t"></div>
      <div className="w-full bg-primary/50 h-[60%] rounded-t"></div>
      <div className="w-full bg-primary/60 h-[50%] rounded-t"></div>
      <div className="w-full bg-tertiary/60 h-[45%] rounded-t"></div>
      <div className="w-full bg-error/60 h-[30%] rounded-t"></div>
      <div className="w-full bg-error/80 h-[20%] rounded-t"></div>
      <div className="w-full bg-error h-[10%] rounded-t"></div>
      <div className="w-full bg-error/80 h-[15%] rounded-t"></div>
      <div className="w-full bg-tertiary/60 h-[30%] rounded-t"></div>
      <div className="w-full bg-primary/40 h-[40%] rounded-t"></div>
      </div>
      <div className="flex justify-between w-full mt-2 font-data-mono text-[10px] text-outline">
      <span>Şimdi</span>
      <span>+6s</span>
      <span>+12s</span>
      <span>+24s</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
