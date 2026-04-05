import React from "react";
import SampleQuestions from "./SampleQuestions";

const MessageList = () => {
  const messages = [];
  return (
    <div className="flex-1 max-w-190 m-auto px-6">
      {messages.length <= 0 ? (
        <div className="flex flex-col justify-center items-center py-10 px-6 h-[60vh]">
          <div className="w-16 h-16 bg-linear-135 from-[#3b82f6] to-[#06b6d4] mb-6 shadow-[0px_0px_40px_rgba(59,130,246,0.3)]"></div>
          <h3 className="text-[#94a3b8] text-3xl font-semibold mb-3">
            Chào mừng đến TuyenSinhAI
          </h3>
          <p className="max-w-md text-center text-[#64748b] mb-8">
            Trợ lý tư vấn tuyển sinh thông minh — hỏi về ngành học, điểm chuẩn,
            phương thức xét tuyển, hay bất kỳ điều gì bạn muốn biết.
          </p>
          <SampleQuestions />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MessageList;
