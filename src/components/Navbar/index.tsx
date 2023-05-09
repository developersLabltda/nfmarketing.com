import React from "react";
import MenuMobile from "../MenuDropdown";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="container max-w-md md:mx-auto flex flex-row items-center py-4 px-6 justify-between sm:gap-x-8 bg-[#404040] md:rounded-b-lg">
      <img src="/images/NF.png" alt="icon" className="w-16 max-w-xs" />
      <div className="block md:hidden self-end">
        <MenuMobile />
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
