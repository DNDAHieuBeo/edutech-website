"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingTextProps {
  onLoadingComplete: () => void;
}

export default function LoadingText({ onLoadingComplete }: LoadingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const targetText = "Student Autonomy in the Digital 4.0 Era"; // Đặt targetText trong LoadingText

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIndex = 0;
    let currentText = "!@$%@!%@!*&@#@&!!@$%@!%@!*&@#@!&*@&^*@$";

    interval = setInterval(() => {
      if (currentIndex < targetText.length) {
        currentText =
          currentText.substring(0, currentIndex) +
          targetText[currentIndex] +
          currentText.substring(currentIndex + 1);

        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Giữ một khoảng thời gian trước khi tắt loading
      }
    }, 50);

    return () => clearInterval(interval);
  }, [targetText, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="font-bold text-blue-500 text-center break-words
                 max-w-xs sm:max-w-full sm:text-4xl text-2xl px-4"
    >
      {displayText}
    </motion.div>
  );
}