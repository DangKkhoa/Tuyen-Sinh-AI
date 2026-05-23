import React from "react";

const Header = () => {
  return (
    <div className="shrink-0 flex justify-between items-center px-6 py-4 border-b border-[#1e2d45] bg-[#0b0f1a] ">
      <select className="rounded-xl border border-[#1e2d45] bg-[#111827] px-3 py-2 text-sm text-[#e2e8f0] outline-none transition duration-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 hover:border-[#3b82f6]/50 cursor-pointer">
        <option value="fast">Trả lời nhanh</option>
        <option value="thinking">Trả lời chi tiết</option>
      </select>
      <div className="*:px-2.5 *:py-1 *:rounded-[20px] text-[12px]">
        <span className="border border-[#1e3a5f] text-[#60a5fa] bg-[#0d1f3c] mr-2">
          Dữ liệu năm 2025
        </span>
        <span className="border border-[#064e3b] text-[#34d399] bg-[#022c22] mr-2">
          Trực tuyến
        </span>
      </div>
    </div>
  );
};

export default Header;
