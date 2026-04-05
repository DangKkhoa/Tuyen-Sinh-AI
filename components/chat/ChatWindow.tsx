'use client'

import React, { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Message } from "@/types";

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([])
  console.log(messages);
  const handleSend = (message: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
      createdAt: new Date()
    }

    setMessages(prev => [...prev, newMessage]);
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden py-8">
      <MessageList messages={messages}/>
      <ChatInput onSend={handleSend}/>
    </div>
  );
};

export default ChatWindow;
