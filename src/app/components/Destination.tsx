"use client";
import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
export default function Destination() {
  const [itineraries, setItineraries] = useState([]);
console.log(itineraries);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pandooin.com/api/zamrood/itinerary?highlight=true');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItineraries(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    <section className="p-4 w-full max-w-7xl mx-auto">
      <div className="py-6 w-full flex flex-col sm:flex-row items-start gap-6">
        <h2 className="my-auto w-fit text-left text-dark-teal font-unbounded font-bold text-[22px] lg:text-4xl">
          Destinations
        </h2>
        <div className="w-fit flex items-center">
          <a
            href=""
            className="group w-fit inline-flex gap-4 items-center cursor-pointer"
          >
            <img
              src="/Frame26086156.svg"
              alt="frame26123"
              className="stroke-dark-teal group-hover:stroke-tan transition-colors ease-in-out duration-300"
            />
            <span className="uppercase text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
              Explore more
            </span>
          </a>
        </div>
      </div>
     
      <div className="w-full flex flex-col">
      {itineraries.map((itinerary, index) => (
        <>
        <div key={index} className="py-4 lg:py-[72px] w-full flex flex-col lg:odd:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch">
         <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
           <div className="w-full flex flex-col space-y-2">
               <span className="text-left text-xs lg:text-base">{itinerary.itinerary_day} {itinerary.itinerary_day > 1 ? 'DAYS' : 'DAY'}</span>
               <strong className="text-left text-dark-aquaman text-base lg:text-4xl font-bold line-clamp-2">{itinerary.itinerary_name}</strong>
               <span className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold">Organized by {itinerary.partner_name}</span>
               <p className="text-left text-sm lg:text-base text-dark-teal line-clamp-4">{itinerary.itinerary_short_description}</p>
           </div>
           <div className="mt-auto w-full inline-flex justify-between items-center">
               <div className="flex flex-col">
                   <span className="text-left text-dark-teal text-xs lg:text-base">Start from</span>
                   {itinerary.related_variant?.itinerary_variant_disc_price != 0 ? (
                     <span className="text-gray-400 line-through font-medium text-sm lg:text-3xl">IDR {new Intl.NumberFormat('id-ID').format(itinerary.related_variant?.itinerary_variant_disc_price)}</span>
                  
                   ):(<></>)}

                   
                   <span className="text-left font-unbounded text-dark-teal text-lg lg:text-[28px] font-medium">IDR {new Intl.NumberFormat('id-ID').format(itinerary.related_variant?.itinerary_variant_pub_price)}</span>
               </div>
               <a href="#" className="mt-10">
                   <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal ">
                   See Details
                   </button>
               </a>
           </div>
         </div>
      <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="mySwiper"
    >
          {itinerary.related_galleries.map((gallery, index) => (
            <> 
             <SwiperSlide key={index}>
              <img
                src={`https://ik.imagekit.io/pandooin/tr:pr-true/${gallery.gallery_path}`}
                alt={gallery.gallery_alt_text}
                className="object-cover object-center transition-opacity ease-in-out duration-300 opacity-100"
              />
             </SwiperSlide>
            
            </>
             
          ))}
           </Swiper>
      </div>
       </div>
        </>
      ))}
        
      </div>
    </section>
    <section className="w-full max-w-7xl mx-auto py-[54px] lg:py-[26px] px-4">
        <div className="w-full inline-flex justify-center lg:justify-end">
            <a href="" className="group w-fit inline-flex gap-4 items-center cursor-pointer">
            <img
              src="/Frame26086156.svg"
              alt="frame26123"
              className="stroke-dark-teal group-hover:stroke-tan transition-colors ease-in-out duration-300"
            />
            <span className="uppercase text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
              Explore more
            </span>
            </a>
        </div>
    </section>
    </>
  );
}
