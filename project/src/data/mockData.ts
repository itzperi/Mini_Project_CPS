import { ListeningStats, Song } from '../types/music';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Adiye',
    artist: 'A.R. Rahman, Sid Sriram',
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 320
  },
  {
    id: '2',
    title: 'Nira',
    artist: 'Anirudh Ravichander',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 285
  },
  {
    id: '3',
    title: 'Nan Pizhai',
    artist: 'A.R. Rahman, Shashaa Tirupati',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 295
  },
  {
    id: '4',
    title: 'Thalli Pogathey',
    artist: 'A.R. Rahman, Sid Sriram',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: 310
  },
  {
    id: '5',
    title: 'Uyire',
    artist: 'A.R. Rahman',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: 298
  }
];

export const mockListeningStats: ListeningStats[] = Array.from({ length: 7 }, (_, i) => ({
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  hours: Math.random() * 5 + 1
}));