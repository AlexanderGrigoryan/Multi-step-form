import {create} from 'zustand';

interface ButtonStore {
  selectedButton: string | null;
  setSelectedButton: (button: string | null) => void;
}

const useButtonStore = create<ButtonStore>((set) => ({
  selectedButton: null,
  setSelectedButton: (button) => set(() => ({ selectedButton: button })),
}));

export default useButtonStore;