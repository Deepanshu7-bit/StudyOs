import { create } from 'zustand';

interface NotesStore {
  selectedNoteId: string | null;
  setSelectedNoteId: (id: string | null) => void;
}

export const useNotesStore = create<NotesStore>((set) => ({
  selectedNoteId: null,
  setSelectedNoteId: (id) => set({ selectedNoteId: id }),
}));
