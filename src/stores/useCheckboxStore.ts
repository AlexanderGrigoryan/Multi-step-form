import {create} from 'zustand';

interface CheckboxState {
  checkboxes: {
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
  };
  toggleCheckbox: (checkboxName: keyof CheckboxState['checkboxes']) => void;
}

export const useCheckboxStore = create<CheckboxState>((set) => ({
  checkboxes: {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  },
  toggleCheckbox: (checkboxName) =>
    set((state) => ({
      checkboxes: {
        ...state.checkboxes,
        [checkboxName]: !state.checkboxes[checkboxName],
      },
    })),
}));