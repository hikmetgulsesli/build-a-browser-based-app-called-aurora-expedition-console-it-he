// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sistem Hatası
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { ScreenName } from "../types/domain";

interface SistemHatasiProps {
  onRetry: () => void;
  onClearData: () => void;
  onNavigate: (screen: ScreenName) => void;
}

export function SistemHatasi({
  onRetry,
  onClearData,
  onNavigate,
}: SistemHatasiProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-margin">
      <main className="w-full max-w-[480px]">
      {/* Ambient Glow behind card for subtle depth */}
      <div className="relative">
      <div aria-hidden={true} className="absolute -inset-0.5 bg-error/10 blur-xl rounded-xl"></div>
      <div className="relative bg-surface-container-high border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
      {/* Error Icon */}
      <div className="mb-margin h-20 w-20 rounded-full bg-error-container/20 flex items-center justify-center border border-error-container">
      <span className="material-symbols-outlined text-error text-[40px]" style={{fontVariationSettings: "'FILL' 1"}}>
                              cloud_off
                          </span>
      </div>
      {/* Text Content */}
      <h1 className="font-h1 text-h1 text-on-surface mb-sm">
                          Veri Yüklenemedi
                      </h1>
      <p className="font-body-base text-body-base text-on-surface-variant mb-xl max-w-[320px]">
                          Lokal depolama erişiminde bir hata oluştu veya bağlantı kesildi.
                      </p>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-gutter w-full">
      <button className="flex-1 min-h-touch-target px-md py-sm rounded-lg border border-outline-variant bg-transparent text-on-surface font-body-base text-body-base hover:bg-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high transition-all cursor-pointer" type="button" onClick={onClearData}>
                              Verileri Temizle
                          </button>
      <button className="flex-1 min-h-touch-target px-md py-sm rounded-lg border border-transparent bg-primary-container text-on-primary-container font-body-base text-body-base hover:bg-primary-container/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high transition-all flex items-center justify-center gap-xs cursor-pointer" type="button" onClick={onRetry}>
      <span className="material-symbols-outlined text-[18px]">refresh</span>
                              Tekrar Dene
                          </button>
      </div>
      {/* System Status Indicator (Optional decorative element reinforcing operational precision) */}
      <div className="mt-lg pt-lg border-t border-outline-variant w-full flex items-center justify-center gap-xs text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">terminal</span>
      <span className="font-data-mono text-data-mono text-[12px] opacity-70">ERR_STORAGE_FAULT_0x8B</span>
      </div>
      </div>
      </div>
      </main>
    </div>
  );
}
