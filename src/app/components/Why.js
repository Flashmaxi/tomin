"use client";
import {
  MdWork,
  MdChecklist,
  MdOutlineAdd,
  MdCarRental,
  MdCarRepair,
  MdLocalCarWash,
} from "react-icons/md";

//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";

export default function Why() {
  return (
    <section className="steps mt-[120px] py-[56px]" id="usluge">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="mx-auto">
          <h2 className="text-4xl mb-6 text-center mx-auto">Naše usluge</h2>
          <p className="mb-6 text-center mx-auto">
            Ovde možete proveriti asortiman usluga koje nudimo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 mb-36">
          <div className="steps__step text-center">
            <div className="mb-4">
              <MdChecklist className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Tehnički pregled</h3>
            <p className="mb-5 max-w-md mx-auto">
              -Tehnički pregled uz upotrebu najsavremenijih mašina, sa
              izdavanjem nalepnice bez zakazivanja. -Osiguranje putnika i
              stakala. -Paketi pomoći na putu. -Uplata komunalnih taksi i svih
              računa. Tehnički pregled za automobile, skutere i motocikle.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <MdCarRental className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Rent a car</h3>
            <p className="mb-5 max-w-md mx-auto">
              Za naše pacijente samo najbolje. Sigurni, brzi i komforni saniteti
              sa profesionalnim osobljem na čelu, učiniće vaš put što je moguće
              prijatnijim. Bilo da se radi o našoj zemlji ili inostranstvu, mi
              smo tu da odgovorimo na sve potrebe i zahteve.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <MdOutlineAdd className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Sanitetski prevoz</h3>
            <p className="mb-5 max-w-md mx-auto">
              Asortiman naših vozila je veliki i možete izabrati automobil po
              svojoj meri, potrebi i cenovnom rangu koji vama odgovara. Svi
              automobili su osigurani i dajemo garanciju na ispravnost vozila.
              Uslovi za iznajmljivanje naših automobila su: Obavezna lična
              dokumenta, ugovorna obaveza i depozit.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <MdLocalCarWash className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Auto perionica</h3>
            <p className="mb-5 max-w-md mx-auto">
              Najsavremenije samouslužne i robot perionica, tako kod nas možete
              oprati vaš automobil na čak 2 načina,na samouslužnoj perionici ako
              volite sami da vodite računa o čistoći vašeg ljubimca ili pak u
              robotizovanoj perionici u kojoj je dovoljno da se uvezete i 5
              minuta odmorite gledajući kako robot pere vaš automobil.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <MdCarRepair className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Auto servis</h3>
            <p className="mb-5 max-w-md mx-auto">
              U našem objektu je moguće uraditi mali servis i manje popravke
              automobila koje su potrebne da bi Vaš automobil uspešno prošao
              tehnički pregled vozila. Kao i zamenu i balansiranje guma na Vašem
              automobilu.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <MdWork className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Osiguranje putnika i automobila</h3>
            <p className="mb-5 max-w-md mx-auto">
              Osiguranje putnika i automobila pruža zaštitu od nepredviđenih
              događaja tokom putovanja i vožnje. Ova usluga osigurava pokriće za
              štetu nastalu u saobraćajnim nesrećama, kao i za krađu ili
              oštećenje vozila. Ovaj oblik osiguranja omogućava putnicima i
              vozačima da se osećaju sigurno i zaštićeno dok su na putu,
              pružajući im mir uma i finansijsku bezbednost u slučaju nezgoda
              ili problema.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
