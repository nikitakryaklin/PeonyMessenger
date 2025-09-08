import { RulesPage } from "@/pages-1";
import path from "path";
import fs from "fs";

export default async function Page() {
  const filePath = path.join(process.cwd(), "public/rules/rules.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return <RulesPage content={content} />;
}
