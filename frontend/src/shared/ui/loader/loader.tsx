import { LoaderIcon } from "lucide-react";
import { Text } from "../text";

export function Loader({ color = "#ffffff" }: { color?: string }) {
  return (
    <div className="size-full flex items-center justify-center animate-pulse bg-transparent">
      <LoaderIcon className="animate-spin" style={{ stroke: color }} />
    </div>
  );
}
