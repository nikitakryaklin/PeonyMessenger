import { LOCAL_STORAGE } from "../config/localStorage";
import { IAbout } from "../types/api/about-interface";
import { IUser } from "../types/api/user-inteface";

export const filtredParticipants = (
  participants: (IUser & { about: IAbout | null })[]
) => {
  return participants.filter(
    (participant) =>
      participant.documentId !==
      localStorage.getItem(LOCAL_STORAGE.userDocumentId)
  );
};
