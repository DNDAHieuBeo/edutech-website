"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    title: "Khảo Sát",
    description:
      "Xây dựng bộ câu hỏi nghiên cứu và bộ câu hỏi khảo sát",
  },
  {
    title: "Nghiên cứu",
    description:
      "Chúng tôi sẽ thực hiện nghiên cứu và phân tích kỹ lưỡng về ngành, đối thủ cạnh tranh và các nỗ lực tiếp thị kỹ thuật số hiện tại của bạn.",
  },
  {
    title: "Giải Pháp",
    description:
      "Dựa trên nghiên cứu của chúng tôi, chúng tôi sẽ phát triển một chiến lược phù hợp với nhu cầu của bạn.",
  },
  {
    title: "Kết quả",
    description:
      "Chúng tôi sẽ nghiên cứu và phân tích kết quả của chiến lược, đảm bảo rằng nó mang lại giá trị và đáp ứng mục tiêu của bạn",
  },
];

export default function WorkingProcess() {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const toggleStep = (index: number) => {
    setOpenIndexes((prevOpenIndexes) => ({
      ...prevOpenIndexes,
      [index]: !prevOpenIndexes[index],
    }));
  };

  return (
    <section className="py-8 px-4 md:px-32 overflow-y-auto">
      {" "}
      {/* Xóa max-h-screen */}
      <div className="text-center mb-8">
        <div className="text-xl font-bold bg-maincolor w-fit px-4 py-2 rounded-full mx-auto">
          <Reveal>
            <h2>GIAI ĐOẠN NGHIÊN CỨU</h2>
          </Reveal>
        </div>
        <div className="mt-4 text-white px-16 text-center max-w-3xl mx-auto">
          <Reveal>
            <p>
              Từng bước một tiến đến sự nâng cấp chính bản thân trong thời đại
              chuyển đổi số
            </p>
          </Reveal>
        </div>
      </div>
      <div className="space-y-4 max-w-2xl mx-auto w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-maincolor rounded-[30px] p-4 shadow-[0px_6px_6px_rgba(0,0,0,0.4)]"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(index)}
            >
              <Reveal>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold">{`0${index + 1}`}</span>
                  <h3 className="text-xl font-semibold ">{step.title}</h3>
                </div>
              </Reveal>
              <Reveal>
              {openIndexes[index] ? (
                <MinusCircle size={32} className="text-white" />
              ) : (
                <PlusCircle size={32} className="text-white" />
              )}
              </Reveal>
            </div>

            <AnimatePresence initial={false}>
              {openIndexes[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.75 }}
                  className="overflow-hidden mt-4"
                >
                  <hr className="border-gray-300 my-4" />
                  <p className="text-black">{step.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
