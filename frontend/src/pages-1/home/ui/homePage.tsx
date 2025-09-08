import { ROUTES } from "@/shared";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="flex gap-2">
      <Link href={ROUTES.login}>sing in</Link>
      <Link href={ROUTES.register}>sing up</Link>
      <Link href={ROUTES.account}>account</Link>
      <Link href={ROUTES.chatById(321)}>chat</Link>
    </div>
  );
};
