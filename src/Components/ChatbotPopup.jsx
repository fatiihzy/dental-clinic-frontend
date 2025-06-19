import { useState } from 'react';
import axios from "axios";

export default function ChatbotPopup({ isOpen, onClose }) {
    const [userMessage, setUserMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const sendMessage = async () => {
        if (!userMessage.trim()) return;

        const newMessage = { sender: "user", message: userMessage };
        setMessages((prev) => [...prev, newMessage]);
        setUserMessage("");
        setLoading(true);

        setMessages((prev) => [
            ...prev,
            { sender: "bot", message: "__typing__" }
        ]);

        try {
            const response = await axios.post(
                "https://17f9-125-166-16-173.ngrok-free.app/webhooks/rest/webhook",
                {
                    sender: "user",
                    message: newMessage.message
                },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );

            const rasaMessages = Array.isArray(response.data)
                ? response.data.map((msg) => ({
                    sender: "bot",
                    message: msg.text || "[Tidak ada respon]"
                }))
                : [{ sender: "bot", message: "[Respon tidak valid]" }];

            setMessages((prev) => [
                ...prev.filter((msg) => msg.message !== "__typing__"),
                ...rasaMessages
            ]);
        } catch (error) {
            console.error("Error communicating with Rasa:", error);
            setMessages((prev) => [
                ...prev.filter((msg) => msg.message !== "__typing__"),
                { sender: "bot", message: "[Gagal menghubungi chatbot]" }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fadeIn flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-[#7B5D4F] hover:text-[#A67C52] text-xl font-bold transition-colors"
                >
                    ×
                </button>

                <h2 className="text-xl font-serif italic font-semibold text-[#7B5D4F] mb-2 text-center">
                    Chatbot Gigita Dental Care
                </h2>
                <p className="text-[#7B5D4F]/80 text-sm text-center mb-4">
                    Tanyakan apa saja tentang klinik, perawatan, atau harga!
                </p>

                <div className="bg-[#F5E6DC] p-4 rounded-xl mb-4 h-48 overflow-y-auto flex flex-col">
                    {messages.length === 0 ? (
                        <p className="text-[#7B5D4F]/80 text-sm text-center">
                            Mulai percakapan dengan chatbot...
                        </p>
                    ) : (
                        messages.map((msg, index) => (
                            <div key={index} className={`text-sm mb-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                                <span className={`px-3 py-2 rounded-lg inline-block max-w-[80%] whitespace-pre-line ${
                                    msg.sender === "user"
                                        ? "bg-[#A67C52] text-white"
                                        : msg.message === "__typing__"
                                            ? "bg-[#D8C3B3] text-[#7B5D4F] italic"
                                            : "bg-[#EAD9C8] text-[#4A2F20] font-medium"
                                }`}>
                                    {msg.message === "__typing__" ? "Chatbot sedang mengetik..." : msg.message}
                                </span>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Tulis pesan..."
                        className="flex-1 bg-gray-100 text-[#7B5D4F] px-3 py-2 rounded-xl text-smborder-2 border-gray-300 focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52] outline-none transition-all"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!userMessage.trim()}
                        className={`px-3 py-2 rounded-xl font-medium text-sm ${
                            userMessage.trim()
                                ? "bg-[#A67C52] text-white hover:bg-[#7B5D4F] transition-colors"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        Kirim
                    </button>
                </div>
            </div>
        </div>
    );
}
