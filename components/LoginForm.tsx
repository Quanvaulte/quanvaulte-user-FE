/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Loader2, AlertCircle } from "lucide-react";
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
        if (!value.trim()) return "Email is required";
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Enter a valid email address"
          : "";
      case "password":
        if (!value) return "Password is required";
        return value.length < 6 ? "Password must be at least 6 characters" : "";
      default:
        return "";
    }
  };

  // ✅ Input Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as user types if field was previously touched
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
      className="w-full bg-white rounded-2xl min-h-screen shadow-xl p-6 sm:p-10 lg:p-16 font-sans flex flex-col transition-all duration-300">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-1 text-[#F9D342]">
          QuanVaulte
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
          Login to your Quantive account
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Join thousands of students learning future tech skills.
        </p>
      </div>

      {/* Content Area with fixed height for error messages */}
      <div className="flex flex-col flex-grow justify-between">
        <div className="space-y-5">
          {/* Global Error/Success Messages - Fixed Height Container */}
          <div className="min-h-[60px]">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2 text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg">
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{error}</p>
                </motion.div>
              )}
              {success && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 p-3 rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">✓</div>
                  <p className="text-sm">Login successful! Redirecting...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field - Fixed Height Container */}
            <div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                  className={`w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 outline-none transition-all ${
                    errors.email && touched.email
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 hover:border-gray-400 focus:border-[#2C43EB] focus:ring-2 focus:ring-[#2C43EB]/20"
                  } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                />
              </div>
              {/* Fixed height error container */}
              <div className="min-h-[20px] mt-1">
                <AnimatePresence mode="wait">
                  {errors.email && touched.email && (
                    <motion.p
                      key="email-error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Password Field - Fixed Height Container */}
            <div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                  className={`w-full pl-10 pr-12 py-3 text-black rounded-lg border-2 outline-none transition-all ${
                    errors.password && touched.password
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 hover:border-gray-400 focus:border-[#2C43EB] focus:ring-2 focus:ring-[#2C43EB]/20"
                  } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Fixed height error container */}
              <div className="min-h-[20px] mt-1">
                <AnimatePresence mode="wait">
                  {errors.password && touched.password && (
                    <motion.p
                      key="password-error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-[#2C43EB] hover:text-[#2336c9] hover:underline transition-colors"
                tabIndex={loading ? -1 : 0}>
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        {/* Bottom Section - Login Button & Sign Up Link */}
        <div className="mt-8 space-y-4">
          <motion.button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            whileHover={!loading ? { scale: 1.01 } : {}}
            whileTap={!loading ? { scale: 0.99 } : {}}
            className={`w-full py-3.5 flex justify-center items-center gap-2 bg-[#2C43EB] text-white font-semibold rounded-xl transition-all duration-200 shadow-md ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#2336c9] hover:shadow-lg active:shadow-md"
            }`}>
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Logging in...</span>
              </>
            ) : (
              "Login"
            )}
          </motion.button>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#2C43EB] font-semibold hover:text-[#2336c9] hover:underline transition-colors"
              tabIndex={loading ? -1 : 0}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
