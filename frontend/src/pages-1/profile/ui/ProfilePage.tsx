"use client";

import { useUserAbout } from "@/features";
import { Loader } from "@/shared";
import { WelcomePage } from "./welcomePage";
import { ProfileDitailsPage } from "./profileDitailsPage";

export const ProfilePage = () => {
  const { data, isPending } = useUserAbout();

  if (isPending) return <Loader />;

  const render = () => {
    if (!data) return <WelcomePage />;

    if (data) return <ProfileDitailsPage data={data} />;
  };

  return <div className="flex flex-col gap-4">{render()}</div>;
};
