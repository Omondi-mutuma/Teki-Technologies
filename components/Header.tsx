import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="flex px-4 py-4 items-center justify-between w-full">
      {/* Logo */}
      <Image src={"/svg/mobile-logo.svg"} alt="Logo" width={32} height={32} />

      <div className="hidden lg:flex items-center justify-center gap-28">
        {/* Navigation */}
        <nav className="flex items-center justify-center">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link, index) => (
              <li
                key={index}
                className="relative hover:text-yellow-100 cursor-pointer group"
              >
                <Link href={link.path} className="title-16">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 ml-6">
          <Button label="Login" variant="" />

          <Button label="Get started" variant="filled" />
        </div>
      </div>

      {/* Hamburger Menu */}
      <GiHamburgerMenu
        size={24}
        className="lg:hidden hover:text-yellow-100 cursor-pointer transition-colors"
      />
    </header>
  );
};

export default Header;
