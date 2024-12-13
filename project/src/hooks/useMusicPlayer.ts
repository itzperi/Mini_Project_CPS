import { useState, useCallback } from 'react';
import { Song } from '../types/music';

export function useMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [volume, setVolume] = useState(1);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeSong = useCallback((song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  }, []);

  const adjustVolume = useCallback((value: number) => {
    setVolume(Math.max(0, Math.min(1, value)));
  }, []);

  return {
    isPlaying,
    currentSong,
    volume,
    togglePlay,
    changeSong,
    adjustVolume
  };
}