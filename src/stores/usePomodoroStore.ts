import { create } from 'zustand';

interface PomodoroStore {
  isRunning: boolean;
  timeLeft: number;
  setRunning: (running: boolean) => void;
  setTimeLeft: (time: number) => void;
}

export const usePomodoroStore = create<PomodoroStore>((set) => ({
  isRunning: false,
  timeLeft: 1500,
  setRunning: (running) => set({ isRunning: running }),
  setTimeLeft: (time) => set({ timeLeft: time }),
}));
