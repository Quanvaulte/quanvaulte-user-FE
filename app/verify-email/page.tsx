/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Carousel from "@/components/Carousel";
import axios from "axios";

function VerifyEmailContent() {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [resending, setResending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("userId");

  useEffect(() => {
    if (!userId) router.push("/signup");
  }, [userId, router]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9A-Za-z]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.toUpperCase();
    setCode(newCode);
    if (value && index < code.length - 1) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    if (timeLeft > 0 || resending) return;
    setResending(true);

    setTimeout(() => {
      setResending(false);
      setTimeLeft(60);
      setFeedback({ type: "success", msg: "Verification code resent!" });
    }, 1500);
  };

  const handleSubmit = async () => {
    const enteredCode = code.join("");
    if (enteredCode.length < 4) {
      setFeedback({
        type: "error",
        msg: "Please enter the full verification code.",
      });
      return;
    }

    if (!userId) {
      setFeedback({ type: "error", msg: "Missing user ID. Please try again." });
      return;
    }

    try {
      setLoading(true);
      setFeedback(null);

      const res = await axios.post(
        `https://quanvaulte-be.onrender.com/auth/confirm-email/${userId}`,
        { token: enteredCode },
        { headers: { "Content-Type": "application/json" } }
      );

      setFeedback({
        type: "success",
        msg: res.data?.message || "Email verified successfully!",
      });

      setTimeout(() => {
        router.push("/login");
      }, 1800);
    } catch (err: any) {
      const msg =
        err.response?.data?.message || "Invalid or expired verification code.";
      setFeedback({ type: "error", msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 font-sans">
      {/* Left side: Carousel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex w-full h-full text-white">
        <Carousel />
      </motion.div>

      {/* Right side: Verify section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between w-full text-center min-h-screen p-10 md:p-16 bg-white rounded-none md:rounded-l-3xl shadow-xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-[#FFD700] mb-3">
            QuanVault
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Verify your Email Address
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Enter the 4-digit code sent to your email.
          </p>

          {/* Feedback */}
          <AnimatePresence>
            {feedback && (
              <motion.p
                key={feedback.msg}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-sm mb-4 px-3 py-2 rounded-md ${
                  feedback.type === "error"
                    ? "bg-red-50 text-red-600"
                    : "bg-green-50 text-green-600"
                }`}>
                {feedback.msg}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Code Inputs */}
          <div className="flex justify-center gap-3 mb-6">
            {code.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputsRef.current[i] = el; }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-12 h-12 text-center text-lg text-black font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2C43EB] transition-colors"
              />
            ))}
          </div>

          {/* Resend */}
          <div className="text-sm mb-8">
            {timeLeft > 0 ? (
              <p className="text-gray-500">
                Resend <span className="text-gray-400">({timeLeft}s)</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                disabled={resending}
                className={`font-medium ${
                  resending
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#2C43EB] hover:underline"
                }`}>
                {resending ? "Resending..." : "Resend"}
              </button>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 bg-[#2C43EB] cursor-pointer text-white rounded-full font-semibold transition-all duration-200 shadow-md ${
              loading ? "opacity-80 cursor-not-allowed" : "hover:bg-[#1f32c0]"
            }`}>
            {loading ? "Verifying..." : "Continue"}
          </button>

          <p className="text-sm text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#2C43EB] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ✅ Wrap inside Suspense to fix CSR bailout issue
export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
