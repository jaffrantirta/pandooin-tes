import Image from "next/image";

export default function Nav() {
  return (
    <section className="top-0 z-40 w-full inline-flex justify-center fixed bg-white">
      <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
        <a href="#">
          <Image
            src="https://www.zamrood.com/_next/image?url=%2Fimages%2FLogo-Zamrood.png&w=640&q=75"
            alt="Logo"
            width={150}
            height={75}
          />
        </a>
        <div className="inline-flex items-center gap-6">
          <div className="hidden lg:inline-flex items-center gap-6">
            <a
              href=""
              className="px-6 py-2.5 text-dark-teal text-base font-bold hover:border-white hover:border-b-[2px] border-dark-teal border-b-[2px]"
            >
              Homepage
            </a>
            <a
              href=""
              className="px-6 py-2.5 text-dark-teal text-base font-bold hover:border-white hover:border-b-[2px] false "
            >
              Customize Your Trip
            </a>
            <a
              href=""
              className="px-6 py-2.5 text-dark-teal text-base font-bold hover:border-white hover:border-b-[2px] false"
            >
              Destination
            </a>
            <a
              href=""
              className="px-6 py-2.5 text-dark-teal text-base font-bold hover:border-white hover:border-b-[2px] false"
            >
              Article
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
            >
              <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal w-fit ml-auto">
                Need Assistance?
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
