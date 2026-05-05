// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Kullanıcı Profili
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { UserProfile, ScreenName } from "../types/domain";

interface KullaniciProfiliProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNavigate: (screen: ScreenName) => void;
  onNewMission: () => void;
}

export function KullaniciProfili({
  profile,
  onUpdateProfile,
  onNavigate,
  onNewMission,
}: KullaniciProfiliProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [email, setEmail] = useState(profile.email);
  const [station, setStation] = useState(profile.station);
  const [role, setRole] = useState(profile.role);

  const handleSave = () => {
    onUpdateProfile({ name, title, email, station, role, avatarInitials: name.split(' ').map(n => n[0]).join('').toUpperCase() });
    setIsEditing(false);
  };

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
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('dashboard')}>
      <span className="material-symbols-outlined">dashboard</span>
      <span>Ana Ekran</span>
      </a>
      {/* Tab 1: İstatistikler (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 transition-colors hover:bg-slate-800/50 hover:text-white active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('stats')}>
      <span className="material-symbols-outlined">leaderboard</span>
      <span>İstatistikler</span>
      </a>
      {/* Tab 2: Ayarlar (Active - matching Profile/Settings context) */}
      {/* Executing style: style_active_navigation, style_interactions */}
      <a className="flex items-center gap-3 px-4 py-3 text-blue-400 bg-slate-800/50 border-r-2 border-blue-500 active:scale-[0.98] transition-transform duration-150 cursor-pointer" onClick={() => onNavigate('settings')}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-medium">Ayarlar</span>
      </a>
      </div>
      {/* Bottom CTA */}
      <div className="mt-auto px-6">
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded py-2.5 px-4 font-medium hover:bg-blue-700 transition-colors active:scale-[0.98] cursor-pointer" onClick={onNewMission}>
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Yeni Görev Ekle
                      </button>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col h-full overflow-hidden relative w-full bg-surface">
      {/* Top App Bar */}
      <header className="w-full sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
      <button className="md:hidden text-slate-400 hover:text-slate-100 transition-colors focus:outline-none">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-xl font-black text-slate-100 font-inter text-sm font-medium tracking-tight">Aurora Expedition Console</div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant" onClick={() => onNavigate('profile')} aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer active:opacity-80 h-10 w-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant" onClick={() => onNavigate('profile')} aria-label="Profil">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Profile Canvas */}
      <div className="flex-1 overflow-y-auto p-margin">
      <div className="max-w-3xl mx-auto">
      {/* Profile Header Card */}
      <div className="bg-surface-container rounded-lg border border-outline-variant p-xl mb-margin flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-h1 text-h1 shrink-0">
                          {profile.avatarInitials}
                      </div>
      {/* Info */}
      <div className="flex-1 text-center sm:text-left">
      <h1 className="font-h1 text-h1 text-on-surface mb-1">{profile.name}</h1>
      <p className="font-body-base text-body-base text-on-surface-variant mb-4">{profile.title}</p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant font-body-sm text-body-sm text-on-surface">
      <span className="material-symbols-outlined text-[14px]">location_on</span>
                                  {profile.station}
                              </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant font-body-sm text-body-sm text-on-surface">
      <span className="material-symbols-outlined text-[14px]">badge</span>
                                  {profile.role}
                              </span>
      </div>
      </div>
      <div className="flex flex-col gap-2 shrink-0">
      {!isEditing ? (
        <button className="h-touch-target px-4 bg-primary-container text-on-primary-container rounded font-body-sm text-body-sm hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-2 cursor-pointer" onClick={() => setIsEditing(true)}>
          <span className="material-symbols-outlined text-[18px]">edit</span>
          Profili Düzenle
        </button>
      ) : (
        <>
          <button className="h-touch-target px-4 bg-primary-container text-on-primary-container rounded font-body-sm text-body-sm hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-2 cursor-pointer" onClick={handleSave}>
            <span className="material-symbols-outlined text-[18px]">save</span>
            Kaydet
          </button>
          <button className="h-touch-target px-4 bg-surface border border-outline-variant text-on-surface rounded font-body-sm text-body-sm hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 cursor-pointer" onClick={() => setIsEditing(false)}>
            İptal
          </button>
        </>
      )}
      </div>
      </div>
      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="bg-surface-container rounded-lg border border-outline-variant p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">person</span>
                              Kişisel Bilgiler
                          </h2>
      <div className="flex flex-col gap-md">
      <div>
      <label className="font-body-sm text-body-sm text-on-surface-variant block mb-1">Ad Soyad</label>
      {isEditing ? (
        <input className="w-full bg-surface border border-outline-variant rounded px-3 py-2 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" value={name} onChange={(e) => setName(e.target.value)} />
      ) : (
        <p className="font-body-base text-body-base text-on-surface">{profile.name}</p>
      )}
      </div>
      <div>
      <label className="font-body-sm text-body-sm text-on-surface-variant block mb-1">E-posta</label>
      {isEditing ? (
        <input className="w-full bg-surface border border-outline-variant rounded px-3 py-2 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
      ) : (
        <p className="font-body-base text-body-base text-on-surface">{profile.email}</p>
      )}
      </div>
      <div>
      <label className="font-body-sm text-body-sm text-on-surface-variant block mb-1">Unvan</label>
      {isEditing ? (
        <input className="w-full bg-surface border border-outline-variant rounded px-3 py-2 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <p className="font-body-base text-body-base text-on-surface">{profile.title}</p>
      )}
      </div>
      </div>
      </div>
      <div className="bg-surface-container rounded-lg border border-outline-variant p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">corporate_fare</span>
                              İstasyon Bilgileri
                          </h2>
      <div className="flex flex-col gap-md">
      <div>
      <label className="font-body-sm text-body-sm text-on-surface-variant block mb-1">İstasyon</label>
      {isEditing ? (
        <input className="w-full bg-surface border border-outline-variant rounded px-3 py-2 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" value={station} onChange={(e) => setStation(e.target.value)} />
      ) : (
        <p className="font-body-base text-body-base text-on-surface">{profile.station}</p>
      )}
      </div>
      <div>
      <label className="font-body-sm text-body-sm text-on-surface-variant block mb-1">Rol</label>
      {isEditing ? (
        <input className="w-full bg-surface border border-outline-variant rounded px-3 py-2 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" value={role} onChange={(e) => setRole(e.target.value)} />
      ) : (
        <p className="font-body-base text-body-base text-on-surface">{profile.role}</p>
      )}
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
