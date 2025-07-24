import Image from "next/image";
const api = process.env.API_URL;

export default function Home() {
  console.log(api, "dsa");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      docker
      {api}
    </div>
  );
}
