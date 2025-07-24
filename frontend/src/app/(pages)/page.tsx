import {
  CaphionTitle,
  MainTitle,
  SubText,
  SubTitle,
  Text,
  Title,
} from "@/shared";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <MainTitle text="Main Title" className="" />
      <Title text="Hading" className="" />
      <SubTitle text="Sub Haading" className="" />
      <CaphionTitle text="Caphion Haading" className="" />
      <Text text="text" className="text-stone-600" />
      <SubText text="Sub Text" className="text-stone-600" />
    </div>
  );
}
