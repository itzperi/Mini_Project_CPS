export const API_CONFIG = {
  BASE_URL: 'https://tamil-music-api.example.com/v1',
  ENDPOINTS: {
    SONGS: '/songs',
    TRENDING: '/trending',
    ARTISTS: '/artists'
  }
} as const;

// Use mock data in development
export const USE_MOCK_DATA = true;