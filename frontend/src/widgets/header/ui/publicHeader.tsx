import { Logo } from "@/entities";
import { usePublicRegisterFormStore } from "@/features";
import { I18n } from "@/features/i18n/ui/i18n";
import { IconButton } from "@/shared";
import { ArrowLeft } from "lucide-react";

export const PublicHeader = () => {
  const { step, prevStep } = usePublicRegisterFormStore();

  return (
    <header className="flex justify-between h-24 items-center px-[max(5%,1.125rem)]">
      {step === 1 && <Logo />}
      {step > 1 && <IconButton onClick={prevStep} icon={<ArrowLeft />} />}
      <I18n />
    </header>
  );
};
