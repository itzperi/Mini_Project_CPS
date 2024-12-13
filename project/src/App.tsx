import React, { useEffect, useState } from 'react';
import { MusicVisualizer } from './components/MusicVisualizer';
import { MusicPlayer } from './components/Player/MusicPlayer';
import { ListeningGraph } from './components/Stats/ListeningGraph';
import { Sidebar } from './components/Layout/Sidebar';
import { useTheme } from './context/ThemeContext';
import { fetchTamilSongs } from './services/musicApi';
import { mockListeningStats } from './data/mockData';
import { Moon, Sun } from 'lucide-react';
import { Song } from './types/music';

export function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const loadSongs = async () => {
      const tamilSongs = await fetchTamilSongs();
      setSongs(tamilSongs);
    };
    loadSongs();
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="flex">
        <MusicVisualizer />
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={toggleTheme}
              className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="text-yellow-500" /> : <Moon />}
            </button>

            <MusicPlayer />
            <ListeningGraph stats={mockListeningStats} theme={theme} />
          </div>
        </main>
      </div>
    </div>
  );
}