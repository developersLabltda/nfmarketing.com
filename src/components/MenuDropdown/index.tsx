import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { title: "Inicio", href: "#" },
  { title: "Sobre", href: "#" },
  { title: "Contato", href: "#" },
];

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleMenuClick}
        className="z-10 inline-flex justify-center items-center w-full px-4 py-2 text-md font-medium text-white  border border-gray-700 rounded-md shadow-sm hover:bg-gray-700"
        whileHover={{ backgroundColor: "#262626" }}
        whileTap={{ backgroundColor: "#1F2937" }}
        transition={{ duration: 0.2 }}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </motion.button>

      <motion.div
        className={`z-10 ${
          isOpen ? "block" : "hidden"
        } absolute h-auto right-0 w-56 mt-4 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}
        initial={false}
        animate={{ y: isOpen ? 10 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={false}
            animate={{
              opacity: isOpen ? 100 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block px-4 py-4 text-md font-semibold text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            {link.title}
          </motion.a>
        ))}
        <div className="z-20 bg-white">Contato</div>
      </motion.div>
    </div>
  );
}

export default MenuMobile;
