"use client"; // Ensure this is the first line

import { NAV_LINKS } from "@/constants";
import React from "react";
import HoverBorderGradient from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  return (
    <motion.header
      className="z-40 fixed top-0 left-0 w-full flex justify-center items-center py-4 bg-white dark:bg-transparent"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="w-full px-4 sm:px-16">
        <ul className="flex justify-center items-center gap-8 w-full">
          {NAV_LINKS.map((link) => (
            <li
              key={link.path}
              className={`p-4 ${!link.logo ? "hidden sm:block" : ""}`}
            >
              {link.logo ? (
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  aria-label={`Navigate to ${link.label}`}
                  className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <Image
                    src="/svg/mobile-logo.svg" // Ensure this path is correct
                    alt="Company Logo"
                    width={24}
                    height={24}
                  />
                  <span className=" sm:inline">{link.label}</span>
                </HoverBorderGradient>
              ) : (
                <Link
                  href={link.path}
                  className="text-white hover:text-yellow-500 dark:text-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
