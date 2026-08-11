"use client";

import { useEffect, useState } from "react";
import PopupForm from "./PopupForm";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <PopupForm open={open} onClose={() => setOpen(false)} />;
}