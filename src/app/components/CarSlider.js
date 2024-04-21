"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";

//car data

const cars = [
  {
    type: "SUV",
    name: "Ford Kuga",
    image: "/images/carSlider/kuga2.png",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Manuelni",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "5 sedišta",
      },
      {
        icon: "/icons/carSlider/gas.svg",
        text: "Dizel",
      },
    ],
  },

  {
    type: "Mali auto",
    name: "Opel Corsa",
    image: "/images/carSlider/corsa.png",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Automatik",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "5 sedišta",
      },
      {
        icon: "/icons/carSlider/gas.svg",
        text: "Dizel",
      },
    ],
  },

  {
    type: "Porodični auto",
    name: "VW Passat",
    image: "/images/carSlider/passat.png",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Automatik",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "5 sedišta",
      },
      {
        icon: "/icons/carSlider/gas.svg",
        text: "Dizel",
      },
    ],
  },

  {
    type: "Srednji auto",
    name: "Škoda Fabia",
    image: "/images/carSlider/fabia.png",
    info: [
      {
        icon: "/icons/carSlider/gearshift.svg",
        text: "Automatik",
      },
      {
        icon: "/icons/carSlider/seat.svg",
        text: "5 sedišta",
      },
      {
        icon: "/icons/carSlider/gas.svg",
        text: "Dizel",
      },
    ],
  },
];

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <h2 className="text-center mx-auto text-2xl mb-[36px]">
        Neki od automobila koje imamo u ponudi u sklopu našeg rent a cara
      </h2>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0 h-[320px]">
                <Image
                  src={car.image}
                  width={380}
                  height={100}
                  className="mx-auto max-h-[200px]"
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                  </div>
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10 ">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary h-12 w-12 rounded-full flex justify-center items-center">
                          <Image src={item.icon} width={24} height={24} />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <a href="tel:+381648594545" className="btn btn-accent btn-lg">
                Rezerviši automobil
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
