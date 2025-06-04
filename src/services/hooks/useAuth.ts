import { create } from 'zustand';
import { authService } from '../services/api';

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('token'),
  login: async (email, password) => {
    const userData = await authService.login(email, password);
    set({ user: userData, isAuthenticated: true });
  },
  logout: () => {
    authService.logout();
    set({ user: null, isAuthenticated: false });
  },
  register: async (name, email, password) => {
    const userData = await authService.register(name, email, password);
    set({ user: userData, isAuthenticated: true });
  },
}));