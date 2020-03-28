export interface Font {
  family: string;
  variable?: boolean; // is it a variable font (new)
  weights?: string[];
  strictName?: boolean; // if strict name is on then the original name is used
}

export interface Options {
  fonts: Font[];
  legacy?: boolean; // if true it uses v1 api. Wont be able to use variable fonts
  display?: string; //
  verbose?: boolean; // if true then reports errors, if any
}
