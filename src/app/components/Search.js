import React from "react";
//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "/variants";

const stats = [
  {
    value: "30",
    text: "Godina iskustva",
  },
  {
    value: "8",
    text: "Članova tima",
  },
  {
    value: "20k+",
    text: "Zadovoljnih klijenata",
  },
  {
    value: "6",
    text: "Različitih vrsta usluga",
  },
];

const Stats = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-accent rounded-[20px] p-2 lg:p-12"
    >
      <div className="flex flex-wrap gap-y-8">
        {stats.map((item, index) => {
          return (
            <div
              className="min-h-[70px] w-3/6 flex flex-col justify-center items-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none"
              key={index}
            >
              <div className="text-2xl text-white font-semibold lg:text-4xl">
                {item.value}
              </div>
              <div className="text-base text-white font-light lg:max-w-[280px] mx-auto lg:text-xl">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Stats;
