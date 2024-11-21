"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";

const TheImportanceOfDiscipline = () => {
  return (
    <main className="bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-black">
        <Header />
      </div>

      {/* Hero Section */}
      <div
        className="h-screen bg-fixed bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{
          backgroundImage: "url('/Discipline/background.jpg')",
        }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="bg-black p-8 text-center max-w-2xl sm:max-w-3xl rounded-lg"
        >
          <p className="text-base sm:text-lg">
            Sự kỷ luật là khả năng tự quản lý và kiểm soát hành vi của bản thân
            để đạt được những mục tiêu, giá trị hoặc nguyên tắc đã đề ra. Nó bao
            gồm việc duy trì sự kiên nhẫn, tự giác và cam kết trong việc thực
            hiện các nhiệm vụ, ngay cả khi gặp khó khăn hoặc cám dỗ.
          </p>
        </motion.div>
      </div>

      {/* Steps Section */}
      <SectionWithAnimation>
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center px-4 sm:px-8">
          CÁC BƯỚC LẬP KẾ HOẠCH HỌC TẬP
        </h1>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white hidden md:block"></div>

          <div className="space-y-16">
            {/* Step 1 */}
            <StepAnimation>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mr-0 md:mr-8">
                <div className="w-full md:w-1/2 md:text-right">
                  <h3 className="text-xl sm:text-2xl font-bold">1. Chuẩn bị</h3>
                  <p className="text-gray-300 text-sm sm:text-base mt-2">
                    Phân tích hành vi, thói quen học tập và thời gian thực hiện:
                    Có thể học nhiều môn cùng lúc hay chỉ tập trung mỗi lần một
                    chủ đề? Học vào buổi tối hay buổi sáng?...
                  </p>
                </div>
              </div>
            </StepAnimation>

            {/* Step 2 */}
            <StepAnimation>
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 ml-0 md:ml-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    2. Bắt đầu xây dựng bảng kế hoạch học tập
                  </h3>
                  <ul className="text-gray-300 text-sm sm:text-base mt-2">
                    <li>Tên các môn học hoặc các kỹ năng</li>
                    <li>Mục tiêu sau khóa học là gì?</li>
                    <li>
                      Các nhiệm vụ liên quan cần thực hiện, thời gian cụ thể của
                      các công việc này.
                    </li>
                    <li>
                      Note lại những điểm cần lưu ý có thể xảy ra mà bạn hay
                      quên.
                    </li>
                  </ul>
                </div>
              </div>
            </StepAnimation>

            {/* Step 3 */}
            <StepAnimation>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mr-0 md:mr-8">
                <div className="w-full md:w-1/2 md:text-right">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    3. Thực hiện, theo dõi và chỉnh sửa
                  </h3>
                  <ul className="text-gray-300 text-sm sm:text-base mt-2">
                    <li>
                      Tránh các trường hợp thay đổi vì sự lười biếng của bản
                      thân hoặc những tác động không cần thiết.
                    </li>
                    <li>
                      Phải đánh giá sự tiến bộ trong quá trình học tập cũng như
                      các kết quả đã đạt được so với lúc ban đầu và so với chỉ
                      tiêu đề ra.
                    </li>
                  </ul>
                </div>
              </div>
            </StepAnimation>

            {/* Step 4 */}
            <StepAnimation>
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 ml-0 md:ml-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    4. Kiên trì theo sát kế hoạch học tập
                  </h3>
                  <ul className="text-gray-300 text-sm sm:text-base mt-2">
                    <li>
                      Cần rèn luyện sự kiên nhẫn và tính tự giác cho bản thân
                      mình.
                    </li>
                    <li>
                      Kiên trì thực hiện, không bỏ dở kế hoạch học tập. Cố gắng
                      hoàn thành trọn vẹn từ những mục tiêu nhỏ đến những mục
                      tiêu lớn hơn.
                    </li>
                  </ul>
                </div>
              </div>
            </StepAnimation>
          </div>
        </div>
      </SectionWithAnimation>

      {/* Image and Text Section */}
      <div
        className="h-screen bg-fixed bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 gap-8"
        style={{
          backgroundImage: "url('/Discipline/background.jpg')",
        }}
      >
        {/* Hình ảnh */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <Image
            src="/Discipline/example.jpg"
            alt="Trì hoãn học tập"
            className="rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            width={300}
            height={350}
          />
        </motion.div>

        {/* Văn bản */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-white space-y-4 bg-gray-900 p-8 sm:p-16 rounded-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Vai trò của kỷ luật trong thành công
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed">
            David Goggins, một cựu lính SEAL của Hải quân Mỹ và tác giả nổi
            tiếng, coi sự kỷ luật là một yếu tố then chốt để đạt được thành công
            và vượt qua thử thách. Theo ông, sự kỷ luật không chỉ là việc tuân
            theo các quy tắc, mà là khả năng kiểm soát bản thân và thực hiện
            những điều cần thiết, mặc dù có thể gặp khó khăn hoặc không thoải
            mái.
          </p>
          <p className="text-sm sm:text-lg leading-relaxed">
            Goggins nhấn mạnh rằng, không phải tài năng mà chính kỷ luật giúp
            con người đạt được những điều vĩ đại trong cuộc sống.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="p-28"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 justify-center">
          Xem thêm tính kĩ luật qua video này
        </h3>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
            src=" https://www.youtube.com/embed/K8ZgwZf1E3E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      <Footer/>
    </main>
  );
};

export default TheImportanceOfDiscipline;

const SectionWithAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      {children}
    </motion.section>
  );
};

const StepAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
