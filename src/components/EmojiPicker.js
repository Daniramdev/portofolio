import React, { useState } from "react";

const EmojiPicker = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const emojis = ["😀", "😍", "😂", "😎", "👍", "👋"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700"
      >
        😀
      </button>
      {isOpen && (
        <div className="absolute bottom-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 grid grid-cols-3 gap-2">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(emoji);
                setIsOpen(false);
              }}
              className="text-2xl hover:bg-gray-100 rounded-lg p-1"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;