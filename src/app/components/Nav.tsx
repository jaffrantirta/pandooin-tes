import Image from "next/image";

export default function Nav() {
  return (
    <section className="top-0 z-40 w-full inline-flex justify-center fixed">
        <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
            <a href="#">
                <Image src="/LogoZamrood-12.png" alt="Logo" width={100} height={100}/>
            </a>
            <div className="inline-flex items-center gap-6">
                <div className="hidden lg:inline-flex items-center gap-6">
                    <a href="" className="px-6 py-2.5 text-white text-base font-bold hover:border-b-dark-teal hover:border-b-[2px] border-b-dark-teal border-b-[2px]">Homepage</a>
                    <a href="" className="px-6 py-2.5 text-white text-base font-bold hover:border-b-dark-teal hover:border-b-[2px] false">Customize Your Trip</a>
                    <a href="" className="px-6 py-2.5 text-white text-base font-bold hover:border-b-dark-teal hover:border-b-[2px] false">Destination</a>
                    <a href="" className="px-6 py-2.5 text-white text-base font-bold hover:border-b-dark-teal hover:border-b-[2px] false">Article</a>
                </div>
            </div>
        </div>
    </section>
  );
}
