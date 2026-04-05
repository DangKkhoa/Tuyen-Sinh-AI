import React from "react";

const QUESTIONS = [
  { id: 1, question: "📊 Điểm chuẩn 2024 là bao nhiêu ?" },
  { id: 2, question: "🔥 Ngành nào hot nhất hiện nay ?" },
  { id: 3, question: "📋 Các phương thức xét tuyển" },
  { id: 4, question: "🏫 So sánh các trường ĐH TP.HCM" },
  { id: 5, question: "💡 Em nên chọn ngành gì?" },
  { id: 6, question: "📅 Lịch tuyển sinh 2025" },
];

const SampleQuestions = () => {
  return (
    <div className="flex justify-center flex-wrap gap-2 px-4">
      {QUESTIONS.map((q) => (
        <div
          key={q.id}
          className="py-2 px-4 bg-[#1a2335] text-[#94a3b8] text-[13px] rounded-[20px] border border-[#1e2d45]"
        >
          {q.question}
        </div>
      ))}
    </div>
  );
};

export default SampleQuestions;
