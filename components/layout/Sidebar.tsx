"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LogIn, LogOut } from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const Sidebar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <aside className="w-64 flex-none flex flex-col shrink-0 bg-[#111827] border-r border-[#1E2D45] px-3 py-8">
      <div className="flex gap-2 items-center px-3 mb-8">
        <div className="w-8 h-8 bg-linear-to-r from-[#60a5fa] to-[#22d3ee] rounded-lg"></div>
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-linear-135 from-[#60a5fa] to-[#22d3ee]">
          TuyenSinhAI
        </h1>
      </div>
      <button className="w-full py-2.5 px-3.5 text-left text-white font-semibold text-sm bg-linear-135 from-[#3b82f6] to-[#06b6d4] rounded-xl hover:cursor-pointer hover:opacity-90 hover:-translate-y-1 duration-200">
        + Cuộc trò chuyện mới
      </button>

      <ul className="mt-6 space-y-2 flex-1 overflow-y-auto">
        <li className="px-3 py-2 rounded-lg hover:bg-[#1e2d45] hover:cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#64748b] rounded-sm" />
            <span className="text-sm text-[#94a3b8]">Cuộc trò chuyện 1</span>
          </div>
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-[#1e2d45] hover:cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#64748b] rounded-sm" />
            <span className="text-sm text-[#94a3b8]">Cuộc trò chuyện 2</span>
          </div>
        </li>
      </ul>
      <div className="border-t border-[#1E2D45] pt-4 mt-4">
        {/* if user is logged in, show user info with logout, else show login option */}
        {!isLoading && user ? (
          <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#1e2d45]">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-lg bg-linear-135 from-[#3b82f6] to-[#06b6d4] flex items-center justify-center text-white font-semibold text-sm">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user.name}
                </p>
                <p className="text-xs text-[#64748b] truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="ml-2 p-1.5 rounded-lg text-[#64748b] hover:text-red-400 hover:bg-[#0b1322] duration-200"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#94a3b8] hover:bg-[#1e2d45] hover:text-white duration-200 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1a2335] border border-[#1e2d45] flex items-center justify-center group-hover:border-[#3b82f6] duration-200">
              <LogIn
                size={15}
                className="text-[#64748b] group-hover:text-[#60a5fa] duration-200"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Đăng nhập</p>
              <p className="text-xs text-[#64748b]">Lưu lịch sử chat</p>
            </div>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
