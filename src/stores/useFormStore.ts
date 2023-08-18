import {create} from "zustand"

export interface User {
    name: string,
    email: string, 
    number: string, 
}

interface FormStore {
    user: User[]
    updateUser: (newUserData: User[]) => void

}



export const useFormStore = create<FormStore>((set, get) => ({
 user: [],
 updateUser: (newUserData: User[]) =>set({user: {...newUserData}})

}));

