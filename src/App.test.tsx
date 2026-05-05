import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act, render, screen, fireEvent } from '@testing-library/react';
import { useAppState } from '../src/hooks/useAppState';
import { loadState, saveState, clearState } from '../src/utils/storage';
import App from '../src/App';

// Helper to mock localStorage
function mockLocalStorage() {
  const store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
    removeItem: vi.fn((key: string) => { delete store[key]; }),
    clear: vi.fn(() => { Object.keys(store).forEach(k => delete store[k]); }),
    _store: store,
  };
}

describe('storage utils', () => {
  let storage: ReturnType<typeof mockLocalStorage>;

  beforeEach(() => {
    storage = mockLocalStorage();
    vi.stubGlobal('localStorage', storage);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should save and load state', () => {
    const state = {
      missions: [],
      currentScreen: 'dashboard',
      searchQuery: '',
    } as any;
    saveState(state);
    expect(storage.setItem).toHaveBeenCalled();
    const loaded = loadState();
    expect(loaded).toEqual(state);
  });

  it('should return null when no state saved', () => {
    expect(loadState()).toBeNull();
  });

  it('should clear state', () => {
    const state = { test: 'value' } as any;
    saveState(state);
    clearState();
    expect(storage.removeItem).toHaveBeenCalled();
  });
});

describe('useAppState', () => {
  let storage: ReturnType<typeof mockLocalStorage>;

  beforeEach(() => {
    storage = mockLocalStorage();
    vi.stubGlobal('localStorage', storage);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.currentScreen).toBe('dashboard');
    expect(result.current.state.missions.length).toBeGreaterThan(0);
    expect(result.current.state.teamMembers.length).toBeGreaterThan(0);
  });

  it('should navigate between screens', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('stats');
    });
    expect(result.current.state.currentScreen).toBe('stats');
  });

  it('should add a mission', () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.missions.length;
    act(() => {
      result.current.addMission({
        name: 'Test Mission',
        description: 'Test description',
        sector: 'Test Sector',
        status: 'beklemede',
        priority: 3,
        estimatedStart: new Date().toISOString(),
        estimatedDurationHours: 4,
        teamMembers: [],
        equipmentPacks: [],
        weatherWindows: [],
        checkpoints: [],
        riskFlags: [],
        briefingNotes: '',
      });
    });
    expect(result.current.state.missions.length).toBe(initialCount + 1);
    expect(result.current.state.missions[0].name).toBe('Test Mission');
  });

  it('should delete a mission', () => {
    const { result } = renderHook(() => useAppState());
    const initialCount = result.current.state.missions.length;
    const missionId = result.current.state.missions[0].id;
    act(() => {
      result.current.deleteMission(missionId);
    });
    expect(result.current.state.missions.length).toBe(initialCount - 1);
  });

  it('should update search query', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSearchQuery('test');
    });
    expect(result.current.state.searchQuery).toBe('test');
  });

  it('should update settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateSettings({ theme: 'light' });
    });
    expect(result.current.state.settings.theme).toBe('light');
  });

  it('should update user profile', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateUserProfile({ name: 'Yeni İsim' });
    });
    expect(result.current.state.userProfile.name).toBe('Yeni İsim');
  });

  it('should archive a mission', () => {
    const { result } = renderHook(() => useAppState());
    const missionId = result.current.state.missions[0].id;
    act(() => {
      result.current.archiveMission(missionId);
    });
    const mission = result.current.state.missions.find((m) => m.id === missionId);
    expect(mission?.status).toBe('arsivlendi');
  });

  it('should persist to localStorage', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.navigate('stats');
    });
    expect(storage.setItem).toHaveBeenCalled();
  });
});

describe('App component', () => {
  let storage: ReturnType<typeof mockLocalStorage>;

  beforeEach(() => {
    storage = mockLocalStorage();
    vi.stubGlobal('localStorage', storage);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should navigate back to mission-detail when canceling edit', () => {
    render(<App />);

    // Click first mission name to view detail (clicking text bubbles to button)
    const missionCard = screen.getByText(/Operasyon Kış Fırtınası/i);
    fireEvent.click(missionCard);

    // Click edit button
    const editButton = screen.getByRole('button', { name: /Düzenle/i });
    fireEvent.click(editButton);

    // Verify we are in edit mode
    expect(screen.getByText(/Operasyonu Düzenle/i)).toBeInTheDocument();

    // Click cancel
    const cancelButton = screen.getByRole('button', { name: /İptal/i });
    fireEvent.click(cancelButton);

    // Should be back on mission detail, not dashboard
    expect(screen.getByText(/Operasyon Kış Fırtınası/i)).toBeInTheDocument();
  });
});
