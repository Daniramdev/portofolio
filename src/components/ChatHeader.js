import React from "react";

const ChatHeader = ({ onClose, onToggleDarkMode, isDarkMode }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-t-lg">
      <div className="flex items-center">
        <div className="text-2xl mr-2">🤖</div>
        <h3 className="text-lg font-semibold">ChatBot</h3>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;