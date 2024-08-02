import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-full w-full flex justify-center items-center">
      <div className="flex flex-col">
        <div className="bg-white border border-gray-300 flex flex-col">
          <div>
          <Image src="/news.png" height="500" width="746" alt="news"/>
          </div>
          <div className="text-[#2348BD] mx-8 mt-8 font-semibold">
          ЭДИЙН ЗАСАГ
          </div>
          <div className="text-black mx-8 mt-8 font-bold text-2xl">
            <p>Гадаадын хөрөнгө оруулагчид <br/></p>  
            харилцаанд маш бага оролцож байна
          </div>
          <div className="text-[#959499] mx-8 mt-8 font-semibold mb-2">
            С.Ангирмаа / 5 сарын 27, 2024
          </div>
        </div>
      </div>
     
    
    </main>
  );
}
