"use client";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Topics from "@/components/Topics";
import WorkingProcess from "../components/WorkingProcess";
import CaseStudies from "@/components/CaseStudies";
import LoadingText from "@/components/ui/LoadingText"; // Import component LoadingText
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const topicsRef = useRef<HTMLDivElement | null>(null);

  const handleGetStartedClick = () => {
    if (topicsRef.current) {
      topicsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log('topicsRef không có giá trị');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cover w-full flex items-center justify-center">
      <AnimatePresence>
        {isLoading ? (
          <LoadingText onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-cover w-full bg-no-repeat bg-blue-500"
            style={{
              backgroundImage: "url('/background.png')",
            }}
          >
            <section className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory">
              <Header />
              <Introduction onGetStartedClick={handleGetStartedClick} />
            </section>
            <div ref={topicsRef} className="">
              <Topics />
              <WorkingProcess />
              <CaseStudies />
              <Footer/>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
