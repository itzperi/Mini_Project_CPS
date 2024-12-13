import { Song } from '../types/music';
import { API_CONFIG, USE_MOCK_DATA } from '../config/api';
import { mockSongs } from '../data/mockData';

export async function fetchTamilSongs(): Promise<Song[]> {
  if (USE_MOCK_DATA) {
    return Promise.resolve(mockSongs);
  }

  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SONGS}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Tamil songs:', error);
    return mockSongs; // Fallback to mock data on error
  }
}