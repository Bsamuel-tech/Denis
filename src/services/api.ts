import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },
  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export const locationService = {
  getLocations: async () => {
    const response = await api.get('/locations');
    return response.data;
  },
  getLocationById: async (id: string) => {
    const response = await api.get(`/locations/${id}`);
    return response.data;
  },
  createLocation: async (locationData: any) => {
    const response = await api.post('/locations', locationData);
    return response.data;
  },
  updateLocation: async (id: string, locationData: any) => {
    const response = await api.put(`/locations/${id}`, locationData);
    return response.data;
  },
};

export const readingService = {
  getReadings: async (params?: any) => {
    const response = await api.get('/readings', { params });
    return response.data;
  },
  getReadingsByTimeRange: async (start: Date, end: Date) => {
    const response = await api.get('/readings/timerange', {
      params: { start: start.toISOString(), end: end.toISOString() }
    });
    return response.data;
  },
};

export const systemService = {
  getSystems: async () => {
    const response = await api.get('/systems');
    return response.data;
  },
  updateSystemStatus: async (id: string, statusData: any) => {
    const response = await api.put(`/systems/${id}/status`, statusData);
    return response.data;
  },
};

export default api;