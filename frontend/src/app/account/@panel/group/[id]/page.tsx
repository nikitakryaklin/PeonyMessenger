import { GroupPage } from "@/pages-1";

export default async function Page({ params }: { params: { id?: string } }) {
  const { id } = await params;

  return <GroupPage id={id as string} />;
}
