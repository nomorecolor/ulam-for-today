export interface UlamProp {
  id?: string;
  name: string;
  picLink: string;
  recipe?: {
    ingredients: string[];
    steps: [{ description: string; procedures: string[] }];
    plating: string;
  };
}

export interface UlamDetailsProp {
  id?: string;
}
