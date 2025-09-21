import { GroupPage } from "@/pages-1";

export default async function Page({ params }: any) {
  const { id } = await params; // await "разворачивает" Promise, если он есть
  return <GroupPage id={id} />;
}
