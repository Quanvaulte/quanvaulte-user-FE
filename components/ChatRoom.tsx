"use client";

import { useState } from "react";
import { Send, Smile, LogOut } from "lucide-react";
import Image from "next/image";

export default function ChatRoom() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Bill",
      text: "Heyyy guys, How's study going over there",
      time: "11:00 am",
      isOwn: false,
    },
    {
      id: 2,
      user: "Bill",
      text: "Heyyy guys, How's study going over there",
      time: "11:00 am",
      isOwn: false,
    },
    {
      id: 3,
      user: "Bill",
      text: "Heyyy guys, How's study going over there",
      time: "11:00 am",
      isOwn: false,
    },
    {
      id: 4,
      user: "Bill",
      text: "Heyyy guys, How's study going over there",
      time: "11:00 am",
      isOwn: false,
    },
    {
      id: 5,
      user: "Bill",
      text: "Heyyy guys, How's study going over there",
      time: "11:00 am",
      isOwn: true,
    },
  ]);

  const [selectedCommunity, setSelectedCommunity] = useState("My communities");
  const [chatHistory] = useState([
    {
      id: 1,
      group: "Cybergogs",
      message: "Manisa: i went home last night",
      time: "11:00 am",
      unread: 2,
    },
    {
      id: 2,
      group: "Cybergogs",
      message: "Manisa: i went home last night",
      time: "11:00 am",
      unread: 1,
    },
    {
      id: 3,
      group: "Cybergogs",
      message: "Manisa: i went home last night",
      time: "11:00 am",
      unread: 3,
    },
    {
      id: 4,
      group: "Cybergogs",
      message: "Manisa: i went home last night",
      time: "11:00 am",
      unread: 2,
    },
    {
      id: 5,
      group: "Cybergogs",
      message: "Manisa: i went home last night",
      time: "11:00 am",
      unread: 1,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: "You",
          text: message,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
          isOwn: true,
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-90  border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            Community 😎
          </h2>
        </div>

        {/* Community Tabs */}
        <div className="flex gap-2 py-2 bg-gray-100 rounded-full">
          <button
            onClick={() => setSelectedCommunity("My communities")}
            className={`px-4 py-2 font-bold cursor-pointer rounded-full text-base transition-colors ${
              selectedCommunity === "My communities"
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}>
            My communities
          </button>
          <button
            onClick={() => setSelectedCommunity("Other communities")}
            className={`px-4 py-2 cursor-pointer rounded-full text-base font-bold transition-colors ${
              selectedCommunity === "Other communities"
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}>
            Other communities
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 relative flex-shrink-0">
                  <Image src="/communityProfile.svg" alt="" fill />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {chat.group}
                    </h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.message}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white font-medium">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-blue-700 via-blue-600 to-purple-700">
        {/* Chat Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 relative flex-shrink-0">
              <Image src="/communityProfile.svg" alt="" fill />
            </div>
            <div>
              <h2 className="font-bold text-gray-800">Cybergogs</h2>
              <p className="text-sm text-gray-500">15 member online</p>
            </div>
          </div>
          <button className="px-4 py-2 cursor-pointer font-bold bg-pink-100 text-pink-600 rounded-full text-base hover:bg-pink-200 transition-colors flex items-center gap-2">
            Leave Group
            <Image src="/logout.svg" alt="" width={56} height={56} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center mb-6">
            <span className="px-4 py-2 bg-purple-800 text-white text-sm rounded-full inline-block">
              Today
            </span>
          </div>

          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.isOwn ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`flex gap-3 max-w-lg ${
                    msg.isOwn ? "flex-row-reverse" : "flex-row"
                  }`}>
                  {!msg.isOwn && (
                    <div className="w-10 h-10 rounded-full bg-white flex-shrink-0"></div>
                  )}
                  <div
                    className={`${
                      msg.isOwn ? "items-end" : "items-start"
                    } flex flex-col`}>
                    {!msg.isOwn && (
                      <span className="text-pink-300 text-sm font-medium mb-1">
                        {msg.user}
                      </span>
                    )}
                    <div className="bg-white rounded-2xl px-5 py-3 shadow-sm">
                      <p className="text-gray-800 text-sm">{msg.text}</p>
                    </div>
                  </div>
                  {msg.isOwn && (
                    <div className="w-10 h-10 rounded-full bg-white flex-shrink-0"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6">
          <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-lg">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Smile size={20} className="text-gray-400" />
            </button>
            <input
              type="text"
              placeholder="Type and send a chat to the communityyy"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-4 py-1 text-gray-600 placeholder-gray-400 outline-none text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
