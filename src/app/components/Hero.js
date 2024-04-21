"use client";

import { useContext } from "react";
//components
import Search from "./Search";
import { SearchContext } from "../context/search";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "/variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section
      className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10  mb-[100px]"
      id="home"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              3 <span className="text-accent">decenije</span> sa Vama
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mb-6"
            >
              Glavni cilj nase Auto kuće je vaša bezbednost, sigurna vožnja i
              poverenje koje svakodnevno stičemo od naših klijenata pune 3
              decenije.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <a className="btn btn-accent btn-lg" href="tel:+381648594545">
                <button>Kontaktiraj nas</button>
              </a>
              <Link
                className="cursor-pointer btn btn-primary btn-lg"
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                <button>Saznaj više</button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vh] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={"images/hero/car.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="-mt-12 w-full max-w-[1300px] mx-auto"
        >
          <Search />
        </motion.div>
      )}
    </section>
  );
}
