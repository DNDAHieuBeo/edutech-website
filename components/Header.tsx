"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full py-4 px-12 ">

      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="flex items-center"
        >
          <Image
            src="/edutech-logo.svg"
            alt="EduTech Wellness Logo"
            width={200}
            height={80}
            className="mr-4"
          />
        </motion.div>
        </Link>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <Image
            src="/circular-logo.png"
            alt="Circular Logo"
            width={80}
            height={80}
          />
        </motion.div>
      </div>
    </header>
  );
}
