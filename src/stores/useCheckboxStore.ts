import {create} from 'zustand';

interface CheckboxInfo {
  name: string,
  monthlyPrice: number,
  yearlyPrice: number,
}

interface CheckboxState {
  checkboxes: boolean[];
  infoAboutCheckboxes: CheckboxInfo[]
  toggleCheckbox: (index: number) => void;
  addToBase: (index: number, name: string, monthlyPrice: number, yearlyPrice: number) => void
  deleteFromBase: () => void
}

export const useCheckboxStore = create<CheckboxState>((set) => ({
  checkboxes: [false, false, false],
  infoAboutCheckboxes: [],
  toggleCheckbox: (index) => {
    set((state) => {
      const updatedCheckboxes = [...state.checkboxes];
      updatedCheckboxes[index] = !updatedCheckboxes[index];
      return { checkboxes: updatedCheckboxes };
    });
  },
  addToBase: (index, name, monthlyPrice, yearlyPrice) => {
    set((state) => {
      const updatedInfoCheckboxes = [...state.infoAboutCheckboxes];
      const existingIndex = updatedInfoCheckboxes.findIndex((item) => item && item.name === name);

      if (existingIndex !== -1) {
        updatedInfoCheckboxes.splice(existingIndex, 1);
      } else {
        updatedInfoCheckboxes.push({ name, monthlyPrice, yearlyPrice }); 
        console.log(index)
      }

      return { infoAboutCheckboxes: updatedInfoCheckboxes };
    });
  },
  deleteFromBase: () => {
    set(() => ({
      infoAboutCheckboxes: [],
      checkboxes: [false, false, false] 
    }));
  }
}));


