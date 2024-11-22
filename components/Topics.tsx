"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { motion } from "framer-motion";

import { useState } from "react";
import LoadingOverlay from "./ui/LoadingOverlay";

export default function Topics() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      window.location.href = link;
    }, 1500); // Sau 1.5 giây mới chuyển sang trang mới
  };

  const topics = [
    {
      title: "CĂN BỆNH TRÌ HOÃN",
      description: "Learn more",
      imgSrc: "/topic-image-1.svg",
      bgColor: "bg-maincolor",
      link: "/TheProcrastinationSyndrome",
    },
    {
      title: "SỰ QUAN TRỌNG CỦA KỈ LUẬT",
      description: "Learn more",
      imgSrc: "/topic-image-2.svg",
      bgColor: "bg-maincolor",
      link: "/TheImportanceOfDiscipline",
    },
    {
      title: "RÀO CẢN BẢN THÂN",
      description: "Learn more",
      imgSrc: "/topic-image-3.svg",
      bgColor: "bg-white",
      link: "/PersonalBarriers",
    },
    {
      title: "ĐOÀN KẾT LÀ CHÌA KHÓA",
      description: "Learn more",
      imgSrc: "/topic-image-4.svg",
      bgColor: "bg-white",
      link: "/UnityKey",
    },
  ];

  return (
    <section className="py-8 md:py-16 md:px-32">
      <LoadingOverlay isVisible={isLoading} />
      <div className="text-center mb-10">
        <div className="text-xl font-bold bg-maincolor w-fit px-4 py-2 rounded-full mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold text-black bg-maincolor w-fit px-4 py-2 rounded-full mx-auto">ĐỀ TÀI NGHIÊN CỨU</h2>
          </Reveal>
        </div>
        <div className="mt-4 text-white px-16 text-center max-w-3xl mx-auto">
          <Reveal>
            <p>
            Đây là những nghiên cứu , ở mọi khía cạnh vs lĩnh vực mà học sinh thời nay trong xã hội hiện đại hay gặp phải 
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-8 py-8 px-4 lg:px-32 ">
          {topics.map((topic, index) => (
            <a
              href={topic.link}
              onClick={(e) => handleLinkClick(e, topic.link)}
              key={index}
              className={`${topic.bgColor} rounded-[30px] p-8 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 w-full sm:w-[calc(50%-16px)]`}
            >
              <div className="flex justify-between h-full">
                <div className="flex flex-col justify-between h-full">
                  <h3 className="font-semibold text-2xl mb-4">{topic.title}</h3>

                  <motion.div
                    className="flex items-center mt-auto cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white rounded-full p-1">
                      <ArrowUpRight size={25} />
                    </div>
                    <p className="p-2">{topic.description}</p>
                  </motion.div>
                </div>

                {/* Hình ảnh */}
                <div className="ml-4 flex items-center">
                  <Image
                    src={topic.imgSrc}
                    alt={topic.title}
                    className=""
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
