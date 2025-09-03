"use client";

import { ChangeColors } from "./changeColors";
import { ChangeTextScale } from "./changeTextScale";
import { ExampleChanges } from "./exampleChanges";

export const Customize = () => {
  return (
    <div className="flex flex-col gap-3">
      <ChangeTextScale />
      <ExampleChanges />
      <ChangeColors />
    </div>
  );
};
