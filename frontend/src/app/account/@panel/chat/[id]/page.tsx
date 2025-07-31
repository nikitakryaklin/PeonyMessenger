export default async function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  return <div>chat - {params.id}</div>;
}
