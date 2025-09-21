// import { DocsPage } from "@/pages-1";
import { getMarkdonw } from "@/shared";
// import { div } from "motion/react-client";

export default async function Page() {
  const content = await getMarkdonw("public/docs/faq.md");

  return <div>Временно не доступно</div>;
  // return <DocsPage content={content} />;
}
