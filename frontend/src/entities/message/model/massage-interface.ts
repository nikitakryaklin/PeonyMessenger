import { IAbout, IUser } from "@/shared";

interface ITextMessage {
  type: "text";
  content: {
    text: string;
  };
}

interface IVoiceMessage {
  type: "voice";
  content: {
    url: string;
    duration: number;
  };
}

interface IPhotoMessage {
  type: "photo";
  content: {
    url: string;
  };
}

// interface IFileMessage {
//   type: "file";
//   content: {
//     url: string;
//     name: string;
//   };
// }

export type TTypeMessage = ITextMessage | IVoiceMessage | IPhotoMessage;
// | IFileMessage;

export interface IMassageEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IDialogMessage {
  sender: IUser & { about: IAbout | null };
}

export type TMessage = IMassageEntity & IDialogMessage & TTypeMessage;
