import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onVolumeChange: (value: number) => void;
  volume: number;
  theme: 'light' | 'dark';
  onNext?: () => void;
  onPrevious?: () => void;
}

export function PlayerControls({ 
  isPlaying, 
  onPlayPause, 
  onVolumeChange, 
  volume,
  theme,
  onNext,
  onPrevious 
}: PlayerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button 
        onClick={onPrevious} 
        className="p-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        disabled={!onPrevious}
      >
        <SkipBack size={24} />
      </button>
      <button 
        onClick={onPlayPause} 
        className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
      >
        {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
      </button>
      <button 
        onClick={onNext} 
        className="p-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        disabled={!onNext}
      >
        <SkipForward size={24} />
      </button>
      <div className="flex items-center gap-2 ml-4">
        <Volume2 size={20} />
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}