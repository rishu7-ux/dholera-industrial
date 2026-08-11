"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let isHover = false;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;

      isHover = !!target.closest(
        "a, button, input, textarea, select, [role='button']"
      );
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(${
        isHover ? 1.8 : 1
      })`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 rounded-full border-2 border-[#FF7A00] bg-[#FF7A00]/20 backdrop-blur-sm transition-transform duration-200 lg:block"
      style={{
        boxShadow: "0 0 20px rgba(255,122,0,.4)",
      }}
    />
  );
}