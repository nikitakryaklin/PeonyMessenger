import { TTypeMessage } from "@/entities/message/model/massage-interface";
import { IDialodForm } from "./dialog-form-interface";
import { uploadFilesService } from "@/shared";

export const sendFormSrategies: Record<
  string,
  (data: IDialodForm) => Promise<TTypeMessage | null>
> = {
  text: async (data: IDialodForm) => {
    return {
      type: "text",
      content: {
        text: data.text || "",
      },
    };
  },

  voice: async (data: IDialodForm) => {
    const formData = new FormData();

    const voice = data.voise;

    if (!voice) return null;

    const file = new File([voice.blob.current], "voice-message.webm", {
      type: voice.blob.current.type,
    });

    formData.append("files", file);

    const voiceURL = await uploadFilesService(formData);

    const url = await voiceURL[0].url;

    return {
      type: "voice",
      content: {
        url: url,
        duration: voice.duration.current,
      },
    };
  },

  photo: async (data: IDialodForm) => {
    if (!data.photo || data.photo.length < 0) return null;

    const formData = new FormData();

    formData.append("files", data.photo[0]);

    const photoURL = await uploadFilesService(formData);

    const url = await photoURL[0].url;

    return {
      type: "photo",
      content: {
        url: url,
      },
    };
  },
};
