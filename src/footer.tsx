
import { motion } from "framer-motion"

const Footer = () => {
  const footerLinks = [
    { title: "Appointment", items: ["Schedule", "Book", "Pricing"] },
    { title: "Help", items: ["First Aid", "Help centre", "Support"] },
    { title: "Services", items: ["Government", "Private", "Doctors"] },
    { title: "Company", items: ["About Us", "Careers", "Contact"] },
  ]
  return (
    <footer
    className="relative flex h-auto w-full flex-col items-center justify-center
    gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-10 md:pb-12 md:pt-16 xl:px-[112px]"
    >
     <h1 className="text-5xl md:text-7xl font-bold">
     Medio Zorg
     </h1>
     <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex justify-center space-x-6 mb-4">
            {["Facebook", "Twitter", "Instagram"].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
          <p>&copy; 2025 Mediprime. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
