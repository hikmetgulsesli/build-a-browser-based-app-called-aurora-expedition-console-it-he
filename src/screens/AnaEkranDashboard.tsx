// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Ekran - Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Mission, TeamMember, EquipmentPack, WeatherWindow, RiskFlag, Notification, ScreenName } from "../types/domain";

interface AnaEkranDashboardProps {
  missions: Mission[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (screen: ScreenName) => void;
  onMissionSelect: (id: string) => void;
  onNewMission: () => void;
  teamMembers: TeamMember[];
  equipmentPacks: EquipmentPack[];
  weatherWindows: WeatherWindow[];
  riskFlags: RiskFlag[];
  notifications: Notification[];
  onMarkNotificationRead: (id: string) => void;
  onClearNotifications: () => void;
}

export function AnaEkranDashboard({
  missions,
  searchQuery,
  onSearchChange,
  onNavigate,
  onMissionSelect,
  onNewMission,
  teamMembers,
  equipmentPacks,
  weatherWindows,
  riskFlags,
  notifications,
  onMarkNotificationRead,
  onClearNotifications,
}: AnaEkranDashboardProps) {
  const [activeFilter, setActiveFilter] = useState<'tumu' | 'planlanan' | 'devam' | 'tamamlandi'>('tumu');

  const filtered = missions.filter((m) => {
    if (activeFilter === 'tumu') return true;
    if (activeFilter === 'planlanan') return m.status === 'beklemede';
    if (activeFilter === 'devam') return m.status === 'aktif';
    if (activeFilter === 'tamamlandi') return m.status === 'tamamlandi';
    return true;
  });

  const activeMissions = missions.filter((m) => m.status === 'aktif');
  const pendingMissions = missions.filter((m) => m.status === 'beklemede');
  const completedMissions = missions.filter((m) => m.status === 'tamamlandi');

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
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150 hover:bg-slate-800/50 hover:text-white cursor-pointer" onClick={() => onNavigate('dashboard')}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
      <span className="font-medium">Ana Ekran</span>
      </a>
      {/* Inactive Tab: İstatistikler */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] duration-150 cursor-pointer" onClick={() => onNavigate('stats')}>
      <span className="material-symbols-outlined">leaderboard</span>
      <span className="font-medium">İstatistikler</span>
      </a>
      {/* Inactive Tab: Ayarlar */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors active:scale-[0.98] duration-150 cursor-pointer" onClick={() => onNavigate('settings')}>
      <span className="material-symbols-outlined">settings</span>
      <span className="font-medium">Ayarlar</span>
      </a>
      </nav>
      <div className="px-4 mt-auto">
      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white h-touch-target rounded-md font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer" onClick={onNewMission}>
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
      <input className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 pl-10 pr-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors h-[36px]" placeholder="Görev veya personel ara..." type="text" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 border-l border-slate-800 pl-6">
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full hover:bg-slate-800" onClick={() => onNavigate('profile')} aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      {notifications.length > 0 && (
        <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full" />
      )}
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 p-2 rounded-full hover:bg-slate-800" onClick={() => onNavigate('profile')} aria-label="Profil">
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
      <button className={`h-[36px] px-md rounded-DEFAULT font-body-sm text-body-sm border border-outline/30 flex items-center gap-2 transition-colors ${activeFilter === 'tumu' ? 'bg-surface-container-high text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container'}`} onClick={() => setActiveFilter('tumu')}>
      <span className="w-2 h-2 rounded-full bg-primary"></span>
                              Tümü ({missions.length})
                          </button>
      <button className={`h-[36px] px-md rounded-DEFAULT font-body-sm text-body-sm border border-outline/30 flex items-center gap-2 transition-colors ${activeFilter === 'planlanan' ? 'bg-surface-container-high text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container'}`} onClick={() => setActiveFilter('planlanan')}>
      <span className="w-2 h-2 rounded-full bg-surface-variant"></span>
                              Planlanan ({pendingMissions.length})
                          </button>
      <button className={`h-[36px] px-md rounded-DEFAULT font-body-sm text-body-sm border border-outline/30 flex items-center gap-2 transition-colors ${activeFilter === 'devam' ? 'bg-surface-container-high text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container'}`} onClick={() => setActiveFilter('devam')}>
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                              Devam Eden ({activeMissions.length})
                          </button>
      <button className={`h-[36px] px-md rounded-DEFAULT font-body-sm text-body-sm border border-outline/30 flex items-center gap-2 transition-colors ${activeFilter === 'tamamlandi' ? 'bg-surface-container-high text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container'}`} onClick={() => setActiveFilter('tamamlandi')}>
      <span className="w-2 h-2 rounded-full bg-outline"></span>
                              Tamamlanan ({completedMissions.length})
                          </button>
      </div>
      </div>
      {/* Mission Cards Grid (Bento Style approach) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
      {filtered.length === 0 ? (
        <div className="xl:col-span-3 bg-surface-container-high rounded-lg border border-outline-variant p-xl flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-[48px] text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>explore</span>
          <h2 className="font-h2 text-h2 text-on-surface mb-2">Henüz Görev Planlanmadı</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6 max-w-sm">Kutup keşiflerinizi başlatmak için ilk görevinizi planlayın.</p>
          <button className="h-touch-target px-8 bg-primary-container text-on-primary-container font-h3 text-h3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container/90 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-primary-container focus-visible:outline-none shadow-lg shadow-primary-container/20 cursor-pointer" onClick={onNewMission}>
            <span className="material-symbols-outlined text-[20px]">add</span>
            İlk Görevi Oluştur
          </button>
        </div>
      ) : (
        filtered.map((mission, idx) => {
          const missionTeam = teamMembers.filter((t) => mission.teamMembers.includes(t.id));
          const missionEquip = equipmentPacks.filter((e) => mission.equipmentPacks.includes(e.id));
          const missionWeather = weatherWindows.filter((w) => mission.weatherWindows.includes(w.id));
          const missionRisks = riskFlags.filter((r) => mission.riskFlags.includes(r.id));
          const isLarge = idx === 0 && mission.status === 'aktif';

          return (
            <div key={mission.id} className={`bg-surface-container-high rounded-lg border border-outline-variant overflow-hidden flex flex-col relative hover:border-outline transition-colors ${isLarge ? 'xl:col-span-2' : ''}`}>
              <div className={`p-md border-b border-outline-variant/50 flex justify-between items-center relative z-10 ${isLarge ? 'bg-surface-container-highest/50 backdrop-blur-sm' : ''}`}>
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-primary text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>explore</span>
                  <div>
                    <h2 className="font-h2 text-h2 text-on-surface">{mission.name}</h2>
                    <p className="font-data-mono text-data-mono text-on-surface-variant text-[12px] mt-1">{mission.sector}</p>
                  </div>
                </div>
                <div className={`h-[24px] px-sm rounded flex items-center justify-center font-label-caps text-label-caps border ${mission.status === 'aktif' ? 'bg-primary/20 text-primary border-primary/30' : mission.status === 'beklemede' ? 'bg-surface-bright text-on-surface border-outline/30' : mission.status === 'tamamlandi' ? 'bg-outline/20 text-outline border-outline/30' : 'bg-tertiary/20 text-tertiary border-tertiary/30'}`}>
                  {mission.status === 'aktif' ? 'DEVAM EDEN' : mission.status === 'beklemede' ? 'BEKLEMEDE' : mission.status === 'tamamlandi' ? 'TAMAMLANDI' : mission.status === 'arsivlendi' ? 'ARŞİVLENDI' : 'IPTAL'}
                </div>
              </div>
              <div className={`p-md flex-1 flex flex-col gap-gutter relative z-10 ${isLarge ? 'grid grid-cols-1 md:grid-cols-2 gap-gutter' : ''}`}>
                <div className="bg-surface-container rounded p-md border border-outline/10">
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Takım Durumu</h3>
                  <div className="space-y-4">
                    {missionTeam.slice(0, 2).map((member) => (
                      <div key={member.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-surface text-[16px]">person</span>
                          </div>
                          <div>
                            <div className="font-body-sm text-body-sm text-on-surface">{member.name}</div>
                            <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">{member.specialty}</div>
                          </div>
                        </div>
                        <span className={`material-symbols-outlined text-[18px] ${member.isAvailable ? 'text-primary' : 'text-outline'}`}>favorite</span>
                      </div>
                    ))}
                    {missionTeam.length > 2 && (
                      <div className="font-data-mono text-data-mono text-on-surface-variant text-[11px]">+{missionTeam.length - 2} personel daha</div>
                    )}
                  </div>
                </div>
                {isLarge ? (
                  <div className="bg-surface-container rounded p-md border border-outline/10 flex flex-col justify-between">
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Ortam Metrikleri</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-data-mono text-data-mono text-on-surface text-lg">
                            {missionWeather[0] ? `${missionWeather[0].temperatureC}°C` : 'N/A'}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Dış Sıcaklık</div>
                        </div>
                        <div>
                          <div className="font-data-mono text-data-mono text-on-surface text-lg">
                            {missionWeather[0] ? `${missionWeather[0].windSpeedKmh} km/s` : 'N/A'}
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Rüzgar (K)</div>
                        </div>
                      </div>
                    </div>
                    {missionRisks.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-outline/10 flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">ac_unit</span>
                        <div className="font-body-sm text-body-sm text-secondary">{missionRisks[0].description}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center justify-between text-sm border-b border-outline/10 pb-2">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Başlangıç:</span>
                      <span className="font-data-mono text-data-mono text-on-surface">{new Date(mission.estimatedStart).toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}Z</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">group</span> Ekip:
                      </span>
                      <span className="font-data-mono text-data-mono text-on-surface">{missionTeam.length} Personel</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">inventory</span> Ekipman:
                      </span>
                      <span className="font-data-mono text-data-mono text-secondary">{missionEquip.length > 0 ? 'Hazır' : 'Hazırlanıyor'}</span>
                    </div>
                  </div>
                )}
                <div className="mt-auto">
                  <button className="w-full bg-surface-container text-on-surface border border-outline-variant h-[36px] rounded font-body-sm text-body-sm hover:bg-surface-bright transition-colors cursor-pointer" onClick={() => onMissionSelect(mission.id)}>
                    Detayları İncele
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
      </div>
      </main>
      </div>
    </>
  );
}
