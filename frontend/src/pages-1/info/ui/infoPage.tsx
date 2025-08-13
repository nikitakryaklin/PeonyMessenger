import { PrimeryLink } from "@/shared";
import { Globe } from "lucide-react";

export const InfoPage = () => {
  return (
    <div className="px-2">
      <PrimeryLink url="#" text="Visit Website" icon={<Globe size={15} />} />
    </div>
  );
};
