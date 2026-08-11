"use client";

import { useState } from "react";

type PopupFormProps = {
  open: boolean;
  onClose: () => void;
  propertyTitle?: string;
};

export default function PopupForm({
  open,
  onClose,
  propertyTitle,
}: PopupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    let valid = true;

    if (name.trim().length < 3) {
      newErrors.name = "Please enter your full name";
      valid = false;
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      alert("🎉 Thank you! Our team will contact you shortly.");

      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");

      onClose();
    }, 1500);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-linear-to-b from-[#ff8a65] via-[#ff9d6c] to-[#ffb37c] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-4xl font-light text-white transition hover:rotate-90"
        >
          ×
        </button>

        <h2 className="text-center text-4xl font-extrabold leading-tight text-white">
          🎉 Register Here
        </h2>

        <h3 className="mt-2 text-center text-2xl font-bold text-white">
          and Avail the
        </h3>

        <h3 className="text-center text-2xl font-bold text-white">
          Best Offers!!
        </h3>

        {propertyTitle && (
          <p className="mt-3 text-center text-sm font-semibold text-white/90">
            Enquiring about: {propertyTitle}
          </p>
        )}

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-white">
            We Promise 📞 Instant Call Back
          </p>

          <h4 className="mt-2 text-3xl font-bold text-white">
            +91 92171 04219
          </h4>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-lg outline-none transition focus:border-red-500"
            />

            {errors.name && (
              <p className="mt-1 text-sm font-medium text-red-700">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-lg outline-none transition focus:border-red-500"
            />

            {errors.email && (
              <p className="mt-1 text-sm font-medium text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Your Phone*"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-lg outline-none transition focus:border-red-500"
            />

            {errors.phone && (
              <p className="mt-1 text-sm font-medium text-red-700">
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#e53935] py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

      </div>

    </div>
  );
}