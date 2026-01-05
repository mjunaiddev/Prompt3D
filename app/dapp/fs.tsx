"use client";

import React, { useRef, useEffect, useState } from "react";
import { VscHistory } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";

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
  const [isHistoryOpen, setIsHistoryOpen] = useState(false); // Controls mobile sidebar

  const chatEndRef = useRef<HTMLDivElement>(null);
  const activeChat = chats.find((c) => c.id === activeChatId);

  // Auto-scroll to latest message
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
    setIsHistoryOpen(false); // Close sidebar on mobile
  };

  const handleSend = () => {
    if (!input.trim() || !activeChatId) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    const aiMessage: Message = {
      id: Date.now() + 1,
      role: "ai",
      text:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: [...chat.messages, userMessage, aiMessage] }
          : chat
      )
    );

    setInput("");
    setIsHistoryOpen(false); // Close sidebar after sending
  };

  const selectChat = (chatId: number) => {
    setActiveChatId(chatId);
    setIsHistoryOpen(false);
  };

  const toggleHistory = () => {
    setIsHistoryOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen bg-transparent text-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-[#B441FF]/30">
        <h2 className="text-2xl font-semibold">AGENTVR</h2>
        <button
          onClick={toggleHistory}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          aria-label="Toggle history"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* History Sidebar - Mobile: Slide-in | Desktop: Fixed */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-50 w-[265px] 
            bg-black/40 backdrop-blur-[75px] border-r border-[#B441FF]
            flex flex-col
            transition-transform duration-300 ease-in-out
            ${isHistoryOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          {/* Mobile Overlay */}
          {isHistoryOpen && (
            <div
              onClick={() => setIsHistoryOpen(false)}
              className="fixed inset-0 bg-black/60 lg:hidden z-40"
            />
          )}

          {/* Sidebar Content */}
          <div className="relative h-full flex flex-col p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <VscHistory className="text-2xl" />
                <span className="font-medium text-lg">History</span>
              </div>
              <button
                onClick={startNewChat}
                className="text-sm text-white/70 hover:text-white transition"
              >
                New
              </button>
            </div>

            <div className="flex-1 overflow-y-auto rewards-scrollbar pr-2">
              {chats.length === 0 ? (
                <div className="h-full flex items-center justify-center text-[#FFFFFF33] text-center px-4">
                  No chat history yet.<br />Start a new conversation!
                </div>
              ) : (
                <div className="space-y-2">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => selectChat(chat.id)}
                      className={`
                        px-4 py-3 rounded-xl text-sm cursor-pointer transition-all
                        ${chat.id === activeChatId
                          ? "bg-[#FFFFFF1F] text-white shadow-md"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {chat.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-transparent">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto rewards-scrollbar px-4 sm:px-8 md:px-12 lg:px-20 py-6 lg:py-10">
            <div className="max-w-5xl mx-auto w-full">
              {!activeChat || activeChat.messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-8 px-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    AGENTVR
                  </h1>
                  <p className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et velit interdum.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {activeChat.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`
                        max-w-[85%] sm:max-w-[75%] lg:max-w-[70%]
                        px-5 py-4 rounded-2xl text-sm sm:text-base
                        ${msg.role === "user"
                          ? "ml-auto bg-[#FFFFFF1F] border border-white/10"
                          : "mr-auto bg-[#FFFFFF14] border border-white/5"
                        }
                      `}
                    >
                      {msg.text}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 pb-6 lg:pb-8 pt-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Enter prompt"
                  className="w-full h-14 sm:h-16 lg:h-[68px] 
                             backdrop-blur-[75px] bg-[#FFFFFF14] 
                             border border-[#FFFFFF1F] rounded-2xl
                             px-6 pr-16 text-white
                             placeholder:text-white/40
                             outline-none focus:border-[#B441FF] 
                             transition-all duration-200"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || !activeChatId}
                  className="absolute right-4 top-1/2 -translate-y-1/2 
                             w-10 h-10 sm:w-12 sm:h-12 
                             rounded-full bg-white flex items-center justify-center
                             disabled:opacity-50 disabled:cursor-not-allowed
                             hover:scale-110 active:scale-95 transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 2L11 13"
                      stroke="#8A2BE2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="#8A2BE2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatScreen;