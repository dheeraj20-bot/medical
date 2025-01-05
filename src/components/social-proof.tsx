import brand1 from "../assets/brand_1.png";
import brand2 from "../assets/brand_2.png";
import brand4 from "../assets/brand_4.png";
import brand6 from "../assets/brand_6.png";
import brand8 from "../assets/brand_8.png";
import brand3 from "../assets/brand_3.png";

import { motion } from "framer-motion";

const brands = [brand1, brand2, brand3, brand4, brand6, brand8];

const SocialProof = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 py-16">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.44, 0, 0, 0.1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="text-[18px] font-bold leading-[26px] tracking-[-0.126px] text-[#2f2b43]"
      >
        Trusted by the best
      </motion.p>

      <motion.div 
      initial={{opacity:0,y:50}}
      whileInView={{
        opacity:1,
        y:0,
        transition:{
          duration:0.8,
          ease:[0.44,0,0,0.1]
        }
      }}
      viewport={{
        amount:"some",
        once:true,
      }}
      
      className=" flex flex-wrap items-center justify-evenly gap-6">
        {brands.map((brand) => (
          <img
            src={brand}
            key={brand}
            alt="logo-1"
            className="w-[120px] mx-4"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default SocialProof;
