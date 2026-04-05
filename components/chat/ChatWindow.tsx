import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto py-8">
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
