"use client";

import { Be_Vietnam_Pro } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese"],
  weight: "400",
});

type Props = {
  value: string,
  onChange: (value: string) => void,
  onSubmit: () => void
}

const Input = ({ value, onChange, onSubmit }: Props) => {
  // const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if(value === "" && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
    }
  }, [value])

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);

    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${Math.min(textArea.scrollHeight, 160)}px`;
    }
  };

  return (
    <textarea
      ref={textAreaRef}
      placeholder="Hỏi về ngành học, điểm chuẩn, hướng nghiệp,..."
      rows={1}
      value={value}
      onChange={handleMessageChange}
      className={`${beVietnam.className} flex-1 resize-none overflow-auto max-h-40 min-h-6 text-sm/normal py-1 focus:outline-none text-white`}
    ></textarea>
  );
};

export default Input;
