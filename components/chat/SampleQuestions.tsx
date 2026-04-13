import React from "react";

const QUESTIONS = [
  { id: 1, content: "📊 Điểm chuẩn 2024 là bao nhiêu ?" },
  { id: 2, content: "🔥 Ngành nào hot nhất hiện nay ?" },
  { id: 3, content: "📋 Các phương thức xét tuyển" },
  { id: 4, content: "🏫 So sánh các trường ĐH TP.HCM" },
  { id: 5, content: "💡 Em nên chọn ngành gì?" },
  { id: 6, content: "📅 Lịch tuyển sinh 2025" },
];

type Props = {
  onSelect: (question: string) => void;
};

const SampleQuestions = ({ onSelect }: Props) => {
  return (
    <div className="flex justify-center flex-wrap gap-2 px-4">
      {QUESTIONS.map((q) => (
        <div
          key={q.id}
          className="py-2 px-4 bg-[#1a2335] text-[#94a3b8] text-[13px] rounded-[20px] border border-[#1e2d45] transition-all duration-100 hover:border-blue-500 hover:cursor-pointer"
          onClick={() => onSelect(q.content)}
        >
          {q.content}
        </div>
      ))}
    </div>
  );
};

export default SampleQuestions;
