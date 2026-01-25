import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Atlas, Hima Vara Sagar’s AI assistant. You can ask me about his projects, research, or skills. You can Also ask me to contact him via mail.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const boxRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // 🔒 LOCK PAGE SCROLL WHEN CHAT IS OPEN
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      const rawReply = typeof data.reply === "string" ? data.reply : "";

      let parsed = null;

      // Try extracting pure JSON safely
      try {
        const jsonStart = rawReply.indexOf("{");
        const jsonEnd = rawReply.lastIndexOf("}");
        if (jsonStart !== -1 && jsonEnd !== -1) {
          const possibleJson = rawReply.slice(jsonStart, jsonEnd + 1);
          parsed = JSON.parse(possibleJson);
        }
      } catch {
        parsed = null;
      }

      // 🔥 MAILING MODE — COMPLETELY SILENT
      if (parsed && parsed.send_email) {
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name: parsed.from_name,
              from_email: parsed.from_email,
              subject: parsed.subject,
              message: parsed.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );

          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "✅ Your message has been sent to Hima successfully!",
            },
          ]);
        } catch (err) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "⚠️ I tried to send the message, but something went wrong while sending the email.",
            },
          ]);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: rawReply || "Sorry, I couldn’t generate a response.",
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Backend not reachable right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-sky-500/90 backdrop-blur-md shadow-xl flex items-center justify-center text-white"
      >
        {open ? <X /> : <MessageCircle />}
      </motion.button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={boxRef}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              fixed bottom-24 right-6 z-50 w-96 h-[70vh]
              bg-white/20 backdrop-blur-2xl
              rounded-2xl shadow-2xl border border-white/30
              flex flex-col overflow-hidden
            "
          >
            {/* 🔥 GLASS HEADER WITH ATLAS BRANDING */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500/80 to-blue-600/80 backdrop-blur-xl text-white border-b border-white/20">
              <div className="flex items-center gap-2">
                {/* Animated Atlas Logo */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="h-7 w-7 rounded-full bg-white/80 shadow-inner flex items-center justify-center"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                </motion.div>

                <span className="text-sm font-semibold tracking-wide">
                  Atlas
                </span>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto overscroll-contain px-3 py-3 space-y-2 text-sm"
              onWheel={(e) => e.stopPropagation()}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-3 py-2 rounded-xl backdrop-blur-md ${
                    m.role === "user"
                      ? "ml-auto bg-sky-500/90 text-white shadow-md"
                      : "mr-auto bg-white/60 text-slate-800 shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className="text-xs text-slate-300">Thinking…</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input (Glass) */}
            <div className="flex items-center gap-2 px-3 py-2 border-t border-white/20 bg-white/30 backdrop-blur-xl">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about projects, research..."
                className="flex-1 text-sm bg-transparent outline-none placeholder-slate-400 text-slate-900"
              />
              <button
                onClick={sendMessage}
                className="h-9 w-9 rounded-full bg-sky-500/90 text-white flex items-center justify-center shadow-lg"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}