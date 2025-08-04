import { SidebarLink } from "@/entities";
import { SubText, Tag } from "@/shared";
import clsx from "clsx";
import { ReactNode } from "react";

export const SidebarGroup = ({
  isClose,
  data,
  className,
  button,
}: {
  isClose: boolean;
  data: {
    id: string;
    text: string;
    link: string;
    icon: ReactNode;
    tag?: string;
  }[];
  className?: string;
  button?: ReactNode;
}) => {
  return (
    <div className={clsx(" py-6", className)}>
      {data.map((el) => (
        <SidebarLink
          key={el.id}
          text={el.text}
          href={el.link}
          isClose={isClose}
          icon={el.icon}
          tag={
            el.tag && (
              <Tag
                className={clsx(
                  isClose &&
                    " absolute top-[-0.75rem] left-0 border-2 border-[var(--white)]"
                )}
              >
                <SubText text={el.tag} className="whitespace-nowrap" />
              </Tag>
            )
          }
        />
      ))}
      {button}
    </div>
  );
};
