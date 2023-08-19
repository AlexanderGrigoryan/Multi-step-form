import {create} from 'zustand';

interface CheckboxState {
  checkboxes: boolean[];
  toggleCheckbox: (index: number) => void;
}

export const useCheckboxStore = create<CheckboxState>((set) => ({
  checkboxes: [false, false, false],
  toggleCheckbox: (index) => {
    set((state) => {
      const updatedCheckboxes = [...state.checkboxes];
      updatedCheckboxes[index] = !updatedCheckboxes[index];
      return { checkboxes: updatedCheckboxes };
    });
  },
}));


