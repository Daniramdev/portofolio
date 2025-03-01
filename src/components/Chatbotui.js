import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Mic, Image as ImageIcon, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/chat");
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, { text: event.data, sender: "bot" }]);
    };
    setSocket(ws);
    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !socket) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    socket.send(input);
    setInput("");
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/upload-image/", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setMessages([...messages, { text: result.message, sender: "bot" }]);
  };

  const handleSpeechToText = async () => {
    const file = await recordAudio();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/speech-to-text/", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setInput(result.text);
  };

  const recordAudio = async () => {
    return new Promise((resolve) => {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          resolve(audioBlob);
        };

        mediaRecorder.start();
        setTimeout(() => mediaRecorder.stop(), 3000);
      });
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-80 bg-white rounded-lg shadow-xl p-4 mb-2"
          >
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Chatbot</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="h-64 overflow-y-auto p-2">
              {messages.map((msg, idx) => (
                <div key={idx} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>{msg.text}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center border-t pt-2">
              <button onClick={handleSpeechToText} className="p-2">
                <Mic size={20} />
              </button>
              <button onClick={() => fileInputRef.current.click()} className="p-2">
                <ImageIcon size={20} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border rounded-full px-3 py-2 mx-2"
                placeholder="Type a message..."
              />
              <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-full">
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-500 text-white rounded-full shadow-lg"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
