export interface Project {
  id: number;
  name: string;
  description: string;
}

export interface Invitation {
  id: number;
  from: string;
  song: string;
}

export interface Update {
  id: number;
  message: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    bio?: string;
    profileImageUrl?: string;
    roles: string[]; // e.g., Producer, DJ, Vocalist
    genres: string[]; // e.g., Rock, Pop, Jazz
    instruments: string[]; // e.g., Guitar, Piano, Drums
    soundCloudLink?: string; // Link to their SoundCloud or similar
  }