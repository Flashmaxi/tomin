"use client";

import Image from "next/image";
//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10"
      id="contact"
    >
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container my-24 mx-auto md:px-6"
      >
        <div className="flex flex-wrap items-center">
          <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <div className="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11375.81684322204!2d19.2245971!3d44.5365701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47596199d071d2ff%3A0xe1d0eefe7c6824f!2sTomin!5e0!3m2!1sen!2srs!4v1713697932414!5m2!1sen!2srs"
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="ml-6 grow">
                    <h3 className="mb-2 text-2xl font-bold text-black">
                      Tehnički pregled
                    </h3>
                    <a href="tel:+381 64 311 31 13" className="text-black">
                      +381 64 311 31 13
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="ml-6 grow">
                    <h3 className="mb-2 text-2xl font-bold text-black">
                      Rent a car
                    </h3>
                    <a href="+381 64 859 45 45" className="text-black">
                      +381 64 859 45 45
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                <div className="align-start flex">
                  <div className="ml-6 grow">
                    <h3 className="mb-2 text-2xl font-bold text-black">
                      Email
                    </h3>
                    <a
                      href="mailto:tominauto.doo@gmail.com"
                      className="text-black"
                    >
                      tominauto.doo@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="align-start flex">
                  <div className="ml-6 grow">
                    <h3 className="mb-2 text-2xl font-bold text-black">
                      Sanitetski prevoz
                    </h3>
                    <a href="+381 64 859 45 45" className="text-black">
                      +381 64 859 45 45
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
