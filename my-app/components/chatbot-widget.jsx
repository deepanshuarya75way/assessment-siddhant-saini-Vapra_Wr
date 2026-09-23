"use client";

import { MessageCircle } from "lucide-react";
import Script from "next/script";

export function ChatbotWidget() {
  function openChat() {
    if (typeof window !== "undefined" && window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" });
    }
  }

  return (
    <>
      {/* Load Botpress Scripts */}
      <Script src="https://cdn.botpress.cloud/webchat/v5.0/inject.js" strategy="lazyOnload" />
      <Script src="https://files.bpcontent.cloud/2026/09/23/06/20260923064956-BFZ9YCQE.js" strategy="lazyOnload" />
      
      {/* Custom Trigger Button */}
      <button
        type="button"
        onClick={openChat}
        aria-label="Open Vapra Workshop chat"
        title="Chat with Vapra Workshop"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-950/30 transition hover:scale-105 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-gray-950"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </button>
    </>
  );
}