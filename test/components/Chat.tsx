"use client";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function sendPrompt() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setResponse(data.response);
  }

  return (
    <div className="space-y-4">
      <textarea
        className="border p-2 w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={sendPrompt} className="border px-4 py-2">
        Send
      </button>
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}
