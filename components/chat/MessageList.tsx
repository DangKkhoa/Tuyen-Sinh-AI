import React, { useState } from "react";
import SampleQuestions from "./SampleQuestions";
import { Message } from "@/types";

type Props = {
  messages: Message[];
};

const MessageList = ({ messages }: Props) => {
  // const [messages, setMessages] = useState([]);

  return (
    <div className="flex-1 w-190 m-auto px-6">
      <div className="">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} mb-2`}
          >
            <div
              className={`w-fit whitespace-pre-wrap py-2 px-4 rounded-2xl text-(--text) ${m.role === "user" ? " bg-(--user-bubble) rounded-br-sm" : "bg-(--ai-bubble) border border-(--border)"}`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
