import { PrimeryLink, ROUTES } from "@/shared";
import { DefaultLink } from "@/shared/ui/link/DefaultLink";

export const HomePage = () => {
  return (
    <div className="flex gap-2 flex-col items-center">
      <section className="h-auto w-72 sm:w-96 mt-40 flex items-center flex-col gap-4">
        <div className="flex gap-2 w-full">
          <PrimeryLink url={ROUTES.login} text={"Sing In"} icon={undefined} />
          <PrimeryLink
            url={ROUTES.register}
            text={"Sing Up"}
            icon={undefined}
          />
        </div>
        <div className="flex gap-2">
          <DefaultLink href={ROUTES.faq} text="FAQ" />
          <DefaultLink href={ROUTES.rules} text="Rules" />
        </div>
      </section>
    </div>
  );
};
