// Aurora Expedition Console — Global App State Hook

import { useState, useCallback, useEffect, useRef } from 'react';
import {
  type AppState,
  type ScreenName,
  type Mission,
  type TeamMember,
  type EquipmentPack,
  type WeatherWindow,
  type RouteCheckpoint,
  type RiskFlag,
  type Notification,
} from '../types/domain';
import { loadState, saveState } from '../utils/storage';

// Realistic demo data
const demoTeamMembers: TeamMember[] = [
  { id: 'tm-1', name: 'Elif Yılmaz', role: 'ekip_lideri', specialty: 'Kutup Biyolojisi', experienceYears: 8, isAvailable: true },
  { id: 'tm-2', name: 'Ahmet Kaya', role: 'muhendis', specialty: 'Buzul Mühendisliği', experienceYears: 12, isAvailable: true },
  { id: 'tm-3', name: 'Zeynep Demir', role: 'bilimci', specialty: 'Atmosferik Fizik', experienceYears: 6, isAvailable: false },
  { id: 'tm-4', name: 'Can Özdemir', role: 'teknisyen', specialty: 'Termal Ekipman', experienceYears: 4, isAvailable: true },
  { id: 'tm-5', name: 'Merve Şahin', role: 'saglik', specialty: 'Acil Yardım', experienceYears: 7, isAvailable: true },
  { id: 'tm-6', name: 'Burak Aydın', role: 'guvenlik', specialty: 'Kriz Yönetimi', experienceYears: 9, isAvailable: true },
];

const demoEquipment: EquipmentPack[] = [
  { id: 'eq-1', name: 'Termal Ünite A-7', category: 'Isıtma', weightKg: 12.5, isAssigned: false, condition: 'mukemmel' },
  { id: 'eq-2', name: 'GPS Modülü X2', category: 'Navigasyon', weightKg: 2.3, isAssigned: true, condition: 'iyi' },
  { id: 'eq-3', name: 'İletişim Radyosu R-500', category: 'İletişim', weightKg: 4.1, isAssigned: true, condition: 'mukemmel' },
  { id: 'eq-4', name: 'Buz Matkabı D-90', category: 'Araç', weightKg: 18.0, isAssigned: false, condition: 'iyi' },
  { id: 'eq-5', name: 'Acil Yardım Çantası', category: 'Sağlık', weightKg: 6.7, isAssigned: true, condition: 'mukemmel' },
  { id: 'eq-6', name: 'Taşınabilir Laboratuvar', category: 'Bilim', weightKg: 22.4, isAssigned: false, condition: 'yetersiz' },
];

const demoWeatherWindows: WeatherWindow[] = [
  { id: 'wx-1', startTime: '2024-12-15T02:00:00Z', endTime: '2024-12-15T06:00:00Z', temperatureC: -28, windSpeedKmh: 15, visibilityKm: 8, riskLevel: 'dusuk', isUsable: true },
  { id: 'wx-2', startTime: '2024-12-15T18:00:00Z', endTime: '2024-12-16T00:00:00Z', temperatureC: -34, windSpeedKmh: 42, visibilityKm: 3, riskLevel: 'yuksek', isUsable: false },
  { id: 'wx-3', startTime: '2024-12-16T01:00:00Z', endTime: '2024-12-16T05:00:00Z', temperatureC: -25, windSpeedKmh: 12, visibilityKm: 10, riskLevel: 'dusuk', isUsable: true },
];

const demoCheckpoints: RouteCheckpoint[] = [
  { id: 'cp-1', name: 'Ana Üs Delta', coordinates: '77°28′N 69°14′W', order: 1, estimatedDurationMin: 0, riskLevel: 'dusuk', notes: 'Başlangıç noktası' },
  { id: 'cp-2', name: 'Buzul Yarığı A', coordinates: '77°31′N 69°09′W', order: 2, estimatedDurationMin: 45, riskLevel: 'orta', notes: 'Dikkatli ilerleme' },
  { id: 'cp-3', name: 'Sektör 4B Kuzey', coordinates: '77°35′N 68°55′W', order: 3, estimatedDurationMin: 90, riskLevel: 'yuksek', notes: 'Rüzgar uyarısı aktif' },
  { id: 'cp-4', name: 'Eski Radar İstasyonu', coordinates: '77°38′N 68°48′W', order: 4, estimatedDurationMin: 60, riskLevel: 'dusuk', notes: 'Toplama noktası' },
];

const demoRiskFlags: RiskFlag[] = [
  { id: 'rf-1', category: 'Hava', description: 'Sektör 7\'de düşük görüş uyarısı', severity: 'yuksek', mitigation: 'Termal ekipman ve saatlik telemetri', isResolved: false },
  { id: 'rf-2', category: 'Ekipman', description: 'Taşınabilir laboratuvar bakım gerektiriyor', severity: 'orta', mitigation: 'Yedek cihazlarla devam edin', isResolved: false },
  { id: 'rf-3', category: 'İnsan', description: 'Zeynep Demir izinli', severity: 'dusuk', mitigation: 'Can Özdemir\'e ek görev atanacak', isResolved: true },
];

const demoMissions: Mission[] = [
  {
    id: 'ms-1',
    name: 'Operasyon Kış Fırtınası',
    description: 'Sektör 4B Kuzey\'de buzul yarığı keşfi ve örnek toplama',
    sector: '4B Kuzey',
    status: 'beklemede',
    priority: 4,
    createdAt: '2024-12-10T08:30:00Z',
    estimatedStart: '2024-12-15T02:00:00Z',
    estimatedDurationHours: 6,
    teamMembers: ['tm-1', 'tm-2', 'tm-4', 'tm-5'],
    equipmentPacks: ['eq-2', 'eq-3', 'eq-5'],
    weatherWindows: ['wx-1'],
    checkpoints: ['cp-1', 'cp-2', 'cp-3', 'cp-4'],
    riskFlags: ['rf-1', 'rf-2'],
    briefingNotes: 'Tüm ekip üyeleri termal protokollere uymalıdır. İletişim radyoları saatlik kontrol edilecek.',
  },
  {
    id: 'ms-2',
    name: 'Buzul Yarığı Keşfi - Sektör 4',
    description: 'Yeni buzul yarığı formasyonlarının haritalanması',
    sector: '4A Batı',
    status: 'tamamlandi',
    priority: 3,
    createdAt: '2024-12-05T14:00:00Z',
    estimatedStart: '2024-12-08T03:00:00Z',
    estimatedDurationHours: 4,
    teamMembers: ['tm-1', 'tm-3'],
    equipmentPacks: ['eq-1', 'eq-4'],
    weatherWindows: ['wx-3'],
    checkpoints: ['cp-1', 'cp-2'],
    riskFlags: [],
    briefingNotes: 'Önceki keşif verileriyle karşılaştırma yapılacak.',
  },
];

const demoNotifications: Notification[] = [
  { id: 'nt-1', title: 'Hava Uyarısı', message: 'Sektör 7\'de düşük görüş koşulları bekleniyor', type: 'warning', timestamp: '2024-12-14T16:00:00Z', read: false },
  { id: 'nt-2', title: 'Ekipman Bakımı', message: 'Taşınabilir laboratuvar bakım gerektiriyor', type: 'info', timestamp: '2024-12-14T10:00:00Z', read: true },
];

function createDefaultState(): AppState {
  return {
    missions: demoMissions,
    teamMembers: demoTeamMembers,
    equipmentPacks: demoEquipment,
    weatherWindows: demoWeatherWindows,
    routeCheckpoints: demoCheckpoints,
    riskFlags: demoRiskFlags,
    currentScreen: 'dashboard',
    selectedMissionId: null,
    isEditing: false,
    searchQuery: '',
    notifications: demoNotifications,
    userProfile: {
      name: 'Dr. Ayşe Korkmaz',
      title: 'Baş Araştırmacı',
      email: 'ayse.korkmaz@aurora-expedition.org',
      station: 'Ana Üs Delta',
      role: 'İstasyon Yöneticisi',
      avatarInitials: 'AK',
    },
    settings: {
      theme: 'dark',
      language: 'tr',
      telemetryEnabled: true,
      autoSaveInterval: 30,
      unitSystem: 'metric',
    },
  };
}

function initState(): AppState {
  const saved = loadState();
  if (saved) return saved;
  const fresh = createDefaultState();
  saveState(fresh);
  return fresh;
}

export function useAppState() {
  const [state, setState] = useState<AppState>(initState);
  const stateRef = useRef(state);
  stateRef.current = state;

  // Persist to localStorage on every change
  useEffect(() => {
    saveState(state);
  }, [state]);

  const navigate = useCallback((screen: ScreenName, missionId?: string) => {
    setState((prev) => ({
      ...prev,
      currentScreen: screen,
      selectedMissionId: missionId ?? (screen === 'mission-detail' ? prev.selectedMissionId : null),
      isEditing: screen === 'mission-new',
    }));
  }, []);

  const goBack = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentScreen: 'dashboard',
      selectedMissionId: null,
      isEditing: false,
    }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const addMission = useCallback((mission: Omit<Mission, 'id' | 'createdAt'>) => {
    const newMission: Mission = {
      ...mission,
      id: `ms-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setState((prev) => ({
      ...prev,
      missions: [newMission, ...prev.missions],
      currentScreen: 'dashboard',
      selectedMissionId: newMission.id,
    }));
  }, []);

  const updateMission = useCallback((id: string, updates: Partial<Mission>) => {
    setState((prev) => ({
      ...prev,
      missions: prev.missions.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    }));
  }, []);

  const deleteMission = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      missions: prev.missions.filter((m) => m.id !== id),
      selectedMissionId: prev.selectedMissionId === id ? null : prev.selectedMissionId,
    }));
  }, []);

  const archiveMission = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      missions: prev.missions.map((m) => (m.id === id ? { ...m, status: 'arsivlendi' as const } : m)),
    }));
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    }));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setState((prev) => ({ ...prev, notifications: [] }));
  }, []);

  const updateUserProfile = useCallback((updates: Partial<AppState['userProfile']>) => {
    setState((prev) => ({
      ...prev,
      userProfile: { ...prev.userProfile, ...updates },
    }));
  }, []);

  const updateSettings = useCallback((updates: Partial<AppState['settings']>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...updates },
    }));
  }, []);

  const resetData = useCallback(() => {
    const fresh = createDefaultState();
    setState(fresh);
  }, []);

  return {
    state,
    navigate,
    goBack,
    setSearchQuery,
    addMission,
    updateMission,
    deleteMission,
    archiveMission,
    markNotificationRead,
    clearAllNotifications,
    updateUserProfile,
    updateSettings,
    resetData,
  };
}
