import {create} from 'zustand';

interface CheckboxInfo {
  name: string,
  price: number
}

interface CheckboxState {
  checkboxes: boolean[];
  infoAboutCheckboxes: CheckboxInfo[]
  toggleCheckbox: (index: number) => void;
  addToBase: (index: number) => void
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
  addToBase: (index) => {
    set((state) => {
      // const updatedInfoCheckboxes = [...state.infoAboutCheckboxes];
      return console.log(111)
    })
   
  }
}));


