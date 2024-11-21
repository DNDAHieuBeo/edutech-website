"use client";

import { motion } from "framer-motion";
import Image from "next/image";
interface LoadingOverlayProps {
  isVisible: boolean;

}

export default function LoadingOverlay({ isVisible,  }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image src="mainlogo.svg" alt="mainlogo" width={100} height={100} />
      </motion.h1>
    </motion.div>
  );
}
