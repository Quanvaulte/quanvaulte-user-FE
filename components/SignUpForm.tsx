/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState,useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, User, Mail, Lock, Loader2 } from "lucide-react";
import { useSignup } from "@/hooks/useSignup";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { handleRegister, loading, error, success } = useSignup();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  // ✅ Field validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Enter a valid email address"
          : "";
      case "password":
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/(?=.*[0-9])/.test(value))
          return "Password should include at least one number";
        if (!/(?=.*[!@#$%^&*])/.test(value))
          return "Password should include a special character";
        return "";
      case "confirmPassword":
        return value !== formData.password ? "Passwords do not match" : "";
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

  // ✅ Redirect after success
  useEffect(() => {
    if (success) {
      // Delay navigation slightly for animation feedback
      const timeout = setTimeout(() => {
        // router.push("/verify-email");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [success, router]);

  // ✅ Form Submit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate all fields
  const newErrors: Record<string, string> = {};
  Object.keys(formData).forEach((key) => {
    const error = validateField(key, (formData as any)[key]);
    if (error) newErrors[key] = error;
  });

  setErrors(newErrors);
  setTouched({
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  if (Object.keys(newErrors).length > 0) return;

  const res = await handleRegister({
    name: formData.name,
    email: formData.email,
    password: formData.password,
  });

  if (res) {
    // Store temporary token & userId (optional if needed later)
    localStorage.setItem("pendingUserId", res.userId);
    localStorage.setItem("registrationToken", res.token);

    // Show feedback before redirect
    alert(`${res.message}. Token: ${res.token}`);

    // Navigate to verify-email page with userId in query params
    router.push(`/verify-email?userId=${res.userId}`);
  }
};


  const handleGoogleSignIn = () => {
    alert("🔜 Google Sign-In integration coming soon!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full  bg-white rounded-2xl shadow-xl p-10 sm:p-16 font-sans transition-all duration-300">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-1 text-[#F9D342]">
          QuanVaulte
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          Create an E-Learn Account
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Join thousands of students learning future tech skills.
        </p>
      </div>

      {/* ✅ Animated Feedback */}
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
            🎉 Account created successfully!
          </motion.p>
        )}
      </AnimatePresence>

      {/* ✅ Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {["name", "email", "password", "confirmPassword"].map((field) => {
          const Icon =
            field === "name" ? User : field === "email" ? Mail : Lock;

          const isPasswordField =
            field === "password" || field === "confirmPassword";
          const show = field === "password" ? showPassword : showConfirm;
          const setShow =
            field === "password" ? setShowPassword : setShowConfirm;

          return (
            <div key={field} className="relative">
              <Icon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                name={field}
                type={
                  isPasswordField
                    ? show
                      ? "text"
                      : "password"
                    : field === "email"
                    ? "email"
                    : "text"
                }
                placeholder={
                  field === "confirmPassword"
                    ? "Confirm password"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                value={(formData as any)[field]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-10 py-3 text-black rounded-lg border-2 outline-none transition-all ${
                  errors[field] && touched[field]
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-gray-400 focus:border-[#2C43EB]"
                }`}
              />
              {isPasswordField && (
                <button
                  type="button"
                  onClick={() => setShow((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
              {errors[field] && touched[field] && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1">
                  {errors[field]}
                </motion.p>
              )}
            </div>
          );
        })}

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-6">
          <div className="border-t border-gray-300 flex-grow" />
          <span className="text-gray-500 text-sm">or</span>
          <div className="border-t border-gray-300 flex-grow" />
        </div>

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"
            />
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
          </svg>
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 flex justify-center items-center gap-2 bg-[#2C43EB] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
            loading ? "opacity-80 cursor-not-allowed" : "hover:bg-[#2336c9]"
          }`}>
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} /> Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#2C43EB] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
