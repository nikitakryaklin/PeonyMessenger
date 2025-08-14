import { PrimeryLink } from "@/shared";
import { INFO_PAGE_DATA } from "../model/infoPage.data";

export const InfoPage = () => {
  return (
    <div className="px-3 flex flex-col gap-3">
      {INFO_PAGE_DATA.map((el) => (
        <PrimeryLink key={el.id} url={el.url} text={el.text} icon={el.icon} />
      ))}
    </div>
  );
};
