// "use client";

// import { Markdonw } from "@/shared";
// import { useDocsPage } from "../hook/useDocsPage";

// export const DocsPage = ({ content }: { content: string }) => {
//   const { GoUp, Navigation, refs } = useDocsPage();

//   return (
//     <div
//       ref={refs.RefScroll}
//       className="max-h-[87dvh] overflow-y-scroll scroll-smooth"
//     >
//       {GoUp}

//       {Navigation}

//       <div
//         ref={refs.RefMarkdown}
//         className="w-4/5 xl:w-1/2 mx-auto mb-11 scroll-smooth"
//       >
//         <Markdonw Ref={refs.onderverRef} content={content} />
//       </div>
//     </div>
//   );
// };
