"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PersonalBarriers() {
  return (
    <main className="bg-black text-white">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="h-screen bg-fixed bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-8 md:px-16"
        style={{
          backgroundImage: "url('/Barrier/background.webp')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="bg-blue-900 bg-opacity-80 p-6 sm:p-8 rounded-xl text-center max-w-lg sm:max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tự Học và Vượt Qua Bản Thân
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Trang web này giúp bạn khám phá cách vượt qua chính mình, học tập
            hiệu quả và lấy cảm hứng từ những tấm gương sáng.
          </p>
        </motion.div>
      </section>

      {/* Section 1 */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">
          Tại Sao Chính Chúng Ta Là Kẻ Thù Lớn Nhất Của Bản Thân?
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto text-gray-300">
          Trong cuộc sống, mỗi người đều phải đối mặt với những thử thách và trở
          ngại. Tuy nhiên, một trong những kẻ thù lớn nhất mà chúng ta thường
          không nhận ra chính là bản thân mình.
        </p>
      </section>

      {/* Section 2 */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 bg-blue-900 bg-opacity-90 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/Barrier/background2.webp')",
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
          Vượt Lên Chính Mình Để Thành Công
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            "Giữ Suy Nghĩ Tích Cực",
            "Đọc Sách",
            "Tin Tưởng",
            "Học Cách Sống Hiện Tại",
            "Lập Kế Hoạch",
            "Quyết đoán",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black p-4 sm:p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-white text-center"
            >
              <h3 className="text-lg sm:text-xl font-semibold ">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-400">
          Cách Động Viên Bản Thân Học Tập
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-blue-900 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Tự Kỷ Luật & Động Lực Học Tập
            </h3>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-lg text-gray-300">
              <li>Xác định mục tiêu rõ ràng</li>
              <li>Lập kế hoạch học tập hiệu quả</li>
              <li>Tìm kiếm nguồn cảm hứng</li>
              <li>Xây dựng thói quen tích cực</li>
              <li>Đánh giá và điều chỉnh</li>
            </ul>
          </div>
          <div className="bg-blue-900 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Vượt Qua Thử Thách & Tự Tin
            </h3>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-lg text-gray-300">
              <li>Suy nghĩ tích cực</li>
              <li>Tự tin đối mặt thử thách</li>
              <li>Học cách sống hiện tại</li>
              <li>Tìm kiếm sự hỗ trợ</li>
              <li>Đặt mục tiêu thực tế và khả thi</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 bg-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-400 mb-8">
          Những Người Truyền Cảm Hứng
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center bg-blue-900 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <Image
              src="/Barrier/khanhvy.jpg"
              alt="Khánh Vy"
              className="rounded-lg "
              width={150}
              height={150}
            />
            <div className="lg:ml-6 mt-4 lg:mt-0 text-gray-300">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Khánh Vy
              </h3>
              <p className="mt-2">
                Khánh Vy, sinh năm 1999, là một tấm gương sáng trong lĩnh vực
                nghệ thuật. Cô được biết đến như một người truyền cảm hứng cho
                nhiều bạn trẻ. Vào năm 2020, Khánh Vy đã có chuyến đi đến New
                York, tham gia sự kiện American Tour tại Washington. Đến năm
                2022, cô không chỉ tiếp tục hành trình của mình mà còn đảm nhận
                vai trò MC cho các chương trình truyền hình trên VTV.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center bg-blue-900 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <Image
              src="/Barrier/hochiminh.jpg"
              alt="Bác Hồ"
              className="rounded-lg"
              width={150}
              height={150}
            />
            <div className="lg:ml-6 mt-4 lg:mt-0 text-gray-300">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Bác Hồ
              </h3>
              <p className="mt-2">
                Hồ Chí Minh là biểu tượng của tình yêu quê hương và ý chí học
                tập suốt đời.Cuộc đời của Bác là một quá trình vừa học tập vừa
                hoạt động cách mạng. Người là biểu tượng cho tình yêu quê hương
                và văn hóa, luôn gắn bó với các giá trị được UNESCO công nhận.
                Hồ Chí Minh, với những lý tưởng cao đẹp, đã trở thành tấm gương
                sáng cho thế hệ trẻ trong việc tự học và phát triển bản thân.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16">
        <h3 className="text-lg sm:text-xl font-semibold text-center text-blue-400 mb-6">
          Xem thêm cách vượt qua rào cản bản thân qua video này
        </h3>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Gaj7WX7tDIs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default PersonalBarriers;
