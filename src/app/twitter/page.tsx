"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Twitter() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <main className="container max-w-lg mx-auto">
      {isLoaded && (
        <Link
          className="twitter-timeline twitter-card"
          href="https://twitter.com/DrYararFisher?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </main>
  );
}
