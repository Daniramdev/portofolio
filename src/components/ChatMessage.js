import React from "react";

const ChatMessage = ({ text, sender, timestamp }) => {
  return (
    <div
      className={`flex mb-4 ${
        sender === "bot" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-lg ${
          sender === "bot"
            ? "bg-gray-100 text-gray-800"
            : "bg-blue-500 text-white"
        }`}
      >
        <p>{text}</p>
        <span className="text-xs text-gray-500 block mt-1">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;