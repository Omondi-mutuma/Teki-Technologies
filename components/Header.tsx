import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="flex px-8 py-4 items-center justify-between">
      {/* Logo */}
      <Image src={"/svg/mobile-logo.svg"} alt="Logo" width={32} height={32} />

      {/* Navigation */}
      <nav className="items-center justify-between hidden lg:flex">
        <ul className="flex gap-8">
          {NAV_LINKS.map((link, index) => (
            <li
              key={index}
              className="relative p-1 hover:text-yellow-100 cursor-pointer group"
            >
              <Link href={link.path} className="title-16">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="gap-4 items-center hidden md:flex">
        <Button label="Login" variant="" />
        <Button label="Get started" variant="filled" />
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
