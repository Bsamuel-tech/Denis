// Mock data for the application

// Mock locations
export const mockLocations = [
  {
    id: '1',
    name: 'East Province',
    coordinates: {
      latitude: -1.6462,
      longitude: 30.5037,
    },
    sensorCount: 0,
    lastReading: {
      time: '12/05/2025, 21:08:31',
      value: 0,
      isOptimal: true,
    },
  },
  {
    id: '2',
    name: 'Kigali City',
    coordinates: {
      latitude: -1.9441,
      longitude: 30.0619,
    },
    sensorCount: 0,
    lastReading: {
      time: '12/05/2025, 21:08:31',
      value: 0,
      isOptimal: true,
    },
  },
  {
    id: '3',
    name: 'West Province',
    coordinates: {
      latitude: -1.9484,
      longitude: 29.2326,
    },
    sensorCount: 0,
    lastReading: {
      time: '12/05/2025, 21:08:31',
      value: 0,
      isOptimal: true,
    },
  },
  {
    id: '4',
    name: 'South Province',
    coordinates: {
      latitude: -2.3367,
      longitude: 29.6706,
    },
    sensorCount: 0,
    lastReading: {
      time: '12/05/2025, 21:08:31',
      value: 0,
      isOptimal: true,
    },
  },
  {
    id: '5',
    name: 'North Province',
    coordinates: {
      latitude: -1.4876,
      longitude: 29.7299,
    },
    sensorCount: 0,
    lastReading: {
      time: '12/05/2025, 21:08:31',
      value: 0,
      isOptimal: true,
    },
  },
];

// Mock systems
export const mockSystems = [
  {
    id: '1',
    name: 'Main Controller',
    status: 'Online',
    lastUpdate: '12/05/2025, 21:09:55',
    battery: 92,
    signal: 84,
  },
  {
    id: '2',
    name: 'Field Sensor Network',
    status: 'Online',
    lastUpdate: '12/05/2025, 21:09:55',
    battery: 78,
    signal: 65,
  },
  {
    id: '3',
    name: 'Weather Station',
    status: 'Maintenance',
    lastUpdate: '11/05/2025, 21:09:55',
    battery: 45,
    signal: 32,
  },
  {
    id: '4',
    name: 'Irrigation Controller',
    status: 'Online',
    lastUpdate: '12/05/2025, 21:09:55',
    battery: 88,
    signal: 91,
  },
  {
    id: '5',
    name: 'Gateway Node',
    status: 'Offline',
    lastUpdate: '10/05/2025, 21:09:55',
    battery: 0,
    signal: 0,
  },
  {
    id: '6',
    name: 'Solar Power Controller',
    status: 'Online',
    lastUpdate: '12/05/2025, 21:09:56',
    battery: 0,
    signal: 0,
  },
  {
    id: '7',
    name: 'Water Flow Sensor',
    status: 'Online',
    lastUpdate: '12/05/2025, 21:09:56',
    battery: 0,
    signal: 0,
  },
  {
    id: '8',
    name: 'Backup Gateway',
    status: 'Offline',
    lastUpdate: '11/05/2025, 21:09:56',
    battery: 0,
    signal: 0,
  },
];

// Mock moisture readings for 24 hours
export const mockMoistureReadings = {
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  labels: ['23:08', '01:08', '03:08', '05:08', '07:08', '09:08', '11:08', '13:08', '15:08', '17:08', '19:08', '21:08'],
};