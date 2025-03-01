import { useState, useEffect, useRef } from 'react'; // Tambahkan useRef dan useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

export default function LiveChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: 'Hi! How can I help you?', sender: 'bot' }]);
  const [input, setInput] = useState('');

  // Ref untuk container pesan
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm just a demo bot!", sender: 'bot' }]);
    }, 1000);
  };

  // Scroll ke bawah setiap kali messages berubah
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-80 bg-white/90 backdrop-blur-lg rounded-lg shadow-2xl p-4 mb-2 border border-white/20"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/20">
              <h2 className="text-lg font-semibold text-gray-800">Chat Support</h2>
              <button
                onClick={toggleChat}
                className="p-1 text-gray-500 hover:text-gray-800 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

           {/* Chat Messages */}
{/* Chat Messages */}
<div className="h-64 overflow-y-auto flex flex-col space-y-2 p-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
  {messages.map((msg, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {/* Bubble Chat */}
      <div
        className={`p-3 max-w-[60%] rounded-lg break-words ${
          msg.sender === 'user'
            ? 'bg-blue-500 text-white rounded-br-none' // Bubble chat user
            : 'bg-gray-100 text-gray-800 rounded-bl-none' // Bubble chat bot
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  ))}
  {/* Ref untuk scroll otomatis */}
  <div ref={messagesEndRef} />
</div>

           {/* Chat Input */}
<div className="mt-2 flex items-center border-t border-white/20 pt-2">
  {/* Emoji Button (Optional) */}
  <button
    className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
   
  >
    
  </button>

  {/* Input Text */}
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
    className="flex-1 p-2 mx-2 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 placeholder-gray-400"
    placeholder="Type your message..."
  />

  {/* Send Button */}
  <button
    onClick={sendMessage}
    className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
  >
    <Send size={20} />
  </button>
</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </div>
  );
}