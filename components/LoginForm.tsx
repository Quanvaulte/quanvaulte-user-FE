/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const { handleLogin, loading, error, success } = useLogin();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Validation logic
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Enter a valid email address"
          : "";
      case "password":
        return value.length < 6 ? "Password must be at least 6 characters" : "";
      default:
        return "";
    }
  };

  // ✅ Input Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // ✅ Submit logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({ email: true, password: true });

    if (Object.keys(newErrors).length > 0) return;

    const res = await handleLogin(formData);
    if (res) {
      localStorage.setItem("authToken", res.token);
      localStorage.setItem("userId", res.userId);
      router.push("/dashboard");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white rounded-2xl min-h-screen shadow-xl p-10 sm:p-16 font-sans flex flex-col h-full transition-all duration-300">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-1 text-[#F9D342]">
          QuanVaulte
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          Login to your Quantive account
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Join thousands of students learning future tech skills.
        </p>
      </div>

      {/* ✅ Content Area */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Animated Feedback */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-center text-sm bg-red-50 p-2 rounded-md mb-3">
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-600 text-center text-sm bg-green-50 p-2 rounded-md mb-3">
                ✅ Login successful!
              </motion.p>
            )}
          </AnimatePresence>

          {/* ✅ Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 outline-none transition-all ${
                  errors.email && touched.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-gray-400 focus:border-[#2C43EB]"
                }`}
              />
              {errors.email && touched.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1">
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-10 py-3 text-black rounded-lg border-2 outline-none transition-all ${
                  errors.password && touched.password
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-gray-400 focus:border-[#2C43EB]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && touched.password && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1">
                  {errors.password}
                </motion.p>
              )}
            </div>

            {/* Forgot password */}
            <div className="flex justify-end mt-2">
              <Link
                href="/forgot-password"
                className="text-sm text-[#2C43EB] hover:underline">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        {/* ✅ Sticky bottom area */}
        <div className="mt-10">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 flex justify-center items-center gap-2 bg-[#2C43EB] text-white font-semibold rounded-4xl cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg ${
              loading ? "opacity-80 cursor-not-allowed" : "hover:bg-[#2336c9]"
            }`}>
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-center text-sm text-gray-600 mt-5">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#2C43EB] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
