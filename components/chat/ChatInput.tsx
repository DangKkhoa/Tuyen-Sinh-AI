'use client'

import React, { useState } from "react";
import Input from "../ui/Input";
import { SendHorizontal } from "lucide-react";

type Props = {
  onSend: (message: string) => void
}

const ChatInput = ({ onSend }: Props) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = () => {
    if(!message.trim()) return ;
    onSend(message);
    setMessage('');
  }
  return (
    <div className="pt-4 px-6 pb-6 bg-(--bg)">
      <div className="max-w-190 m-auto flex items-center gap-2 bg-(--surface) py-2 pr-2 pl-4 rounded-xl border border-(--border) focus-within:border-blue-500 focus-within:shadow-[0_0_10px_5px_rgba(59,130,246,0.1)]">
        <Input value={message} onChange={setMessage} onSubmit={handleSubmit}/>

        <button className="p-2 rounded-md bg-linear-135 from-(--accent) to-(--accent2) hover:cursor-pointer self-end" onClick={handleSubmit}>
          <SendHorizontal color="white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
