import ChatWindow from "@/components/chat/ChatWindow";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <ChatWindow />
    </div>
  );
}