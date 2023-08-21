export interface FormTypes {
    name: string;
    email: string;
    number: string;
  }

  export interface AddonListTypes {
      name: string;
      description: string,
      price: {
        month: number,
        year: number,
      },
  }