export * from "./ui/text";
export { Button } from "./ui/button/button";
export { IconButton } from "./ui/button/IconButton";
export { Tag } from "./ui/tag/Tag";
export { Field } from "./ui/field/Field";
export { Loader } from "./ui/loader/loader";
export * from "./routes/routes";
export { API } from "./config/api";

export { getValidateError } from "./lib/getValidateError";
export { useMutliStepForm } from "./hooks/useMutliStepForm";
export { PageWrapper } from "./ui/pageWrapper/pageWrapper";
export { getTitleByPathName } from "./lib/getTitleByPathName";
export type { strapiImage } from "./types/api/strapiImage-inteface";
export type { IUser } from "./types/api/user-inteface";
export type { IAbout } from "./types/api/about-interface";
export type { IPagination } from "./types/api/pagination-interface";
export { getImageUrl } from "./lib/getImageURL";
export { filtredParticipants } from "./lib/filtredParticipants";
export { DropDown } from "./ui/dropDown/dropDown";
export * from "./lib/dropDown";
export { useCreateChatModal } from "./hooks/useCreateChatModal";

// ui
export { CheckBox } from "./ui/checkBox/checkBox";
export { PrimeryLink } from "./ui/link/primeryLink";
export { Stub } from "./ui/stub/stub";
export { FileField } from "./ui/field/fileField";
export { ColorField } from "./ui/field/colorField";
export { RangeField } from "./ui/field/rangeField/rangeField";
export { Markdonw } from "./ui/markdown/ui/markdonw";
export { AudioPlayer } from "./ui/audioPlayer/ui/audioPlayer";
export { Timer } from "./ui/timer/timer";

// hook
export { useIntersection } from "./hooks/useIntersection";
export { usePreview } from "./hooks/usePreview";
export { useQueryCacheSize } from "./hooks/useQueryCacheSize";
export { useScrollToTop } from "./hooks/useScrollToTop";

//api
export { useSocket } from "./api";
export { api } from "./api";
export { uploadFilesService } from "./api/service/uploadFiles.service";

//lib
export { getHour } from "./lib/date/getHour";
export { getUserName } from "./lib/getUserName";

// server
export { getMarkdonw } from "./lib/getMarkdonw";

//config
export { PRIMERY_COLORS } from "./config/primeryColors";
export { AUTH_ROUTES } from "./config/authRoutes";
export { LOCAL_STORAGE } from "./config/localStorage";

//providers
export { QueryClientCastomProvider } from "./providers/queryClientCastomProvider";
export { AdaptiveProvider } from "./providers/adaptiveProvider";
