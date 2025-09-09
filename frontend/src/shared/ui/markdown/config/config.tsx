import { Title, SubTitle, CaphionTitle, Text } from "../../text";

export const madkdonwSetting = (
  Ref: (el: HTMLHeadingElement | null) => void
) => {
  return {
    h2: ({ node, children }: any) => {
      return (
        <Title
          text={children}
          id={`${node.children[0].value.replace(/ /g, "")}`}
          className="my-3 scroll-mt-5"
        />
      );
    },
    h3: ({ node, children }: any) => {
      return (
        <SubTitle
          text={children}
          id={`${node.children[0].value.replace(/ /g, "")}`}
          className="my-3 scroll-mt-5"
          ref={Ref}
        />
      );
    },
    h4: ({ node, children }: any) => (
      <CaphionTitle
        text={children}
        id={`${node.children[0].value.replace(/ /g, "")}`}
        className="my-2 scroll-mt-5"
        ref={Ref}
      />
    ),
    p: ({ children }: any) => (
      <Text text={children} className="my-2 text-[var(--gray)]" />
    ),
    li: ({ children, ...props }: any) => (
      <li className="ml-6 list-disc my-1 text-[var(--black)] leading-[140%] text-[calc(1rem*var(--text-scale))] marker:text-[var(--primery)]">
        {children}
      </li>
    ),
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-[var(--primery)] mb-10 pl-4  mt-2"
        {...props}
      />
    ),
    a: (props: any) => (
      <a
        className="text-[var(--primery)] leading-[140%] text-medium text-[calc(1rem*var(--text-scale))]"
        {...props}
      />
    ),
    hr: () => <div className="my-4 w-full h-1" />,
  };
};
