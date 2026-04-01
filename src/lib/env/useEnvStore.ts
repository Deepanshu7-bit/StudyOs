import { create } from 'zustand';

interface EnvStore {
  baseUrl: string;
  setBaseUrl: (url: string) => void;
}

export const useEnvStore = create<EnvStore>((set) => ({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  setBaseUrl: (url: string) => set({ baseUrl: url }),
}));
