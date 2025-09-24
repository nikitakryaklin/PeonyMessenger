import { Text } from "../text";

export const Stub = ({ text }: { text: string }) => {
  return (
    <div className=" absolute inset-0 flex items-center justify-center">
      <div className="bg-[var(--white)] px-3 py-1 rounded-xl">
        <Text text={text} />
      </div>
    </div>
  );
};
