import { create } from 'zustand';
import { locationService } from '../services/api';

interface LocationState {
  locations: any[];
  loading: boolean;
  error: string | null;
  fetchLocations: () => Promise<void>;
  createLocation: (locationData: any) => Promise<void>;
  updateLocation: (id: string, locationData: any) => Promise<void>;
}

export const useLocations = create<LocationState>((set) => ({
  locations: [],
  loading: false,
  error: null,
  fetchLocations: async () => {
    set({ loading: true });
    try {
      const locations = await locationService.getLocations();
      set({ locations, loading: false, error: null });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  createLocation: async (locationData) => {
    try {
      await locationService.createLocation(locationData);
      const locations = await locationService.getLocations();
      set({ locations });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  updateLocation: async (id, locationData) => {
    try {
      await locationService.updateLocation(id, locationData);
      const locations = await locationService.getLocations();
      set({ locations });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));