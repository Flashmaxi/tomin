"use client";

import Image from "next/image";
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="flex flex-col xl:justify-between items-center mb-[56px]">
          <div className="flex-1 flex flex-col xl:justify-center text-center items-center">
            <h2 className="text-4xl mb-6 text-center mx-auto">O nama</h2>
            <p className="text-[16px] mb-3">
              Pohvalićemo se činjenicom da vodimo poreklo od prvog auto-limara
              sa ovih prostora pa i ne čudi sto je vlasnik naše auto kuće čovek
              koji je ceo svoj život posvetio četvorotočkašima i njihovim
              potrebama. U tradiciji dugoj preko 30 godina uspeli smo da od auto
              perionice proširimo asortiman na sve što će Vašu vožnju činiti
              sigurnom i bezbednom. Kod nas možete oprati vaš automobil na čak 2
              načina,na samouslužnoj perionici ili u robotizovanoj perionici u
              kojoj je dovoljno da se uvezete i 5 minuta odmorite gledajući kako
              robot pere vaš automobil. Zatim možete promeniti ulje u motoru,
              zameniti sve vrste filtera, promeniti gume i izbalansirati iste,
              napuniti klima uređaj, odraditi tehnički pregled,registrovati Vaše
              vozilo, platiti sve račune.
            </p>
            <p className="text-[16px]">
              Rešenje imamo i za one koji nemaju svog četvorotočkaša, ili dolaze
              iz inostranstva pa im je potreban automobil za period dok su u
              obilasku naše zemlje. Tu je naš rent a car sa velikim brojem
              vozila koja su redovno servisirana i sigurna na putu. Poslednje
              ali ne i manje važno je Sanitetski prevoz pacijenata. Naši
              saniteti su spremni da odgovore na sve zahteve i potrebe naših
              pacijenata. Učinićemo Vaše putovanje udobnim,sigurnim i
              dostojanstvenim bilo da se radi o zemlji ili inostranstvu.
            </p>

            <div>
              <div></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
