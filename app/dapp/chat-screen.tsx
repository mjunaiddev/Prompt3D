"use client";

import React, { useRef, useEffect, useState } from "react";
import { VscHistory } from "react-icons/vsc";

/* ---------------- TYPES ---------------- */

export type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

type ChatSession = {
  id: number;
  title: string;
  messages: Message[];
};

/* ---------------- COMPONENT ---------------- */

const ChatScreen = () => {
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [input, setInput] = useState("");

  // Drawer state for mobile/tablet
  const [historyOpen, setHistoryOpen] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const activeChat = chats.find((c) => c.id === activeChatId);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages]);

  const startNewChat = () => {
    if (activeChat && activeChat.messages.length === 0) return;

    const newChat: ChatSession = {
      id: Date.now(),
      title: "Corem ipsum dolor .....",
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    let chatId = activeChatId;

    // Auto-create chat if none exists
    if (!activeChat) {
      const newChat: ChatSession = {
        id: Date.now(),
        title: "Corem ipsum dolor .....",
        messages: [],
      };
      setChats((prev) => [newChat, ...prev]);
      setActiveChatId(newChat.id);
      chatId = newChat.id;
    }

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

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, userMessage, aiMessage] }
          : chat
      )
    );

    setInput("");
  };

  return (
    <div className="flex h-full gap-6 relative">
      {/* ---------------- DESKTOP HISTORY PANEL ---------------- */}
      <div className="hidden md:flex flex-col relative w-[265px] h-[675px] backdrop-blur-[75px] border border-[#B441FF] rounded-[20px] flex-shrink-0 p-4">
        {/* HEADER AT TOP */}
        <div className="flex items-center justify-between text-white mb-4">
          <div className="flex items-center gap-2">
            <VscHistory className="text-2xl" />
            <span>History</span>
          </div>
          <button
            onClick={startNewChat}
            className="text-sm text-white/70 hover:text-white"
          >
            New
          </button>
        </div>

        <div className="h-[600px] overflow-y-auto rewards-scrollbar pr-2">
          {chats.length === 0 ? (
            <div className="h-full flex items-center justify-center text-[#FFFFFF33]">
              Chat History
            </div>
          ) : (
            chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`mb-2 px-3 py-2 rounded-[10px] text-sm cursor-pointer ${
                  chat.id === activeChatId
                    ? "bg-[#FFFFFF1F] text-white"
                    : "text-white/70"
                }`}
              >
                {chat.title}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ---------------- MOBILE / TABLET DRAWER (visible < md) ---------------- */}
      <div className="md:hidden">
        <button
          onClick={() => setHistoryOpen(true)}
          className="absolute top-2 left-7 text-white bg-[#00000033] p-1 rounded-md z-50"
        >
          <VscHistory size={24} />
        </button>

        {historyOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setHistoryOpen(false)}
          />
        )}

        <div
          className={`fixed left-0 top-32 z-50 h-[600px] w-[265px] backdrop-blur-[75px] border border-[#B441FF] rounded-r-[20px] p-4 transition-transform duration-300 ${
            historyOpen ? "translate-x-0" : "-translate-x-[300px]"
          }`}
        >
          <div className="flex items-center justify-between text-white mb-4">
            <div className="flex items-center gap-2">
              <VscHistory className="text-2xl" />
              <span>History</span>
            </div>
            <button
              onClick={startNewChat}
              className="text-sm text-white/70 hover:text-white"
            >
              New
            </button>
          </div>

          <div className="h-[600px] overflow-y-auto rewards-scrollbar pr-2">
            {chats.length === 0 ? (
              <div className="h-full flex items-center justify-center text-[#FFFFFF33]">
                Chat History
              </div>
            ) : (
              chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => {
                    setActiveChatId(chat.id);
                    setHistoryOpen(false);
                  }}
                  className={`mb-2 px-3 py-2 rounded-[10px] text-sm cursor-pointer ${
                    chat.id === activeChatId
                      ? "bg-[#FFFFFF1F] text-white"
                      : "text-white/70"
                  }`}
                >
                  {chat.title}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ---------------- CHAT PANEL ---------------- */}
      <div className="relative flex-1 flex flex-col">
        {/* CHAT BODY */}
        <div className="flex-1 max-h-[585px] overflow-y-auto rewards-scrollbar px-5 py-3 md:py-8 bg-ChatBg bg-no-repeat bg-cover  w-full sm:w-[650px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1300px]">
          {!activeChat || activeChat.messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 md:gap-4">
              <h2 className="text-base md:text-3xl font-semibold text-white">
                AGENTVR
              </h2>
              <p className="max-w-md text-sm text-white/70">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum.
              </p>
            </div>
          ) : (
            activeChat.messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 max-w-[70%] px-4 py-3 rounded-[14px] text-sm text-white ${
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
        <div className="mt-4 w-full sm:w-[650px] lg:w-[600px] xl:w-[950px] lg:ml-20 2xl:ml-44 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Enter promset"
            className="w-full lg:w-[600px] xl:w-[950px] h-[58px] mx-auto backdrop-blur-[75px] rounded-[14px] bg-[#FFFFFF14] border border-[#FFFFFF1F]
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
