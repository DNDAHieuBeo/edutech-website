"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const UnityKey = () => {
  return (
    <main className="bg-slate-900 text-gray-100">
      {/* Header */}
      <div className="bg-black">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black px-4 sm:px-8 md:px-16 text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/UnityKey/4.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="bg-black bg-opacity-80 p-6 sm:p-8 rounded-xl text-center max-w-lg sm:max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-100">
            Sức Mạnh Của Đoàn Kết
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Đoàn kết là sức mạnh quan trọng trong mọi xã hội và tổ chức, kết nối
            sức mạnh của từng cá nhân để tạo ra lực lượng mạnh mẽ hơn.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Sức mạnh của đoàn kết */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-slate-900">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              Sức mạnh của đoàn kết
            </h2>
            <p className="text-lg text-gray-300">
              Sự hợp tác cho phép chia sẻ tài nguyên, kiến thức và kỹ năng, từ
              đó tăng cường hỗ trợ và xây dựng niềm tin. Đoàn kết cũng giúp giải
              quyết xung đột hiệu quả, duy trì hòa bình và thúc đẩy phát triển
              bền vững. Tóm lại, đoàn kết không chỉ bảo đảm sự tồn tại mà còn là
              điều kiện cần thiết cho thịnh vượng và hạnh phúc.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Image
              src="/UnityKey/1.jpg"
              alt="Đoàn kết"
              className="rounded-lg shadow-lg"
              width={500}
              height={300}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Kỹ năng làm việc nhóm */}
      <section
        className="py-16 px-4 sm:px-8 md:px-16 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/UnityKey/4.jpg')",
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Những Kỹ Năng Làm Việc Nhóm Hiệu Quả
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Kỹ năng lắng nghe",
              description:
                "Quan trọng trong việc tạo niềm tin và sự tôn trọng trong nhóm.",
            },
            {
              title: "Kỹ năng thuyết phục",
              description: "Giúp thúc đẩy quyết định và hướng dẫn nhóm.",
            },
            {
              title: "Phân bổ công việc",
              description:
                "Đảm bảo mọi người đều có vai trò và trách nhiệm rõ ràng.",
            },
            {
              title: "Có trách nhiệm",
              description: "Đảm bảo lợi ích chung và hoàn thành đúng hạn.",
            },
            {
              title: "Xây dựng lòng tin",
              description: "Tạo mối quan hệ bền vững giữa các thành viên.",
            },
            {
              title: "Tôn trong mọi người",
              description:
                "Tất cả thành viên phải tôn trọng ý kiến của các thành viên khác",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-gray-700 p-6 rounded-lg shadow-md hover:border-white"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Bí quyết thuyết trình */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          Bí Quyết Nâng Cao Kỹ Năng Thuyết Trình
        </h2>
        <div className="space-y-8">
          {[
            "Thư Giãn Cơ Thể: Giữ cơ thể thoải mái để tự tin hơn.",
            "Tập Luyện: Thực hành trước gương hoặc nhóm nhỏ.",
            "Nắm Rõ Nội Dung: Hiểu sâu chủ đề để tương tác tốt.",
            "Ngôn Ngữ Cơ Thể: Sử dụng cử chỉ và biểu cảm để thu hút.",
            "Tương Tác Khán Giả: Đặt câu hỏi để tạo không khí thân thiện.",
            "Sắp Xếp Nội Dung: Tổ chức thông tin rõ ràng.",
            "Sử Dụng Công Cụ: Minh họa bằng slide hoặc hình ảnh.",
            "Lắng Nghe Phản Hồi: Ghi nhận ý kiến để cải thiện.",
          ].map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-gray-700 p-4 rounded-md shadow-sm"
            >
              <p className="text-lg text-gray-300">{tip}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="p-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Xem thêm về tầm quan trọng củ tinh thần đoàn kết qua video này
        </h3>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/1sSing6ntVA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default UnityKey;
