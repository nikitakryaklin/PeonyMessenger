import { strapiImage } from "@/shared/types/api/strapiImage-inteface";
import { api } from "../instance/instance";

export const uploadFilesService = (data: FormData) =>
  api().post<strapiImage[], any>("upload", data);
