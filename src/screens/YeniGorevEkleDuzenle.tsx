// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Yeni Görev Ekle / Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Mission, TeamMember, EquipmentPack, WeatherWindow, RouteCheckpoint, ScreenName } from "../types/domain";

interface YeniGorevEkleDuzenleProps {
  mode: 'new' | 'edit';
  mission?: Mission;
  teamMembers: TeamMember[];
  equipmentPacks: EquipmentPack[];
  weatherWindows: WeatherWindow[];
  routeCheckpoints: RouteCheckpoint[];
  onSave: (mission: Omit<Mission, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export function YeniGorevEkleDuzenle({
  mode,
  teamMembers,
  equipmentPacks,
  weatherWindows,
  routeCheckpoints,
  onSave,
  onCancel,
}: YeniGorevEkleDuzenleProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');
  const [priority, setPriority] = useState(3);
  const [estimatedStart, setEstimatedStart] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState(4);
  const [selectedTeam, setSelectedTeam] = useState<string[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedWeather, setSelectedWeather] = useState<string[]>([]);
  const [selectedCheckpoints, setSelectedCheckpoints] = useState<string[]>([]);
  const [briefingNotes, setBriefingNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleSelection = (id: string, current: string[], setter: (v: string[]) => void) => {
    if (current.includes(id)) {
      setter(current.filter((x) => x !== id));
    } else {
      setter([...current, id]);
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = 'Görev adı gereklidir';
    if (!sector.trim()) nextErrors.sector = 'Sektör gereklidir';
    if (!estimatedStart) nextErrors.estimatedStart = 'Başlangıç zamanı gereklidir';
    if (selectedTeam.length === 0) nextErrors.team = 'En az bir ekip üyesi seçin';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      name,
      description,
      sector,
      status: 'beklemede',
      priority,
      estimatedStart,
      estimatedDurationHours: estimatedDuration,
      teamMembers: selectedTeam,
      equipmentPacks: selectedEquipment,
      weatherWindows: selectedWeather,
      checkpoints: selectedCheckpoints,
      riskFlags: [],
      briefingNotes,
    });
  };

  return (
    <>
      {/* Semantic Shell Suppression Context: 
            This is a highly focused transactional page (Creating a new operation). 
            According to the mandate, global navigation (TopAppBar, SideNavBar) is suppressed 
            to prioritize the form canvas and reduce cognitive load. 
            A simple contextual header is used instead. */}
      {/* Task Header */}
      <header className="sticky top-0 z-40 bg-surface-dim/90 backdrop-blur-md border-b border-outline-variant px-lg py-md flex items-center justify-between">
      <div className="flex items-center gap-md">
      <button aria-label="Geri Dön" className="flex items-center justify-center w-touch-target h-touch-target rounded-full hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer" type="button" onClick={onCancel}>
      <span className="material-symbols-outlined text-[24px]">arrow_back</span>
      </button>
      <div>
      <div className="flex items-center gap-sm">
      <h1 className="font-h2 text-h2 text-on-surface">{mode === 'new' ? 'Yeni Operasyon Planı' : 'Operasyonu Düzenle'}</h1>
      <span className="bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">Taslak</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Operasyonel parametreleri ve ekip tahsisini tanımlayın.</p>
      </div>
      </div>
      <div className="hidden sm:flex items-center gap-sm font-data-mono text-data-mono text-on-surface-variant">
      <span className="material-symbols-outlined text-[18px]">schedule</span>
      <span>SYS_TIME: {new Date().toISOString().split('T')[1].split('.')[0]}Z</span>
      </div>
      </header>
      {/* Main Form Canvas */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-lg pb-xl flex flex-col gap-lg">
      <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
      {/* Section 1: Temel Bilgiler */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
      <h2 className="font-h3 text-h3 text-on-surface">Temel Bilgiler</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="flex flex-col gap-xs col-span-1 md:col-span-2">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="mission_name">Görev Adı <span className="text-error">*</span></label>
      <div className="relative">
      <input className={`form-input-base w-full bg-surface-container border rounded-md py-2 px-3 text-on-surface focus:outline-none focus:ring-1 transition-colors ${errors.name ? 'border-error focus:border-error focus:ring-error text-error pr-10' : 'border-outline-variant focus:border-primary-container focus:ring-primary-container'}`} id="mission_name" name="mission_name" placeholder="Örn: Kuzey Kutbu İkmal Hattı" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-error text-[20px]">error</span>}
      </div>
      {errors.name && <p className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">{errors.name}</p>}
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="sector">Sektör <span className="text-error">*</span></label>
      <input className={`form-input-base w-full bg-surface-container border rounded-md py-2 px-3 text-on-surface focus:outline-none focus:ring-1 transition-colors ${errors.sector ? 'border-error focus:border-error focus:ring-error' : 'border-outline-variant focus:border-primary-container focus:ring-primary-container'}`} id="sector" name="sector" placeholder="Örn: 4B Kuzey" type="text" value={sector} onChange={(e) => setSector(e.target.value)} />
      {errors.sector && <p className="font-body-sm text-body-sm text-error mt-1">{errors.sector}</p>}
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="priority">Öncelik (1-5)</label>
      <input className="form-input-base w-full bg-surface-container border border-outline-variant rounded-md py-2 px-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="priority" name="priority" type="number" min={1} max={5} value={priority} onChange={(e) => setPriority(Number(e.target.value))} />
      </div>
      <div className="flex flex-col gap-xs col-span-1 md:col-span-2">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="description">Açıklama</label>
      <textarea className="form-input-base w-full bg-surface-container border border-outline-variant rounded-md py-2 px-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors min-h-[100px] resize-y" id="description" name="description" placeholder="Görevin detaylı açıklamasını girin..." value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      </div>
      </section>
      {/* Section 2: Zaman ve Süre */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>schedule</span>
      <h2 className="font-h3 text-h3 text-on-surface">Zaman ve Süre</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="start_time">Tahmini Başlangıç <span className="text-error">*</span></label>
      <input className={`form-input-base w-full bg-surface-container border rounded-md py-2 px-3 text-on-surface focus:outline-none focus:ring-1 transition-colors ${errors.estimatedStart ? 'border-error focus:border-error focus:ring-error' : 'border-outline-variant focus:border-primary-container focus:ring-primary-container'}`} id="start_time" name="start_time" type="datetime-local" value={estimatedStart} onChange={(e) => setEstimatedStart(e.target.value)} />
      {errors.estimatedStart && <p className="font-body-sm text-body-sm text-error mt-1">{errors.estimatedStart}</p>}
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="duration">Tahmini Süre (saat)</label>
      <input className="form-input-base w-full bg-surface-container border border-outline-variant rounded-md py-2 px-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="duration" name="duration" type="number" min={1} max={48} value={estimatedDuration} onChange={(e) => setEstimatedDuration(Number(e.target.value))} />
      </div>
      </div>
      </section>
      {/* Section 3: Ekip Seçimi */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
      <h2 className="font-h3 text-h3 text-on-surface">Saha Ekibi <span className="text-error">*</span></h2>
      </div>
      {errors.team && <p className="font-body-sm text-body-sm text-error">{errors.team}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {teamMembers.map((member) => (
        <div key={member.id} className={`p-md rounded-lg border cursor-pointer transition-colors ${selectedTeam.includes(member.id) ? 'border-primary-container bg-primary-container/10' : 'border-outline-variant hover:border-outline'}`} onClick={() => toggleSelection(member.id, selectedTeam, setSelectedTeam)}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[18px]">person</span>
            </div>
            <div>
              <h4 className="font-h3 text-h3 text-on-surface">{member.name}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{member.specialty}</p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-caps text-label-caps text-[10px] border ${member.isAvailable ? 'bg-primary/20 text-primary border-primary/30' : 'bg-outline/20 text-outline border-outline/30'}`}>
              {member.isAvailable ? 'Müsait' : 'Müsait Değil'}
            </span>
          </div>
        </div>
      ))}
      </div>
      </section>
      {/* Section 4: Ekipman Seçimi */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>inventory</span>
      <h2 className="font-h3 text-h3 text-on-surface">Ekipman</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {equipmentPacks.map((eq) => (
        <div key={eq.id} className={`p-md rounded-lg border cursor-pointer transition-colors ${selectedEquipment.includes(eq.id) ? 'border-primary-container bg-primary-container/10' : 'border-outline-variant hover:border-outline'}`} onClick={() => toggleSelection(eq.id, selectedEquipment, setSelectedEquipment)}>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-h3 text-h3 text-on-surface">{eq.name}</h4>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-caps text-label-caps text-[10px] border ${eq.condition === 'mukemmel' ? 'bg-primary/20 text-primary border-primary/30' : eq.condition === 'iyi' ? 'bg-tertiary/20 text-tertiary border-tertiary/30' : 'bg-error/20 text-error border-error/30'}`}>
              {eq.condition === 'mukemmel' ? 'Mükemmel' : eq.condition === 'iyi' ? 'İyi' : 'Yetersiz'}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{eq.category} • {eq.weightKg} kg</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{eq.isAssigned ? 'Atanmış' : 'Müsait'}</p>
        </div>
      ))}
      </div>
      </section>
      {/* Section 5: Hava Penceresi */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>cloud</span>
      <h2 className="font-h3 text-h3 text-on-surface">Hava Penceresi</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {weatherWindows.map((wx) => (
        <div key={wx.id} className={`p-md rounded-lg border cursor-pointer transition-colors ${selectedWeather.includes(wx.id) ? 'border-primary-container bg-primary-container/10' : 'border-outline-variant hover:border-outline'}`} onClick={() => toggleSelection(wx.id, selectedWeather, setSelectedWeather)}>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-h3 text-h3 text-on-surface">{new Date(wx.startTime).toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}Z - {new Date(wx.endTime).toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'})}Z</h4>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-caps text-label-caps text-[10px] border ${wx.isUsable ? 'bg-primary/20 text-primary border-primary/30' : 'bg-error/20 text-error border-error/30'}`}>
              {wx.isUsable ? 'Uygun' : 'Riskli'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="font-data-mono text-data-mono text-on-surface">{wx.temperatureC}°C</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Sıcaklık</div>
            </div>
            <div>
              <div className="font-data-mono text-data-mono text-on-surface">{wx.windSpeedKmh}</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Rüzgar</div>
            </div>
            <div>
              <div className="font-data-mono text-data-mono text-on-surface">{wx.visibilityKm}km</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Görüş</div>
            </div>
          </div>
        </div>
      ))}
      </div>
      </section>
      {/* Section 6: Rota Noktaları */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>map</span>
      <h2 className="font-h3 text-h3 text-on-surface">Rota Noktaları</h2>
      </div>
      <div className="flex flex-col gap-md">
      {routeCheckpoints.map((cp) => (
        <div key={cp.id} className={`p-md rounded-lg border cursor-pointer transition-colors flex items-center gap-md ${selectedCheckpoints.includes(cp.id) ? 'border-primary-container bg-primary-container/10' : 'border-outline-variant hover:border-outline'}`} onClick={() => toggleSelection(cp.id, selectedCheckpoints, setSelectedCheckpoints)}>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
            <span className="font-data-mono text-data-mono text-on-surface text-sm">{cp.order}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-h3 text-h3 text-on-surface">{cp.name}</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{cp.coordinates} • {cp.estimatedDurationMin} dk</p>
          </div>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-caps text-label-caps text-[10px] border ${cp.riskLevel === 'dusuk' ? 'bg-primary/20 text-primary border-primary/30' : cp.riskLevel === 'orta' ? 'bg-tertiary/20 text-tertiary border-tertiary/30' : 'bg-error/20 text-error border-error/30'}`}>
            {cp.riskLevel === 'dusuk' ? 'Düşük' : cp.riskLevel === 'orta' ? 'Orta' : 'Yüksek'}
          </span>
        </div>
      ))}
      </div>
      </section>
      {/* Section 7: Brifing Notları */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>notes</span>
      <h2 className="font-h3 text-h3 text-on-surface">Brifing Notları</h2>
      </div>
      <textarea className="form-input-base w-full bg-surface-container border border-outline-variant rounded-md py-2 px-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors min-h-[120px] resize-y" placeholder="Operasyon brifing notlarını buraya ekleyin..." value={briefingNotes} onChange={(e) => setBriefingNotes(e.target.value)} />
      </section>
      {/* Form Actions */}
      <div className="flex items-center justify-end gap-md pt-lg border-t border-outline-variant">
      <button className="h-touch-target px-lg py-sm rounded-lg border border-outline-variant bg-transparent text-on-surface font-body-base text-body-base hover:bg-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-all cursor-pointer" type="button" onClick={onCancel}>
                          İptal
                      </button>
      <button className="h-touch-target px-lg py-sm rounded-lg border border-transparent bg-primary-container text-on-primary-container font-body-base text-body-base hover:bg-primary-container/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface transition-all flex items-center justify-center gap-xs cursor-pointer" type="submit">
      <span className="material-symbols-outlined text-[18px]">save</span>
                          Görevi Kaydet
                      </button>
      </div>
      </form>
      </main>
    </>
  );
}
