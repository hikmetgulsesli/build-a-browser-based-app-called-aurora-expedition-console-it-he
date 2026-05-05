// Aurora Expedition Console — Domain Types

export type MissionStatus = 'beklemede' | 'aktif' | 'tamamlandi' | 'arsivlendi' | 'iptal';
export type RiskLevel = 'dusuk' | 'orta' | 'yuksek' | 'kritik';
export type TeamRole = 'ekip_lideri' | 'bilimci' | 'muhendis' | 'teknisyen' | 'guvenlik' | 'saglik';

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  specialty: string;
  experienceYears: number;
  isAvailable: boolean;
}

export interface EquipmentPack {
  id: string;
  name: string;
  category: string;
  weightKg: number;
  isAssigned: boolean;
  condition: 'mukemmel' | 'iyi' | 'yetersiz';
}

export interface WeatherWindow {
  id: string;
  startTime: string;
  endTime: string;
  temperatureC: number;
  windSpeedKmh: number;
  visibilityKm: number;
  riskLevel: RiskLevel;
  isUsable: boolean;
}

export interface RouteCheckpoint {
  id: string;
  name: string;
  coordinates: string;
  order: number;
  estimatedDurationMin: number;
  riskLevel: RiskLevel;
  notes: string;
}

export interface RiskFlag {
  id: string;
  category: string;
  description: string;
  severity: RiskLevel;
  mitigation: string;
  isResolved: boolean;
}

export interface Mission {
  id: string;
  name: string;
  description: string;
  sector: string;
  status: MissionStatus;
  priority: number; // 1-5
  createdAt: string;
  estimatedStart: string;
  estimatedDurationHours: number;
  teamMembers: string[]; // ids
  equipmentPacks: string[]; // ids
  weatherWindows: string[]; // ids
  checkpoints: string[]; // ids
  riskFlags: string[]; // ids
  briefingNotes: string;
}

export interface AppState {
  missions: Mission[];
  teamMembers: TeamMember[];
  equipmentPacks: EquipmentPack[];
  weatherWindows: WeatherWindow[];
  routeCheckpoints: RouteCheckpoint[];
  riskFlags: RiskFlag[];
  currentScreen: ScreenName;
  selectedMissionId: string | null;
  isEditing: boolean;
  searchQuery: string;
  notifications: Notification[];
  userProfile: UserProfile;
  settings: AppSettings;
}

export type ScreenName =
  | 'dashboard'
  | 'stats'
  | 'settings'
  | 'profile'
  | 'mission-new'
  | 'mission-detail'
  | 'error'
  | 'empty';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  timestamp: string;
  read: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  email: string;
  station: string;
  role: string;
  avatarInitials: string;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  telemetryEnabled: boolean;
  autoSaveInterval: number;
  unitSystem: 'metric' | 'imperial';
}

export const STORAGE_KEY = 'aurora-expedition-console-v1';
