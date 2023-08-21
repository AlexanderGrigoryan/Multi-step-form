import {create} from 'zustand';

interface ButtonStore {
  selectedButton: string | null;
  setSelectedButton: (button: string | null) => void;
  selectedButtonMonthlyPrice: number;
  setSelectedButtonMonthlyPrice: (buttonName: number ) => void
  selectedButtonYearlyPrice: number;
  setSelectedButtonYearlyPrice: (buttonName: number) => void
}

const useButtonStore = create<ButtonStore>((set) => ({
  selectedButton: null,
  setSelectedButton: (button) => set(() => ({ selectedButton: button })),
  selectedButtonMonthlyPrice: 0,
  setSelectedButtonMonthlyPrice: (monthlyPrice) => set(() => ({selectedButtonMonthlyPrice: monthlyPrice})),
  selectedButtonYearlyPrice: 0,
  setSelectedButtonYearlyPrice: (yearlyPrice) => set(() => ({selectedButtonYearlyPrice: yearlyPrice}))
}));

export default useButtonStore;