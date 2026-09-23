"use client";

import Script from "next/script";

export function ChatbotWidget() {
  return (
    <>
      <Script 
        src="https://cdn.botpress.cloud/webchat/v5.0/inject.js" 
        strategy="lazyOnload" 
      />
      <Script 
        src="https://files.bpcontent.cloud/2026/09/23/06/20260923064956-BFZ9YCQE.js" 
        strategy="lazyOnload" 
      />
    </>
  );
}