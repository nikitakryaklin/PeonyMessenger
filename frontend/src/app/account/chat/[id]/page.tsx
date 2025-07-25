export default function Page({ params }: { params: { id: string } }) {
  return <div>chat/{params.id}</div>;
}
