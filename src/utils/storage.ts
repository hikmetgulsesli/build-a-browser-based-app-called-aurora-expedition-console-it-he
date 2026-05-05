// Aurora Expedition Console — Storage Utilities

import { STORAGE_KEY, type AppState } from '../types/domain';

export function loadState(): AppState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AppState;
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
    return null;
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear localStorage:', e);
  }
}

export function exportState(state: AppState): string {
  return JSON.stringify(state, null, 2);
}
