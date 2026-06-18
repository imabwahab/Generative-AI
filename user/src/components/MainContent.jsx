import { useEffect, useRef } from "react";
import QuickSearchCards from "./QuickSearchCards";
import Loader from "./Loader";
import profile from '../assets/panda.png'
import { useAppContext } from "../context/context";
import Logo from "./Logo";
import MarkdownRenderer from "../utils/MarkdownRenderer";

// Greeting that adapts to the time of day
const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
};

const SageAvatar = () => (
  <div className="hidden md:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
    <Logo className="w-5 h-5" />
  </div>
);

const MainContent = () => {
  const { messages, loading } = useAppContext();
  const bottomRef = useRef(null);

  // Keep the latest message in view as the thread grows
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, loading]);

  const hasMessages = messages.length > 0;

  return (
    <main className="p-2 md:p-6">

      {!hasMessages && (
        <div className="max-w-5xl mx-auto px-2 md:px-6 pt-6">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {getGreeting()}
              </span>
              <span className="ml-2">👋</span>
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              I'm Sage. Ask me anything, or start with one of these.
            </p>
          </div>
          <QuickSearchCards />
        </div>
      )}

      {hasMessages && (
        <div className="flex max-w-3xl mx-auto px-2 md:px-4 flex-col gap-6 pt-2">
          {messages.map((message, index) =>
            message.role === "user" ? (
              <div key={index} className="message-in flex items-start justify-end gap-3">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-indigo-600/90 px-4 py-2.5 text-sm md:text-[15px] leading-relaxed text-white shadow-sm">
                  {message.text}
                </div>
                <img src={profile} alt="you" className="w-8 h-8 rounded-full ring-1 ring-white/15 shrink-0" />
              </div>
            ) : (
              <div key={index} className="message-in flex items-start gap-3">
                <SageAvatar />
                <div className="min-w-0 flex-1 text-slate-100">
                  <MarkdownRenderer response={message.text} />
                </div>
              </div>
            )
          )}

          {loading && (
            <div className="message-in flex items-start gap-3">
              <SageAvatar />
              <Loader />
            </div>
          )}

          <div ref={bottomRef} className="h-2" />
        </div>
      )}
    </main>
  );
};

export default MainContent;
