
"use client";

import { useEffect, useState } from "react";

type Token = { text: string; className?: string } | { break: true };

// Flattens tokens into one string (ignoring breaks) so we know total length
function tokensLength(tokens: Token[]) {
  return tokens.reduce(
    (sum, t) => sum + ("text" in t ? t.text.length : 0),
    0
  );
}

// Renders tokens up to `count` characters typed
function renderTokens(tokens: Token[], count: number) {
  let remaining = count;
  return tokens.map((t, i) => {
    if ("break" in t) return <br key={i} />;
    const slice = t.text.slice(0, Math.max(0, remaining));
    remaining -= t.text.length;
    return (
      <span key={i} className={t.className}>
        {slice}
      </span>
    );
  });
}

function useSequentialTypewriter(
  blocks: { tokens: Token[]; charsPerTick?: number }[],
  speed = 12,
  gapBetweenBlocks = 120,
  startDelay = 150
) {
  const [blockIndex, setBlockIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let gapTimeout: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(() => {
      const step = blocks[blockIndex].charsPerTick ?? 1;

      interval = setInterval(() => {
        setCharCount((prev) => {
          const currentLength = tokensLength(blocks[blockIndex].tokens);

          if (prev < currentLength) {
            return Math.min(prev + step, currentLength);
          }

          // current block finished
          clearInterval(interval);

          if (blockIndex < blocks.length - 1) {
            gapTimeout = setTimeout(() => {
              setBlockIndex((b) => b + 1);
              setCharCount(0);
            }, gapBetweenBlocks);
          } else {
            setAllDone(true);
          }

          return prev;
        });
      }, speed);
    }, blockIndex === 0 ? startDelay : 0);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      clearTimeout(gapTimeout);
    };
  }, [blockIndex, blocks, speed, gapBetweenBlocks, startDelay]);

  return { blockIndex, charCount, allDone };
}

export default function PropertyIntro() {
  const h1Tokens: Token[] = [
    { text: "SCO & Residential Plots in", className: "text-[#081A3A]" },
    { text: " Dholera Smart City", className: "text-[#FF7A00]" },
    { break: true },
    { text: "TP4B2, Bhangadh", className: "text-[#081A3A]" },
    { text: " | From ₹44 Lakhs", className: "text-[#0A2E73]" },
  ];

  const h2Tokens: Token[] = [
    { text: "Dholera Smart City ", className: "text-[#081A3A]" },
    { text: "Properties", className: "text-[#FF7A00]" },
  ];

  const paraTokens: Token[] = [
    {
      text:
        "Building dreams, one home at a time. Discover premium residential, SCO and commercial plots in India's first smart city with excellent investment opportunities and world-class infrastructure.",
      className: "text-gray-600",
    },
  ];

  const blocks = [
    { tokens: h1Tokens, charsPerTick: 3 },
    { tokens: h2Tokens, charsPerTick: 2 },
    { tokens: paraTokens, charsPerTick: 6 },
  ];

  const { blockIndex, charCount, allDone } = useSequentialTypewriter(
    blocks,
    10,
    90,
    120
  );

  const getTyped = (index: number) => {
    if (blockIndex > index) return tokensLength(blocks[index].tokens);
    if (blockIndex === index) return charCount;
    return 0;
  };

  const isTypingBlock = (index: number) =>
    blockIndex === index && !allDone;

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="max-w-5xl animate-[fadeUp_1s_ease]">

          <h1 className="text-3xl font-bold leading-tight transition-all duration-150 ease-out sm:text-4xl md:text-5xl lg:text-6xl">
            {renderTokens(h1Tokens, getTyped(0))}
            {isTypingBlock(0) && <TypeCursor />}
          </h1>

        </div>

        {/* Sub Heading */}
        <div className="mt-14 max-w-3xl animate-[fadeUp_1.2s_ease]">

          <h2 className="text-2xl font-bold transition-all duration-150 ease-out sm:text-3xl md:text-4xl">
            {renderTokens(h2Tokens, getTyped(1))}
            {isTypingBlock(1) && <TypeCursor />}
          </h2>

          <p className="mt-4 text-lg leading-8 transition-all duration-150 ease-out">
            {renderTokens(paraTokens, getTyped(2))}
            {isTypingBlock(2) && <TypeCursor />}
          </p>

        </div>

        {/* Orange Dots */}
        <div className="mt-8 flex gap-3">

          <span className="h-3 w-3 animate-bounce rounded-full bg-[#FF7A00]"></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-[#FF7A00]"
            style={{ animationDelay: ".1s" }}
          ></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-[#FF7A00]"
            style={{ animationDelay: ".2s" }}
          ></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-[#FF7A00]"
            style={{ animationDelay: ".3s" }}
          ></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-[#FF7A00]"
            style={{ animationDelay: ".4s" }}
          ></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-[#FF7A00]"
            style={{ animationDelay: ".5s" }}
          ></span>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

function TypeCursor() {
  return (
    <span className="ml-0.5 inline-block h-[1em] w-0.75 -translate-y-0.5 animate-[blink_0.7s_ease-in-out_infinite] bg-[#081A3A] align-middle" />
  );
}