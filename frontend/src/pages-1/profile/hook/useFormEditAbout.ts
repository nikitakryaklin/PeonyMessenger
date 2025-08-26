import { SubmitHandler, useForm } from "react-hook-form";
import { IAboutMutate, IEditForm } from "../model/formEdit-interface";

export const useFormEditAbout = (mutate: IAboutMutate) => {
  const { register, reset, handleSubmit, watch } = useForm<IEditForm>();

  const onSubmitForm: SubmitHandler<IEditForm> = (data) => {
    if (data.avatar?.length === 0 && !data.name) return;

    const formData = new FormData();

    if (data.avatar) {
      formData.append("files", data.avatar[0]);
    }

    mutate({
      name: data.name,
      avatar: data.avatar?.length !== 0 ? formData : null,
    });
    reset();
  };

  return { onSubmit: handleSubmit(onSubmitForm), register, watch };
};
