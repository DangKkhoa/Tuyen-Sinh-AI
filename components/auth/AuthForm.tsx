import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";
import { mockUsers } from "@/mockData/users";

type AuthFormProps = {
  isSignUp: boolean;
};

const AuthForm = ({ isSignUp }: AuthFormProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //   const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    // Mock authentication with mock data
    const user = mockUsers.find((u) => u.email === email);

    if (isSignUp) {
      // Sign up: check if email already exists
      if (user) {
        alert("Email đã được sử dụng");
        return;
      }
      console.log("Sign up successful for:", email);
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
    } else {
      // Login: validate credentials
      if (!user) {
        alert("Email không tồn tại");
        return;
      }

      if (user.password !== password) {
        alert("Mật khẩu không chính xác");
        return;
      }

      console.log("Login successful for:", user);

      // Store user data in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }),
      );

      alert(`Đăng nhập thành công! Xin chào ${user.name}`);

      // Redirect to home page
      router.push("/");
    }

    // TODO: Uncomment axios code when backend is ready
    // try {
    //   const response = await axios.post(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`,
    //     { email, password },
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Login error:", error);
    // }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  //   const toggleMode = () => {
  //     setIsSignUp((current) => !current);
  //   };

  return (
    <>
      <div className="rounded-4xl border border-[#1e2d45] bg-[#111827] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#60a5fa]">
            {isSignUp ? "Đăng ký" : "Đăng nhập"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            {isSignUp ? "Bắt đầu với TuyenSinhAI" : "Chào mừng trở lại"}
          </h1>
          <p className="mt-3 text-sm text-[#94a3b8]">
            {isSignUp
              ? "Tạo tài khoản để sử dụng trợ lý tuyển sinh AI và tra cứu dữ liệu nhanh chóng."
              : "Truy cập dữ liệu tuyển sinh và trợ lý AI theo cùng giao diện tối của trang chủ."}
          </p>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mb-4 flex w-full items-center justify-center gap-3 rounded-2xl border border-[#1e2d45] bg-[#0b1322] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:cursor-pointer hover:border-[#3b82f6] hover:bg-[#081024]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0f172a]">
            <Image src="/google-logo.png" alt="Google" width={15} height={15} />
          </span>

          {isSignUp ? "Đăng ký với Google" : "Đăng nhập với Google"}
        </button>

        <div className="relative mb-6 text-center text-sm text-[#94a3b8]">
          <span className="relative z-10 bg-[#111827] px-3">hoặc</span>
          <div className="absolute left-0 top-1/2 h-px w-full bg-[#1e2d45]" />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm text-[#94a3b8]">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-[#1e2d45] bg-[#0b0f1a] px-4 py-3 text-sm text-white outline-none transition duration-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
            />
          </label>

          <label className="block text-sm text-[#94a3b8]">
            Mật khẩu
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-[#1e2d45] bg-[#0b0f1a] px-4 py-3 pr-12 text-sm text-white outline-none transition duration-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#94a3b8] hover:cursor-pointer duration-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {isSignUp && (
            <label className="block text-sm text-[#94a3b8]">
              Xác nhận mật khẩu
              <div className="relative mt-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-[#1e2d45] bg-[#0b0f1a] px-4 py-3 pr-12 text-sm text-white outline-none transition duration-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#94a3b8] duration-200"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </label>
          )}

          {!isSignUp && (
            <div className="flex items-center justify-between text-sm text-[#94a3b8]">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-[#1e2d45] bg-[#0b0f1a] text-[#3b82f6] focus:ring-[#3b82f6]"
                />
                Ghi nhớ đăng nhập
              </label>
              <button
                type="button"
                className="text-[#60a5fa] hover:text-[#93c5fd]"
              >
                Quên mật khẩu?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-135 from-[#3b82f6] to-[#06b6d4] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 hover:cursor-pointer"
          >
            {isSignUp ? "Đăng ký" : "Đăng nhập"}
          </button>
        </form>
      </div>
      <div className="rounded-4xl border border-[#1e2d45] bg-[#0b1221] p-5 text-sm text-[#94a3b8]">
        <p className="font-semibold text-white inline-block mr-2">
          {isSignUp ? "Bạn đã có tài khoản?" : "Chưa có tài khoản?"}
        </p>
        <Link
          href={isSignUp ? "/login" : "/signup"}
          className="inline-block text-sm text-[#60a5fa] hover:text-[#93c5fd]"
        >
          {isSignUp ? "Đăng nhập ngay" : "Đăng ký ngay"}
        </Link>
      </div>
    </>
  );
};

export default AuthForm;
