export type TTextScale = "0.8" | "0.9" | "1" | "1.1" | "1.2";

export interface ICustomizeText {
  textScale: TTextScale;
  setTextScale: (textScale: TTextScale) => void;
  resetTextScale: () => void;
}

export interface ICustomizeColor {
  primery: string;
  primeryLight: string;
  isSave: boolean;
  setIsSave: (isSave: boolean) => void;
  setColors: (colorName: TColorName, currentColor: string) => void;
  resetColor: (theme: string) => void;
}

export type TColorName = keyof Omit<
  ICustomizeColor,
  "isSave" | "setIsSave" | "setColors" | "resetColor"
>;
