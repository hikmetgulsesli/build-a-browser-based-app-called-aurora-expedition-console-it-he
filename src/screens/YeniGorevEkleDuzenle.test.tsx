import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { YeniGorevEkleDuzenle } from '../screens/YeniGorevEkleDuzenle';
import type { Mission, TeamMember, EquipmentPack, WeatherWindow, RouteCheckpoint } from '../types/domain';

const demoTeamMembers: TeamMember[] = [
  { id: 'tm-1', name: 'Elif Yılmaz', role: 'ekip_lideri', specialty: 'Kutup Biyolojisi', experienceYears: 8, isAvailable: true },
  { id: 'tm-2', name: 'Ahmet Kaya', role: 'muhendis', specialty: 'Buzul Mühendisliği', experienceYears: 12, isAvailable: true },
];

const demoEquipment: EquipmentPack[] = [
  { id: 'eq-1', name: 'Termal Ünite A-7', category: 'Isıtma', weightKg: 12.5, isAssigned: false, condition: 'mukemmel' },
];

const demoWeatherWindows: WeatherWindow[] = [
  { id: 'wx-1', startTime: '2024-12-15T02:00:00Z', endTime: '2024-12-15T06:00:00Z', temperatureC: -28, windSpeedKmh: 15, visibilityKm: 8, riskLevel: 'dusuk', isUsable: true },
];

const demoCheckpoints: RouteCheckpoint[] = [
  { id: 'cp-1', name: 'Ana Üs Delta', coordinates: '77°28′N 69°14′W', order: 1, estimatedDurationMin: 0, riskLevel: 'dusuk', notes: 'Başlangıç noktası' },
];

const demoMission: Mission = {
  id: 'ms-1',
  name: 'Operasyon Kış Fırtınası',
  description: 'Sektör 4B Kuzey\'de buzul yarığı keşfi',
  sector: '4B Kuzey',
  status: 'aktif',
  priority: 4,
  createdAt: '2024-12-10T08:30:00Z',
  estimatedStart: '2024-12-15T02:00:00Z',
  estimatedDurationHours: 6,
  teamMembers: ['tm-1'],
  equipmentPacks: ['eq-1'],
  weatherWindows: ['wx-1'],
  checkpoints: ['cp-1'],
  riskFlags: ['rf-1'],
  briefingNotes: 'Brifing notları burada',
};

describe('YeniGorevEkleDuzenle', () => {
  it('should initialize form with empty values in new mode', () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();

    render(
      <YeniGorevEkleDuzenle
        mode="new"
        teamMembers={demoTeamMembers}
        equipmentPacks={demoEquipment}
        weatherWindows={demoWeatherWindows}
        routeCheckpoints={demoCheckpoints}
        onSave={onSave}
        onCancel={onCancel}
        onNavigate={vi.fn()}
      />,
    );

    const nameInput = screen.getByLabelText(/Görev Adı/i) as HTMLInputElement;
    expect(nameInput.value).toBe('');
  });

  it('should initialize form with mission data in edit mode', () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();

    render(
      <YeniGorevEkleDuzenle
        mode="edit"
        mission={demoMission}
        teamMembers={demoTeamMembers}
        equipmentPacks={demoEquipment}
        weatherWindows={demoWeatherWindows}
        routeCheckpoints={demoCheckpoints}
        onSave={onSave}
        onCancel={onCancel}
        onNavigate={vi.fn()}
      />,
    );

    const nameInput = screen.getByLabelText(/Görev Adı/i) as HTMLInputElement;
    expect(nameInput.value).toBe('Operasyon Kış Fırtınası');

    const sectorInput = screen.getByLabelText(/Sektör/i) as HTMLInputElement;
    expect(sectorInput.value).toBe('4B Kuzey');

    const priorityInput = screen.getByLabelText(/Öncelik/i) as HTMLInputElement;
    expect(priorityInput.value).toBe('4');
  });

  it('should preserve mission status when saving in edit mode', () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();

    render(
      <YeniGorevEkleDuzenle
        mode="edit"
        mission={demoMission}
        teamMembers={demoTeamMembers}
        equipmentPacks={demoEquipment}
        weatherWindows={demoWeatherWindows}
        routeCheckpoints={demoCheckpoints}
        onSave={onSave}
        onCancel={onCancel}
        onNavigate={vi.fn()}
      />,
    );

    const submitButton = screen.getByRole('button', { name: /Görevi Kaydet/i });
    fireEvent.click(submitButton);

    expect(onSave).toHaveBeenCalledOnce();
    const savedMission = onSave.mock.calls[0][0];
    expect(savedMission.status).toBe('aktif');
    expect(savedMission.riskFlags).toEqual(['rf-1']);
  });

  it('should initialize datetime-local input with truncated ISO string in edit mode', () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();

    render(
      <YeniGorevEkleDuzenle
        mode="edit"
        mission={demoMission}
        teamMembers={demoTeamMembers}
        equipmentPacks={demoEquipment}
        weatherWindows={demoWeatherWindows}
        routeCheckpoints={demoCheckpoints}
        onSave={onSave}
        onCancel={onCancel}
        onNavigate={vi.fn()}
      />,
    );

    const startInput = screen.getByLabelText(/Tahmini Başlangıç/i) as HTMLInputElement;
    expect(startInput.value).toBe('2024-12-15T02:00');
  });

  it('should preserve exact UTC time without timezone shift on save', () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();

    render(
      <YeniGorevEkleDuzenle
        mode="new"
        teamMembers={demoTeamMembers}
        equipmentPacks={demoEquipment}
        weatherWindows={demoWeatherWindows}
        routeCheckpoints={demoCheckpoints}
        onSave={onSave}
        onCancel={onCancel}
        onNavigate={vi.fn()}
      />,
    );

    const nameInput = screen.getByLabelText(/Görev Adı/i);
    fireEvent.change(nameInput, { target: { value: 'Zaman Test Görevi' } });

    const sectorInput = screen.getByLabelText(/Sektör/i);
    fireEvent.change(sectorInput, { target: { value: 'Test Sektör' } });

    const startInput = screen.getByLabelText(/Tahmini Başlangıç/i);
    fireEvent.change(startInput, { target: { value: '2024-12-20T10:00' } });

    // Select a team member
    const teamMemberCard = screen.getByText('Elif Yılmaz').closest('div[class*="cursor-pointer"]') || screen.getByText('Elif Yılmaz').closest('div');
    if (teamMemberCard) fireEvent.click(teamMemberCard);

    const submitButton = screen.getByRole('button', { name: /Görevi Kaydet/i });
    fireEvent.click(submitButton);

    expect(onSave).toHaveBeenCalledOnce();
    const savedMission = onSave.mock.calls[0][0];
    expect(savedMission.estimatedStart).toBe('2024-12-20T10:00:00Z');
  });

  it('should call onCancel when cancel button is clicked', () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();

    render(
      <YeniGorevEkleDuzenle
        mode="new"
        teamMembers={demoTeamMembers}
        equipmentPacks={demoEquipment}
        weatherWindows={demoWeatherWindows}
        routeCheckpoints={demoCheckpoints}
        onSave={onSave}
        onCancel={onCancel}
        onNavigate={vi.fn()}
      />,
    );

    const cancelButton = screen.getByRole('button', { name: /İptal/i });
    fireEvent.click(cancelButton);
    expect(onCancel).toHaveBeenCalledOnce();
  });
});
