import React from "react";

const ChatIcon = ({ onClick }) => {
  return (
    <div
      className="fixed bottom-8 right-8 z-50 cursor-pointer animate-bounce hover:animate-none"
      onClick={onClick}
    >
      <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
        <span className="text-2xl">💬</span>
      </div>
    </div>
  );
};

export default ChatIcon;