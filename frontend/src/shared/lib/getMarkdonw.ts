"use server";

import path from "path";
import { promises } from "fs";

export const getMarkdonw = async (url: string) => {
  const filePath = path.join(process.cwd(), url);
  const content = await promises.readFile(filePath, "utf-8");

  return content;
};
