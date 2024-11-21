"use client";

import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import Footer from "@/components/Footer";
const TheProcrastinationSyndrome = () => {
  return (
    <main className=" bg-gradient-to-r from-black to-blue-900">
      {/* Header */}
      <div className="bg-black">
        <Header />
      </div>

      {/* Hero Section */}

      <div className="relative">
        <div
          className="h-[500px] bg-cover w-full bg-no-repeat flex flex-col items-center justify-center text-white text-center"
          style={{
            backgroundImage: "url('/TheProcrastinationSyndrome/img1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Reveal>
            <div className="relative z-10">
              <h1 className="text-3xl font-extrabold mb-4 md:text-5xl">
                Căn bệnh trì hoãn
              </h1>

              <p className="text-lg max-w-3xl leading-relaxed px-6 md:text-xl">
                Trì hoãn là chần chừ, chậm trễ trong giải quyết vấn đề, nhiệm
                vụ, công việc được giao dẫn đến mất rất nhiều thời gian để có
                thể hoàn thành mục tiêu đặt ra ban đầu. Đây là một trong những
                thói quen không tốt, gặp ở nhiều người nhưng không phải ai cũng
                nhận ra.
              </p>
            </div>
          </Reveal>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:py-16 space-y-16">
        {/* Part 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 ">
                Trì hoãn trong học tập
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Nghĩ rằng mọi người chưa làm bài nên từ từ làm bài cũng được. Bị
                thu hút bởi các trò chơi và mạng xã hội quên thời gian. Không
                thực hiện lượng bài tập được giao trong ngày luôn mà dồn đến
                cuối tuần rồi mới làm.
              </p>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal>
              <Image
                src="/TheProcrastinationSyndrome/img2.jpg"
                alt="Trì hoãn học tập"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </Reveal>
          </div>
        </div>

        {/* Part 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Trì hoãn trong công việc
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Không thực hiện công việc đã đặt ra theo lộ trình ban đầu. Có
                khả năng, điều kiện thực hiện công việc ngay lập tức nhưng thoái
                thác, chậm trễ. Thường xuyên chậm deadline và để công việc tích
                tụ lại.
              </p>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal>
              <Image
                src="/TheProcrastinationSyndrome/img3.jpg"
                alt="Căn bệnh trì hoãn"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </Reveal>
          </div>
        </div>

        {/* Part 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Nguyên nhân của thói quen trì hoãn
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                - Lười biếng, quyết tâm không cao.
                <br />
                - Nuông chiều bản thân quá mức.
                <br />- Dễ bị phân tâm bởi nhiều thứ khác ngoài công việc.
              </p>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/3">
            <Reveal>
              <Image
                src="/TheProcrastinationSyndrome/img4.png"
                alt="Trì hoãn học tập"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </Reveal>
          </div>
          <div className="w-full lg:w-1/3">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Tác hại của căn bệnh trì hoãn
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                - Lãng phí thời gian. <br />
                - Làm mất niềm tin và sự tôn trọng từ người khác.
                <br />- Luôn ở trong tình thế gấp gáp, căng thẳng, chạy đua với
                thời gian.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Tips Section */}
        <div className="px-4 sm:px-8 md:px-12 py-16 bg-gradient-to-r from-gray-900 to-slate-800 text-white rounded-xl">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
              Làm thế nào để ngăn chặn sự trì hoãn và hoàn thành công việc
            </h2>
          </Reveal>

          <ul className="list-decimal list-inside space-y-4 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <Reveal>
              <li>Đặt ra mục tiêu cụ thể</li>
            </Reveal>
            <Reveal>
              <li>Quản lý chặt chẽ thời gian</li>
            </Reveal>
            <Reveal>
              <li>Đánh dấu những công việc cần ưu tiên</li>
            </Reveal>
            <Reveal>
              <li>Tuân thủ nghiêm ngặt theo một kế hoạch đã đặt ra từ trước</li>
            </Reveal>
            <Reveal>
              <li>Giải quyết những công việc khó khăn trước</li>
            </Reveal>
            <Reveal>
              <li>Ghi chú</li>
            </Reveal>
            <Reveal>
              <li>Phân bổ thời gian hợp lý</li>
            </Reveal>
            <Reveal>
              <li>Hãy luôn là một người có trách nhiệm</li>
            </Reveal>
            <Reveal>
              <li>Hãy hành động</li>
            </Reveal>
            <Reveal>
              <li>Sử dụng những quãng nghỉ ngắn</li>
            </Reveal>
            <Reveal>
              <li>Áp dụng công nghệ vào công việc hàng ngày</li>
            </Reveal>
            <Reveal>
              <li>Giới hạn thời gian cho mỗi công việc</li>
            </Reveal>
            <Reveal>
              <li>Nghỉ trưa</li>
            </Reveal>
          </ul>
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
              Xem thêm cách ngăn chặn sự trì hoãn qua video này
            </h3>
            <div className="flex justify-center">
              <iframe
                className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/52lZmIafep4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default TheProcrastinationSyndrome;
