import Sidebar from "@/components/layout/Sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-[#0B0F1A]">
      <Sidebar />

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}