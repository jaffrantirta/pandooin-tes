import React from "react";

export default function LuxuryFottage() {
  return (
    <>
      <section className="bg-[#D6B66B] lg:mt-[72px]">
        <div className="pt-12 p-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl mx-auto lg:text-left flex flex-col space-y-6">
          <h2 className="font-the-signature text-[52px] lg:text-[72px] text-dark-teal">
            Luxury Footages
          </h2>
          <div className="relative w-full aspect-[356/256]">
            <div className="w-full lg:grid grid-cols-3 gap-6">
              <div className="relative w-full aspect-[356/256] cursor-pointer">
                <img
                  src="/gallery1.png"
                  alt=""
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-0"
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </div>
              <div className="relative w-full aspect-[356/256] cursor-pointer">
                <img
                  src="/gallery2.png"
                  alt=""
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-0"
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </div>
              <div className="relative w-full aspect-[356/256] cursor-pointer">
                <img
                  src="/gallery2.png"
                  alt=""
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-0"
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </div>
              <div className="col-span-full">
                <img src="/Separator-02.svg" alt="" />
              </div>
              <div className="relative w-full aspect-[356/256] cursor-pointer">
                <img
                  src="/gallery1.png"
                  alt=""
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-0"
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </div>
              <div className="relative w-full aspect-[356/256] cursor-pointer">
                <img
                  src="/gallery2.png"
                  alt=""
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-0"
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </div>
              <div className="relative w-full aspect-[356/256] cursor-pointer">
                <img
                  src="/gallery2.png"
                  alt=""
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-0"
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
