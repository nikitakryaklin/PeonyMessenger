export interface IDialodForm {
  text?: string;
  voise?: { blob: { current: Blob }; duration: { current: number } } | null;
  photo: FileList | null;
}

export type TDialogFormInputType = "text" | "voice" | "photo" | null;
