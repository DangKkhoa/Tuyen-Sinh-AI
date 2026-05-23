"use client";

import AuthForm from "@/components/auth/AuthForm";
// import { signIn } from "@/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const toggleMode = () => {
    setIsSignUp((current) => !current);
  };

  return <AuthForm isSignUp={false} />;
}
