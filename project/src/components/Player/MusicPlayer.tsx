import { useMusicPlayer } from '../../hooks/useMusicPlayer';
import { PlayerControls } from './PlayerControls';
import { AudioWave } from '../AudioWave';
import { useTheme } from '../../context/ThemeContext';
import { mockSongs } from '../../data/mockData';
import { useState } from 'react';

export function MusicPlayer() {
  const { isPlaying, currentSong, volume, togglePlay, adjustVolume, changeSong } = useMusicPlayer();
  const { theme } = useTheme();
  const [selectedSong, setSelectedSong] = useState(currentSong || mockSongs[0]);

  const handleSongSelect = (song: typeof mockSongs[0]) => {
    setSelectedSong(song);
    changeSong(song);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors duration-300`}>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src={selectedSong.coverUrl} 
            alt={selectedSong.title}
            className="w-32 h-32 rounded-lg shadow-lg animate-float"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">{selectedSong.title}</h2>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {selectedSong.artist}
          </p>
          <AudioWave isPlaying={isPlaying} />
        </div>
      </div>
      
      <div className="mt-6">
        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1 mb-4`}>
          <div className="bg-primary dark:bg-primary-dark h-1 rounded-full w-1/3 transition-all duration-300" />
        </div>
        <PlayerControls 
          isPlaying={isPlaying}
          onPlayPause={togglePlay}
          onVolumeChange={adjustVolume}
          volume={volume}
          theme={theme}
          onNext={() => {
            const currentIndex = mockSongs.findIndex(s => s.id === selectedSong.id);
            const nextSong = mockSongs[(currentIndex + 1) % mockSongs.length];
            handleSongSelect(nextSong);
          }}
          onPrevious={() => {
            const currentIndex = mockSongs.findIndex(s => s.id === selectedSong.id);
            const prevSong = mockSongs[(currentIndex - 1 + mockSongs.length) % mockSongs.length];
            handleSongSelect(prevSong);
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSongs.map((song) => (
          <button
            key={song.id}
            onClick={() => handleSongSelect(song)}
            className={`p-4 rounded-lg transition-all ${
              selectedSong.id === song.id
                ? 'bg-primary text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={song.coverUrl}
                alt={song.title}
                className="w-12 h-12 rounded"
              />
              <div className="text-left">
                <p className="font-semibold">{song.title}</p>
                <p className="text-sm opacity-75">{song.artist}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}