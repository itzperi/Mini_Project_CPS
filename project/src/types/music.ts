export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
  duration: number;
}

export interface ListeningStats {
  date: string;
  hours: number;
}

export interface UserProfile {
  username: string;
  avatar: string;
  totalListeningTime: number;
  favoriteSongs: Song[];
}