import { DocsPage } from "@/pages-1";
import { getMarkdonw } from "@/shared";

export default async function Page() {
  const content = await getMarkdonw("public/docs/faq.md");

  return <DocsPage content={content} />;
  // return <div>Временно не доступно</div>;
}
