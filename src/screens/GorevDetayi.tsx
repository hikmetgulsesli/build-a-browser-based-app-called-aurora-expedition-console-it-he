// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Görev Detayı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Mission, TeamMember, EquipmentPack, WeatherWindow, RouteCheckpoint, RiskFlag, ScreenName } from "../types/domain";

interface GorevDetayiProps {
  mission: Mission;
  teamMembers: TeamMember[];
  equipmentPacks: EquipmentPack[];
  weatherWindows: WeatherWindow[];
  routeCheckpoints: RouteCheckpoint[];
  riskFlags: RiskFlag[];
  onBack: () => void;
  onEdit: () => void;
  onArchive: () => void;
  onDelete: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export function GorevDetayi({
  mission,
  teamMembers,
  equipmentPacks,
  weatherWindows,
  routeCheckpoints,
  riskFlags,
  onBack,
  onEdit,
  onArchive,
  onDelete,
  onNavigate,
}: GorevDetayiProps) {
  const missionTeam = teamMembers.filter((t) => mission.teamMembers.includes(t.id));
  const missionEquip = equipmentPacks.filter((e) => mission.equipmentPacks.includes(e.id));
  const missionWeather = weatherWindows.filter((w) => mission.weatherWindows.includes(w.id));
  const missionCheckpoints = routeCheckpoints.filter((c) => mission.checkpoints.includes(c.id));
  const missionRisks = riskFlags.filter((r) => mission.riskFlags.includes(r.id));
  return (
    <>
      {/* Navigation Shell suppressed for Task-Focused sub-page (Mission Detail implies 'Back' navigation) */}
      {/* Top App Bar for Detay Screen */}
      <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-high/80 backdrop-blur-md border-b border-surface-container-highest">
      <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
      <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant transition-colors text-on-surface cursor-pointer" onClick={onBack} aria-label="Geri Dön">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>arrow_back</span>
      </button>
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">{mission.name}</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">ID: {mission.id} • Sektör: {mission.sector}</p>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 h-touch-target rounded bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface transition-colors font-body-sm text-body-sm cursor-pointer" onClick={onEdit}>
      <span className="material-symbols-outlined text-[18px]">edit</span>
                          Düzenle
                      </button>
      <button className="flex items-center gap-2 px-4 h-touch-target rounded bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface transition-colors font-body-sm text-body-sm cursor-pointer" onClick={() => alert('Paylaşım bağlantısı panoya kopyalandı!')}>
      <span className="material-symbols-outlined text-[18px]">share</span>
                          Paylaş
                      </button>
      <button className="flex items-center gap-2 px-4 h-touch-target rounded bg-surface border border-outline-variant hover:bg-surface-variant text-on-surface transition-colors font-body-sm text-body-sm cursor-pointer" onClick={onArchive}>
      <span className="material-symbols-outlined text-[18px]">archive</span>
                          Arşivle
                      </button>
      <button className="flex items-center gap-2 px-6 h-touch-target rounded bg-primary-container hover:bg-blue-700 text-on-primary-container transition-colors font-h3 text-h3 ml-2 focus:ring-2 focus:ring-primary-container focus:outline-none cursor-pointer" onClick={() => alert('Görev başlatıldı!')}>
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
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-caps text-label-caps border ${mission.status === 'aktif' ? 'bg-primary/20 text-primary border-primary/30' : mission.status === 'beklemede' ? 'bg-tertiary-container/20 text-tertiary border-tertiary/30' : mission.status === 'tamamlandi' ? 'bg-outline/20 text-outline border-outline/30' : 'bg-surface-bright text-on-surface border-outline/30'}`}>
                          {mission.status === 'aktif' ? 'AKTİF' : mission.status === 'beklemede' ? 'BEKLEMEDE' : mission.status === 'tamamlandi' ? 'TAMAMLANDI' : mission.status === 'arsivlendi' ? 'ARŞİVLENDİ' : 'İPTAL'}
                      </span>
      <span className="font-data-mono text-data-mono text-on-surface-variant">
                          Tahmini Başlangıç: {new Date(mission.estimatedStart).toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}Z
                      </span>
      </div>
      <div className="flex items-center gap-2 text-error">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      <span className="font-body-sm text-body-sm font-semibold">Risk: {missionRisks.length > 0 ? missionRisks[0].severity.toUpperCase() : 'DÜŞÜK'} ({missionRisks.length > 0 ? missionRisks[0].description : 'Aktif risk yok'})</span>
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
                              {mission.description}
                          </p>
      <div className="grid grid-cols-2 gap-4 border-t border-surface-container-highest pt-4">
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">SEKTÖR</span>
      <span className="font-data-mono text-data-mono text-on-surface">{mission.sector}</span>
      </div>
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">TAHMİNİ SÜRE</span>
      <span className="font-body-sm text-body-sm text-on-surface">{mission.estimatedDurationHours} saat</span>
      </div>
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">ÖNCELİK</span>
      <span className="font-body-sm text-body-sm text-on-surface">{mission.priority}/5</span>
      </div>
      <div>
      <span className="block font-label-caps text-label-caps text-outline mb-1">OLUŞTURMA</span>
      <span className="font-body-sm text-body-sm text-on-surface">{new Date(mission.createdAt).toLocaleDateString('tr-TR')}</span>
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
      <span className="font-body-sm text-body-sm text-outline">{missionTeam.length} Personel</span>
      </div>
      <div className="flex flex-col gap-4">
      {missionTeam.map((member) => (
      <div key={member.id} className="flex items-center gap-3 p-3 rounded bg-surface border border-surface-container-highest">
      <div className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-highest flex items-center justify-center">
        <span className="material-symbols-outlined text-on-surface text-[18px]">person</span>
      </div>
      <div className="flex-1">
      <h3 className="font-h3 text-h3 text-on-surface">{member.name}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{member.specialty}</p>
      </div>
      <span className={`material-symbols-outlined ${member.isAvailable ? 'text-primary' : 'text-outline'}`} title={member.isAvailable ? 'Müsait' : 'Müsait Değil'}>{member.isAvailable ? 'medical_services' : 'pending'}</span>
      </div>
      ))}
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
      <span className="font-h1 text-h1">{missionWeather[0] ? `${missionWeather[0].temperatureC}°C` : 'N/A'}</span>
      <span className="material-symbols-outlined mb-1">arrow_downward</span>
      </div>
      </div>
      <div className="p-4 rounded bg-surface border border-surface-container-highest">
      <span className="block font-label-caps text-label-caps text-outline mb-2">RÜZGAR HIZI</span>
      <div className="flex items-end gap-2 text-tertiary">
      <span className="font-h1 text-h1">{missionWeather[0] ? `${missionWeather[0].windSpeedKmh} km/s` : 'N/A'}</span>
      <span className="material-symbols-outlined mb-1">air</span>
      </div>
      </div>
      <div className="p-4 rounded bg-surface border border-surface-container-highest">
      <span className="block font-label-caps text-label-caps text-outline mb-2">GÖRÜŞ MESAFESİ</span>
      <div className="flex items-end gap-2 text-primary">
      <span className="font-h1 text-h1">{missionWeather[0] ? `${missionWeather[0].visibilityKm} km` : 'N/A'}</span>
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
