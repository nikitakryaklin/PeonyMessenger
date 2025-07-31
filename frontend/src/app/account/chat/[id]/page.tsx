import { redirect } from "next/navigation";

export default function Page() {
  redirect("/account/chat");

  return null;
}
