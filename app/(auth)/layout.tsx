import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | TuyenSinhAI",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-[#0b0f1a]">
        <div className="w-full max-w-md space-y-6">{children}</div>
      </div>
    </div>
  );
}
