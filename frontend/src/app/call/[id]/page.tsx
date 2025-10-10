import { CallPage } from "@/pages-1";

export default async function Page({ params, searchParams }: any) {
  const { id } = await params;
  const { to, userName, avatar, status } = await searchParams;
  return (
    <CallPage
      statusCurrent={status}
      roomId={id}
      callee={{
        id: to,
        userName: userName,
        avatar: avatar,
      }}
    />
  );
}
