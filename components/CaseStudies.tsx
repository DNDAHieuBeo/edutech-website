"use client";

import { Reveal } from "./ui/Reveal";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Phương pháp nghiên cứu lý thuyết là gì?",
      description: `
Phương pháp nghiên cứu lý thuyết là một cách tiếp cận trong nghiên cứu khoa học, tập trung vào việc phát triển, phân tích và kiểm nghiệm các lý thuyết hoặc mô hình lý thuyết.

**Đặc điểm:**
- **Tổng hợp tài liệu:** Thu thập và phân tích các tài liệu nghiên cứu trước đó.
- **Phát triển lý thuyết:** Đề xuất hoặc điều chỉnh các lý thuyết hiện có.
- **Phân tích logic:** Kiểm tra tính nhất quán và hợp lý.
- **Kiểm nghiệm lý thuyết:** Dựa trên phân tích lý thuyết, không nhất thiết cần dữ liệu thực nghiệm.

**Ý nghĩa:**
- Xây dựng nền tảng nghiên cứu thực nghiệm.
- Mở rộng hiểu biết và giải thích các hiện tượng một cách sâu sắc.
      `,
    },
    {
      title: "Các phương pháp nghiên cứu thực tiễn",
      description: `
**1. Phương pháp chọn vùng:**
- **Định nghĩa:** Xác định khu vực hoặc đối tượng nghiên cứu cụ thể.
- **Ý nghĩa:** Đảm bảo mẫu đại diện, tăng độ chính xác.

**2. Phương pháp điều tra xã hội học:**
- **Định nghĩa:** Thu thập dữ liệu qua khảo sát ý kiến, hành vi cá nhân.
- **Ý nghĩa:** Phân tích xu hướng xã hội và mối quan hệ.

**3. Phương pháp phỏng vấn:**
- **Định nghĩa:** Thu thập thông tin qua trò chuyện trực tiếp.
- **Ý nghĩa:** Khai thác thông tin chi tiết và quan điểm cá nhân.

**4. Phương pháp thực nghiệm khoa học:**
- **Định nghĩa:** Thiết kế và thực hiện thí nghiệm để kiểm nghiệm giả thuyết.
- **Ý nghĩa:** Xác định mối quan hệ nguyên nhân - kết quả giữa các biến.

**5. Phương pháp thống kê mô tả:**
- **Định nghĩa:** Sử dụng kỹ thuật thống kê để mô tả và tóm tắt dữ liệu.
- **Ý nghĩa:** Trình bày dữ liệu rõ ràng, rút ra kết luận.

**6. Phương pháp tổng hợp:**
- **Định nghĩa:** Kết hợp thông tin từ nhiều nguồn.
- **Ý nghĩa:** Xây dựng cái nhìn toàn diện, hỗ trợ khuyến nghị.
      `,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16">
      {/* Tiêu đề chung */}
      <div className="text-center mb-8">
        <div className="text-xl font-bold bg-maincolor w-fit px-4 py-2 rounded-full mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold text-black bg-maincolor w-fit px-4 py-2 rounded-full mx-auto">
              Phương pháp nghiên cứu
            </h2>
          </Reveal>
        </div>
        <div className="mt-4 text-white px-16 text-center max-w-3xl mx-auto">
          <Reveal>
            <p>
            Tìm hiểu về các phương pháp nghiên cứu lý thuyết và phương pháp nghiên cứu thực tiễn.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Nội dung các phần */}
      <div className="bg-maincolor rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="flex flex-col text-left p-6 rounded-lg"
            >
              <Reveal>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {study.title}
                </h3>
              </Reveal>
              <Reveal>
                <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                  {study.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
