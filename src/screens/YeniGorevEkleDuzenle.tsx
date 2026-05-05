// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Yeni Görev Ekle / Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface YeniGorevEkleDuzenleProps {}

export function YeniGorevEkleDuzenle(props: YeniGorevEkleDuzenleProps) {
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
      <button aria-label="Geri Dön" className="flex items-center justify-center w-touch-target h-touch-target rounded-full hover:bg-surface-container transition-colors text-on-surface-variant" type="button">
      <span className="material-symbols-outlined text-[24px]">arrow_back</span>
      </button>
      <div>
      <div className="flex items-center gap-sm">
      <h1 className="font-h2 text-h2 text-on-surface">Yeni Operasyon Planı</h1>
      <span className="bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">Taslak</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Operasyonel parametreleri ve ekip tahsisini tanımlayın.</p>
      </div>
      </div>
      <div className="hidden sm:flex items-center gap-sm font-data-mono text-data-mono text-on-surface-variant">
      <span className="material-symbols-outlined text-[18px]">schedule</span>
      <span>SYS_TIME: 14:42:09Z</span>
      </div>
      </header>
      {/* Main Form Canvas */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-lg pb-xl flex flex-col gap-lg">
      <form action="#" className="flex flex-col gap-lg" method="POST">
      {/* Section 1: Temel Bilgiler (Validation Error Example) */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
      <h2 className="font-h3 text-h3 text-on-surface">Temel Bilgiler</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Field with Validation Error */}
      <div className="flex flex-col gap-xs col-span-1 md:col-span-2">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="mission_name">Görev Adı <span className="text-error">*</span></label>
      <div className="relative">
      <input aria-invalid="true" className="form-input-base border-error focus:border-error focus:ring-error text-error pr-10" id="mission_name" name="mission_name" placeholder="Örn: Kuzey Kutbu İkmal Hattı" type="text" value="Buzul Yarığı Keşfi - Sektör 4" />
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-error text-[20px]">error</span>
      </div>
      <p className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">
                                  Görev adı sektörel standartlara uymalıdır (Örn: OP-KOD-001).
                              </p>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="start_date">Başlangıç Tarihi (Hedeflenen)</label>
      <div className="relative">
      <input className="form-input-base pl-10" id="start_date" name="start_date" type="date" value="2024-11-15" />
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">calendar_today</span>
      </div>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="priority">Operasyon Önceliği</label>
      <div className="relative">
      <select className="form-input-base appearance-none pl-10" id="priority" name="priority">
      <option value="low">Düşük (Rutin)</option>
      <option selected={true} value="normal">Normal (Planlı)</option>
      <option value="high">Yüksek (Kritik)</option>
      <option value="critical">Acil Durum</option>
      </select>
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">flag</span>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
      </div>
      </div>
      </div>
      </section>
      {/* Section 2: Ekip & Roller */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center justify-between border-b border-outline-variant pb-md">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
      <h2 className="font-h3 text-h3 text-on-surface">Ekip Yönetimi</h2>
      </div>
      <button className="h-8 px-3 rounded border border-outline-variant bg-surface-container text-on-surface font-body-sm text-body-sm flex items-center gap-1 hover:bg-surface-container-high transition-colors" type="button">
      <span className="material-symbols-outlined text-[16px]">add</span>
                              Personel Ekle
                          </button>
      </div>
      <div className="border border-outline-variant rounded bg-surface-container-lowest overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant">
      <th className="py-3 px-4 font-semibold w-12">#</th>
      <th className="py-3 px-4 font-semibold">Personel</th>
      <th className="py-3 px-4 font-semibold">Rol</th>
      <th className="py-3 px-4 font-semibold text-right">Aksiyon</th>
      </tr>
      </thead>
      <tbody className="font-body-base text-body-base text-on-surface">
      <tr className="border-b border-outline-variant hover:bg-surface-container/50 transition-colors">
      <td className="py-3 px-4 font-data-mono text-on-surface-variant">01</td>
      <td className="py-3 px-4 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">AE</div>
      <span>Dr. Ayşe Yılmaz</span>
      </td>
      <td className="py-3 px-4">
      <span className="inline-block px-2 py-1 bg-surface-container-high border border-outline-variant rounded text-xs">Görev Komutanı</span>
      </td>
      <td className="py-3 px-4 text-right">
      <button aria-label="Kaldır" className="text-outline hover:text-error transition-colors" type="button">
      <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container/50 transition-colors">
      <td className="py-3 px-4 font-data-mono text-on-surface-variant">02</td>
      <td className="py-3 px-4 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xs">BC</div>
      <span>Burak Demir</span>
      </td>
      <td className="py-3 px-4">
      <span className="inline-block px-2 py-1 bg-surface-container-high border border-outline-variant rounded text-xs">Buzul Uzmanı</span>
      </td>
      <td className="py-3 px-4 text-right">
      <button aria-label="Kaldır" className="text-outline hover:text-error transition-colors" type="button">
      <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      {/* Section 3: Teçhizat & Hava Durumu */}
      <section className="bg-surface border border-outline-variant rounded-lg p-lg flex flex-col gap-lg shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>severe_cold</span>
      <h2 className="font-h3 text-h3 text-on-surface">Lojistik &amp; Çevre</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      {/* Weather Window */}
      <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
      <h3 className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Hava Penceresi (Tahmini)</h3>
      <p className="font-body-sm text-body-sm text-outline mb-2">Operasyon için güvenli meteorolojik aralık.</p>
      </div>
      <div className="flex gap-md">
      <div className="flex-1 flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="window_start">Açılış</label>
      <input className="form-input-base text-sm" id="window_start" name="window_start" type="datetime-local" />
      </div>
      <div className="flex-1 flex flex-col gap-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="window_end">Kapanış</label>
      <input className="form-input-base text-sm" id="window_end" name="window_end" type="datetime-local" />
      </div>
      </div>
      <div className="bg-surface-container-low border border-outline-variant rounded p-3 flex gap-3 items-start mt-2">
      <span className="material-symbols-outlined text-tertiary text-[20px]">warning</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Seçilen tarihlerde bölgede 40km/s rüzgar ve hafif kar yağışı öngörülmektedir.</p>
      </div>
      </div>
      {/* Equipment Packs */}
      <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
      <h3 className="font-body-sm text-body-sm text-on-surface-variant font-semibold">Teçhizat Paketleri</h3>
      <p className="font-body-sm text-body-sm text-outline mb-2">Görev tipine uygun standart yükleri seçin.</p>
      </div>
      <div className="flex flex-col gap-3">
      <label className="flex items-center p-3 rounded border border-primary bg-primary/10 cursor-pointer transition-colors">
      <input checked={true} className="w-5 h-5 rounded border-outline-variant text-primary-container bg-surface-container-lowest focus:ring-primary-container focus:ring-offset-surface mr-3" name="equipment" type="checkbox" value="polar_survival" />
      <div className="flex-1">
      <span className="block font-body-base text-on-surface font-medium">Kutup Hayatta Kalma Kiti (Seviye 2)</span>
      <span className="block font-body-sm text-outline">Termal çadır, acil durum rasyonları, flare.</span>
      </div>
      </label>
      <label className="flex items-center p-3 rounded border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
      <input className="w-5 h-5 rounded border-outline-variant text-primary-container bg-surface-container-lowest focus:ring-primary-container focus:ring-offset-surface mr-3" name="equipment" type="checkbox" value="heavy_comms" />
      <div className="flex-1">
      <span className="block font-body-base text-on-surface font-medium">Ağır İletişim Modülü</span>
      <span className="block font-body-sm text-outline">Uydu terminali, yedek batarya bankası.</span>
      </div>
      </label>
      <label className="flex items-center p-3 rounded border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
      <input className="w-5 h-5 rounded border-outline-variant text-primary-container bg-surface-container-lowest focus:ring-primary-container focus:ring-offset-surface mr-3" name="equipment" type="checkbox" value="scientific" />
      <div className="flex-1">
      <span className="block font-body-base text-on-surface font-medium">Buzul Örnekleme Seti</span>
      <span className="block font-body-sm text-outline">Derin sondaj ekipmanı, soğuk zincir kapları.</span>
      </div>
      </label>
      </div>
      </div>
      </div>
      </section>
      {/* Section 4: Rota & Kontrol Noktaları */}
      <section className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-sm">
      <div className="flex items-center gap-sm border-b border-outline-variant p-lg pb-md">
      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>route</span>
      <h2 className="font-h3 text-h3 text-on-surface">Navigasyon &amp; Rota</h2>
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
      {/* Checkpoints List */}
      <div className="w-full md:w-1/2 p-lg flex flex-col gap-md border-b md:border-b-0 md:border-r border-outline-variant overflow-y-auto bg-surface-container-lowest">
      <div className="flex justify-between items-center">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Planlanan Noktalar</h3>
      <button className="text-primary-container hover:text-primary transition-colors font-label-caps text-label-caps font-bold" type="button">NOKTA EKLE</button>
      </div>
      <div className="relative flex flex-col gap-4 pl-4 border-l-2 border-surface-container-high mt-2">
      {/* Point 1 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary-container border-2 border-surface-container-lowest"></div>
      <div className="bg-surface border border-outline-variant rounded p-3">
      <div className="flex justify-between items-start mb-1">
      <span className="font-body-base font-semibold text-on-surface">Ana Üs Çıkış</span>
      <span className="font-data-mono text-xs text-outline">WP-01</span>
      </div>
      <div className="font-data-mono text-xs text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">location_on</span>
                                              78°13'N 15°38'E
                                          </div>
      </div>
      </div>
      {/* Point 2 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-outline-variant bg-surface-container-lowest"></div>
      <div className="bg-surface border border-outline-variant rounded p-3">
      <div className="flex justify-between items-start mb-1">
      <span className="font-body-base font-semibold text-on-surface">Buzul Geçidi</span>
      <span className="font-data-mono text-xs text-outline">WP-02</span>
      </div>
      <div className="font-data-mono text-xs text-on-surface-variant flex items-center gap-1 mb-2">
      <span className="material-symbols-outlined text-[14px]">location_on</span>
                                              78°15'N 15°42'E
                                          </div>
      <p className="font-body-sm text-xs text-outline">Derin çatlak riski. Güvenlik halatları zorunlu.</p>
      </div>
      </div>
      {/* Point 3 */}
      <div className="relative">
      <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-outline-variant bg-surface-container-lowest"></div>
      <div className="bg-surface-container-low border border-dashed border-outline-variant rounded p-3 flex items-center justify-center cursor-pointer hover:bg-surface-container transition-colors text-outline">
                                          Hedef Noktası Belirle...
                                      </div>
      </div>
      </div>
      </div>
      {/* Map Preview Area */}
      <div className="w-full md:w-1/2 relative bg-surface-container-lowest">
      {/* Abstract topographical map image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen" data-alt="A highly technical, dark-mode topographical map interface. The map displays intricate contour lines indicating varied elevation, overlaid with stark blue neon vector paths representing mission routes. The background is a deep, impenetrable navy black, while the data overlays pulse with sharp, minimalist corporate precision. Grid lines and faint operational coordinates emphasize a high-stakes, polar mission control aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCT-IKEXQjxs2CQxq2dd9I5kKr2cZDXApq4R4s1Fg64-P_i8nOwckhZ1-EjI7q8EgW59_wpbzcIRzy_hfRM6szqyK_nDFheDbOqxAWZNzHtcAoCVy_d1DrFO8oHkq8Dfqcm_ufdwZdB0T3CkQ2GRQY-1jXAgRBdGzJQR4ve9J1ksMDsuTtOhpQs-QxBWmDxIwqoVhJL92sVcySFR0qsM977-F8s8Ht5wE8NJm2fUc89s8AW6v4LjrAYdx1XApkb-AlB7qKB23sNGA0g')"}}>
      </div>
      {/* Map Overlay UI */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
      <button className="w-10 h-10 rounded bg-surface border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors shadow-lg" type="button">
      <span className="material-symbols-outlined text-[20px]">add</span>
      </button>
      <button className="w-10 h-10 rounded bg-surface border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors shadow-lg" type="button">
      <span className="material-symbols-outlined text-[20px]">remove</span>
      </button>
      <button className="w-10 h-10 rounded bg-surface border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors shadow-lg mt-2" type="button">
      <span className="material-symbols-outlined text-[20px]">my_location</span>
      </button>
      </div>
      <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md border border-outline-variant px-3 py-2 rounded shadow-lg font-data-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                                  Sistem Çevrimiçi • Radar Aktif
                              </div>
      </div>
      </div>
      </section>
      {/* Form Actions */}
      <div className="flex items-center justify-end gap-md pt-lg border-t border-outline-variant mt-md">
      <button className="bg-transparent border border-outline-variant text-on-surface h-touch-target px-xl rounded font-body-base font-medium flex items-center justify-center hover:bg-surface-container transition-colors min-w-[120px]" type="button">
                          İptal
                      </button>
      <button className="bg-primary-container text-on-primary-container h-touch-target px-xl rounded font-body-base font-medium flex items-center justify-center gap-2 hover:bg-inverse-primary transition-colors min-w-[160px] shadow-sm" type="submit">
      <span className="material-symbols-outlined text-[20px]">save</span>
                          Görevi Kaydet
                      </button>
      </div>
      </form>
      </main>
    </>
  );
}
