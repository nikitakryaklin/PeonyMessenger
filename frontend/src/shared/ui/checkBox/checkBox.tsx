import clsx from "clsx";

export const CheckBox = ({
  isActive,
  className,
}: {
  isActive?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "h-5 w-5 flex items-center rounded-full justify-center border-2 transition-colors duration-300",
        className,
        !isActive && "border-[var(--black)]",
        isActive && "border-[var(--primery)]"
      )}
    >
      {isActive && (
        <div className="w-4/5 h-4/5 bg-[var(--primery)] rounded-full"></div>
      )}
    </div>
  );
};
