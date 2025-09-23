import { DocsPage } from "@/pages-1";
import { getMarkdonw } from "@/shared";

export default async function Page() {
  const content = await getMarkdonw("public/docs/rules.md");

  return <DocsPage content={content} />;
}
