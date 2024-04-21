"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";
import Image from "next/image";
const testimonialData = [
  {
    avatar: "/images/testimonial/avatar.png",
    name: "Marko K.",
    message: "“Profesionalnost na zavidnom nivou. Sve preporuke!”",
  },
  {
    avatar: "/images/testimonial/avatar.png",
    name: "Marija A.",
    message:
      "“Njihova posvećenost kvalitetu i profesionalizmu čini ih pravim partnerom za sve vozače koji traže pouzdan tehnički pregled.”",
  },
  {
    avatar: "/images/testimonial/avatar.png",
    name: "Milenko M.",
    message:
      "“Njihova stručnost i posvećenost čine ih izuzetnim pružaocem usluga tehničkog pregleda.”",
  },
];
export default function TestimonialSlider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="h-[450px] xl:h-[400px]"
    >
      {testimonialData.map((person, index) => {
        const { avatar, message, name } = person;
        return (
          <SwiperSlide key={index}>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <FaQuoteLeft className="text-7xl text-accent mb-6" />
              <div className="text-2xl xl:text-4xl max-w-[847px] mb-12 font-medium">
                {message}
              </div>
              <Image src={avatar} width={64} height={64} />
              <div className="text-lg font-medium">{name}</div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
