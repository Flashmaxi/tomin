"use client";

import { FaPhone, FaEnvelope } from "react-icons/fa";

import Copyright from "./Copyright";

//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";

import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20">
      <div className="container mx-auto mb-24">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <div className="font-bold text-[38px] text-accent">
                Tomin <span className="text-primary">Auto</span>
              </div>
            </Link>
            <div className="text-secondary">
              Glavni cilj nase Auto kuće je vaša bezbednost, sigurna vožnja i
              poverenje koje svakodnevno stičemo od naših klijenata pune 3
              decenije.
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <a
                  href="tel:+381 64 311 31 13"
                  className="text-black font-medium"
                >
                  +381 64 311 31 13
                </a>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <a href="+381 64 859 45 45" className="text-black font-medium">
                  +381 64 859 45 45
                </a>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <a
                  href="mailto:tominauto.doo@gmail.com"
                  className="text-black font-medium"
                >
                  tominauto.doo@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Kompanija</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <Link
                    to={"o nama"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    O nama
                  </Link>
                </li>
                <li>
                  <Link
                    to={"usluge"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Usluge
                  </Link>
                </li>
                <li>
                  <Link
                    to={"cars"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Automobili
                  </Link>
                </li>
                <li>
                  <Link
                    to={"testimonials"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Recenzije
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Radno vreme</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Pon-Pet:</div>
                <div className="font-semibold">07:00-16:00</div>
              </div>

              <div className="flex gap-x-2">
                <div className="text-secondary">Subota:</div>
                <div className="font-semibold">Neradni dan</div>
              </div>

              <div className="flex gap-x-2">
                <div className="text-secondary">Nedelja:</div>
                <div className="font-semibold">Neradni dan</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
