import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 flex-none shrink-0 bg-[#111827] border-r border-[#1E2D45] px-3 py-8">
      <div className="flex gap-2 items-center px-3 mb-8">
        <div className="w-8 h-8 bg-linear-to-r from-[#60a5fa] to-[#22d3ee] rounded-lg"></div>
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-linear-135 from-[#60a5fa] to-[#22d3ee]">
          TuyenSinhAI
        </h1>
      </div>
      <button className="w-full py-2.5 px-3.5 text-left text-white font-semibold text-sm bg-linear-135 from-[#3b82f6] to-[#06b6d4] rounded-xl hover:cursor-pointer hover:opacity-90 hover:-translate-y-1 duration-200">
        + Cuộc trò chuyện mới
      </button>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
