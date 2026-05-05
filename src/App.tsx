import { useAppState } from './hooks/useAppState';
import { AnaEkranDashboard } from './screens/AnaEkranDashboard';
import { IstatistiklerVeAnaliz } from './screens/IstatistiklerVeAnaliz';
import { GorevDetayi } from './screens/GorevDetayi';
import { YeniGorevEkleDuzenle } from './screens/YeniGorevEkleDuzenle';
import { SistemAyarlari } from './screens/SistemAyarlari';
import { KullaniciProfili } from './screens/KullaniciProfili';
import { SistemHatasi } from './screens/SistemHatasi';
import { HenuzVeriYok } from './screens/HenuzVeriYok';

export default function App() {
  const {
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
  } = useAppState();

  const currentMission = state.selectedMissionId
    ? state.missions.find((m) => m.id === state.selectedMissionId) ?? null
    : null;

  const filteredMissions = state.searchQuery
    ? state.missions.filter(
        (m) =>
          m.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          m.sector.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          m.description.toLowerCase().includes(state.searchQuery.toLowerCase()),
      )
    : state.missions;

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-on-surface)]">
      {state.currentScreen === 'dashboard' && (
        <AnaEkranDashboard
          missions={filteredMissions}
          searchQuery={state.searchQuery}
          onSearchChange={setSearchQuery}
          onNavigate={navigate}
          onMissionSelect={(id) => navigate('mission-detail', id)}
          onNewMission={() => navigate('mission-new')}
          teamMembers={state.teamMembers}
          equipmentPacks={state.equipmentPacks}
          weatherWindows={state.weatherWindows}
          riskFlags={state.riskFlags}
          notifications={state.notifications}
          onMarkNotificationRead={markNotificationRead}
          onClearNotifications={clearAllNotifications}
        />
      )}
      {state.currentScreen === 'stats' && (
        <IstatistiklerVeAnaliz
          missions={state.missions}
          teamMembers={state.teamMembers}
          equipmentPacks={state.equipmentPacks}
          weatherWindows={state.weatherWindows}
          routeCheckpoints={state.routeCheckpoints}
          riskFlags={state.riskFlags}
          onNavigate={navigate}
          onNewMission={() => navigate('mission-new')}
        />
      )}
      {state.currentScreen === 'settings' && (
        <SistemAyarlari
          settings={state.settings}
          onUpdateSettings={updateSettings}
          onNavigate={navigate}
          onNewMission={() => navigate('mission-new')}
          onResetData={resetData}
        />
      )}
      {state.currentScreen === 'profile' && (
        <KullaniciProfili
          profile={state.userProfile}
          onUpdateProfile={updateUserProfile}
          onNavigate={navigate}
          onNewMission={() => navigate('mission-new')}
        />
      )}
      {state.currentScreen === 'mission-new' && (
        <YeniGorevEkleDuzenle
          mode="new"
          teamMembers={state.teamMembers}
          equipmentPacks={state.equipmentPacks}
          weatherWindows={state.weatherWindows}
          routeCheckpoints={state.routeCheckpoints}
          onSave={addMission}
          onCancel={goBack}
          onNavigate={navigate}
        />
      )}
      {state.currentScreen === 'mission-detail' && currentMission && (
        <GorevDetayi
          mission={currentMission}
          teamMembers={state.teamMembers}
          equipmentPacks={state.equipmentPacks}
          weatherWindows={state.weatherWindows}
          routeCheckpoints={state.routeCheckpoints}
          riskFlags={state.riskFlags}
          onBack={goBack}
          onEdit={() => navigate('mission-new')}
          onArchive={() => archiveMission(currentMission.id)}
          onDelete={() => {
            deleteMission(currentMission.id);
            goBack();
          }}
          onNavigate={navigate}
        />
      )}
      {state.currentScreen === 'error' && (
        <SistemHatasi onRetry={goBack} onClearData={resetData} onNavigate={navigate} />
      )}
      {state.currentScreen === 'empty' && (
        <HenuzVeriYok onNewMission={() => navigate('mission-new')} onNavigate={navigate} />
      )}
    </div>
  );
}
