import { motion } from "framer-motion"
const Navbar = () => {

  return (
    <nav
    className="fixed top-[19px] left-0 right-0 z-[50] mx-[24px] flex h-[65px] items-center justify-between rounded-[32px] bg-white/10
     px-6 shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 outline-white/[38%] backdrop-blur-[4px] md:mx-[40px] md:h-[80px]
     md:px-8 xl:mx-[95px] 3xl:mx-auto 3xl:max-w-[1250px]"
    >
      <div className="flex items-center justify-center gap-10">
        <a href="/">
          <h5
          className="font-extrabold text-blue-700 text-lg w-[120px] cursor-pointer md:w-[142px]"
          >Medio Zorg</h5>
        </a>

        <div>
          <a href=""></a>
        </div>
      </div>

      <motion.button
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
            className="group border-2 border-violet-900 relative h-[56px] w-[180px] 
          overflow-hidden bg-blue-900 rounded-full gap-3 text-base font-medium z-0 flex items-center 
          justify-center leading-[28px] shadow-[0_1px_2px_rgba(14,24,41,0.05)]
             md:h-[60px] md:w-[202px] md:text-[18px]"
          >
            <div
              className="absolute  -left-1 bottom-0 right-0 z-10 !mx-auto h-[0px] w-[207px]
             rounded-full  transition-all duration-300 group-hover:h-[61px]"
            />
            <span className="text-white  group-hover:text-white  z-10">
              Discover More
            </span>
          </motion.button>
    </nav>
  );
};

export default Navbar;
