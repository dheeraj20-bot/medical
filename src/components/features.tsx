import arrow from "../assets/arrow.svg";
import security from "../assets/icon-1.png";
import health from "../assets/icon-2.png";
import care from "../assets/icon-3.png";
import doc from "../assets/icon-4.png";
import serve from "../assets/services-1.png";
import provide from "../assets/banner-11.png";
import banner from "../assets/banner_right.png";
import patient from "../assets/banner-six-2.png";

import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center justify-center gap-6 border-t border-[#e2e4e9] px-6
               py-16 md:px-10 xl:px-[159px] "
    >
      <div
        className="flex w-full flex-col  items-start justify-between gap-8 xl:flex-row xl:items-end
                      3xl:max-w-[1200px]"
      >
        <div className="flex flex-col">
          {/* Sub label  */}
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
            className="text-gradient text-sm font-bold leading-6 md:text-base"
          >
            Wie Wij Zijn
          </motion.p>
          {/* heading  */}
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 0.1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px] 
          md:text-[36px] text-[#0e1829] md:leading-[44px]"
          >
            The Great Place of Eyecare Hospital Center
          </motion.h3>
          {/* Description  */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.44, 0, 0, 0.1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="mt-5 w-full text-[20px] text-base font-medium leading-6 text-[#445469] md:w-[655px] md:leading-[30px]"
          >
            Altijd maar zoeken naar die ene perfecte vacature? Wij maken het
            makkelijk voor je! Geen eindeloze websites meer, geen recruiters die
            je niet begrijpen, en nooit meer gedoe met het oppoetsen van je CV
            of schrijven van motivatiebrieven.
          </motion.p>
        </div>
        {/* learn more  */}
        <button
          className="flex h-[56px] w-[180px] items-center group relative
         overflow-hidden justify-center gap-3 rounded-full border-2 border-blue-900 text-base font-medium leading-[28px]
          text-[#445568]  hover:text-white  shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] "
        >
          <div
            className=" absolute  -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[208px]
             rounded-full bg-blue-900 transition-all duration-300 group-hover:h-[59px]"
          />
          <span>Book Now</span>
          <img src={arrow} alt="" className="group-hover:invert" />
        </button>
      </div>

      {/* First Row  */}
      <div
        className="relative mt-5 flex w-full flex-col  items-center justify-between gap-8
         md:mt-0 md:flex-row xl:gap-0 3xl:max-w-[1200px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0, 0.1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="card-gradient-one flex h-[600px] w-full flex-col items-center justify-between overflow-hidden 
           rounded-[40px] border border-[#ced5de] lg:w-[486px]"
        >
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Unique Approach To Your Health Needs
            </h4>
            <p className=" mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Embrace the convience of healthcare with our Telemedicine Services
              at Mavis Clinic. Experience virtual consulations.
            </p>
          </div>
          <img src={serve} alt="Serve" className="w-[400px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0, 0.1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="card-gradient-two flex h-[600px] w-full flex-col items-center justify-between overflow-hidden 
           rounded-[40px] border border-[#ced5de] lg:w-[690px]"
        >
          <div className="w-full px-12 pb-8 pt-12">
            <img src={health} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              The Heartbeat of Healthcare
            </h4>
            <p className=" mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Your health and well-being are at the heart of everything we do.
              We understand that each patient is unique, and we are dedicated to
              providing personalized, compassionate care tailored to your
              specific needs.
            </p>
          </div>
          <img
            src={patient}
            alt="Serve"
            className="-mt-28 absolute right-0 w-[200px] lg:w-[32%] bottom-0"
          />
        </motion.div>
      </div>

      {/* Second Row  */}
      <div
        className="relative mt-5 flex w-full flex-col  items-center justify-between gap-8
         md:mt-0 md:flex-row xl:gap-0 3xl:max-w-[1200px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0, 0.1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="card-gradient-three  flex h-[600px] w-full flex-col items-center justify-between overflow-hidden 
           rounded-[40px] border border-[#ced5de] lg:w-[690px]"
        >
          <div className="w-full relative px-12 pb-8 pt-12">
            <img src={care} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Desination for Dental Excellence
            </h4>
            <p className=" mt-4 lg:w-[75%] text-base font-medium  leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Our dedicated team of medical professionals is here to guide you
              on your health journey. From our experienced doctors to our
              skilled support staff.
            </p>
          </div>
          <img
            src={banner}
            alt="Serve"
            className="-mt-28  relative w-[65%] lg:w-[45%] left-0 lg:left-[11.75rem]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0, 0.1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="card-gradient-four flex h-[600px] w-full flex-col items-center justify-between overflow-hidden 
           rounded-[40px] border border-[#ced5de] lg:w-[486px]"
        >
          <div className="w-full px-12 pb-8 pt-12">
            <img src={doc} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Cosmetic excellence and personalized care.
            </h4>
            <p className=" mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              we believe that beauty is more than just skin deep-its about
              embracing your uniqueness, enhancing your confidence, and
              celebrating your individuality.
            </p>
          </div>
          <img src={provide} alt="Serve" className="w-[400px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
