import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href={"/account/chat/123"}>link to chat/123</Link>
    </div>
  );
}
