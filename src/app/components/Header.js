"use client";

import { useContext, useEffect, useState } from "react";
//next image
import Image from "next/image";

//react scroll
import { Link } from "react-scroll";

//components
import SearchMobile from "./SearchMobile";

//media query hook
import { useMediaQuery } from "react-responsive";

//icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

//search context
import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    //add ev listener
    window.addEventListener("scroll", handleScroll);

    //remove ev listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="home" smooth={true} spy={true} className="cursor-pointer">
            <div className="font-bold text-[38px] text-accent">
              Tomin <span className="text-primary">Auto</span>
            </div>
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer lg:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-300 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={closeMobileMenu}
          >
            Početna
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={closeMobileMenu}
          >
            Automobili
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={closeMobileMenu}
          >
            O nama
          </Link>

          <Link
            className="cursor-pointer"
            to="usluge"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={closeMobileMenu}
          >
            Usluge
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonials"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={closeMobileMenu}
          >
            Recenzije
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={closeMobileMenu}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
