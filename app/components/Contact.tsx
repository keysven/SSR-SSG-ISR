"use client";

import { FormEvent, useState } from "react";

const Contact = () => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postContent = async (e: FormEvent) => {
    e.preventDefault();

    if (!content) {
      return null;
    }

    setIsLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });

    setContent("");
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">お問い合わせ内容</h2>
      <form onSubmit={postContent}>
        <div>
          <textarea
            disabled={isLoading}
            value={content}
            placeholder="お問い合わせ内容を書いてください"
            className="p-2 w-[600px] h-[400px] border border-black resize-none"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button disabled={isLoading} className="bg-black text-white px-5 py-2">
          送信
        </button>
      </form>
    </div>
  );
};

export default Contact;
