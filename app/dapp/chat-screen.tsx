"use client";

import React, { useRef, useEffect, useState } from "react";
import { VscHistory } from "react-icons/vsc";
import { Message } from "./page"; // or correct relative path

type Props = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
};

const ChatScreen = ({ messages, setMessages, history, setHistory }: Props) => {
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    const aiMessage: Message = {
      id: Date.now() + 1,
      role: "ai",
      text: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setHistory((prev) => [`Corem ipsum dolor .....`, ...prev]);
    setInput("");
  };

  return (
    <div className="flex gap-6 h-full">
      {/* ---------------- HISTORY PANEL ---------------- */}
      <div className="relative w-[265px] h-[675px] backdrop-blur-[75px] border border-[#B441FF] rounded-[20px] flex-shrink-0 p-4">
        <div className="flex items-center gap-2 text-white mb-4">
          <VscHistory className="text-2xl" />
          <span>History</span>
        </div>

        <div className="h-[600px] overflow-y-auto rewards-scrollbar pr-2">
          {history.length === 0 ? (
            <div className="h-full flex items-center justify-center text-[#FFFFFF33]">
              Chat History
            </div>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                className={`mb-2 px-3 py-2 rounded-[10px] text-sm cursor-pointer
                  ${
                    index === 0 ? "bg-[#FFFFFF1F] text-white" : "text-white/70"
                  }`}
              >
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ---------------- CHAT PANEL ---------------- */}
      <div className="relative flex-1 flex flex-col">
        {/* CHAT BODY */}
        <div className="flex-1 w-[1300px] max-h-[585px] overflow-y-auto rewards-scrollbar px-5 py-8 bg-ChatBg bg-no-repeat">
          {messages.length === 0 ? (
            <div className="h-full  flex flex-col items-center justify-center text-center gap-4">
              <h2 className="text-3xl font-semibold text-white">AGENTVR</h2>
              <p className="max-w-md text-sm text-white/70">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum.
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 max-w-[70%] px-4 py-3 rounded-[14px] text-sm text-white
                  ${
                    msg.role === "user"
                      ? "ml-auto bg-[#FFFFFF1F]"
                      : "mr-auto bg-[#FFFFFF14]"
                  }`}
              >
                {msg.text}
              </div>
            ))
          )}
          <div ref={chatEndRef} />
        </div>

        {/* PROMPT INPUT */}
        <div className="mt-4 w-[950px] ml-44 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Enter promset"
            className="w-[950px] h-[58px] mx-auto backdrop-blur-[75px] rounded-[14px] bg-[#FFFFFF14] border border-[#FFFFFF1F]
                       px-5 pr-14 text-white placeholder:text-white/40 outline-none"
          />

          <button
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-white flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13"
                stroke="#8A2BE2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="#8A2BE2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
