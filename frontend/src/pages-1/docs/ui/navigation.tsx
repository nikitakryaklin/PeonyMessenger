import clsx from "clsx";
import { INavigation } from "../model/navigation-inrerface";

export const Navigation = ({
  heading,
  isActive,
}: {
  heading: INavigation[];
  isActive: string | undefined;
}) => {
  return (
    <aside className="hidden sm:fixed top-24 right-60">
      <ul>
        {heading.map((el, idx) => (
          <li
            key={idx}
            className={clsx(
              "max-w-50 overflow-hidden text-ellipsis  pl-5 hover:border-l-3 hover:border-[var(--primery-light)]",
              isActive === el.id && "border-l-3 border-[var(--primery)]"
            )}
          >
            <a
              href={el.link}
              className={clsx(
                "text-nowrap  overflow-hidden text-ellipsis text-[var(--primery)]",
                el.level === 3 && "font-bold",
                el.level === 4 && "text-[0.875rem] font-normal pl-2"
              )}
            >
              {el.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
