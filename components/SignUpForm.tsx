/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
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
        if (!value.trim()) return "Name is required";
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        if (!value.trim()) return "Email is required";
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Enter a valid email address"
          : "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/(?=.*[0-9])/.test(value))
          return "Password should include at least one number";
        if (!/(?=.*[!@#$%^&*])/.test(value))
          return "Password should include a special character";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        return value !== formData.password ? "Passwords do not match" : "";
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

    // Also revalidate confirmPassword if password changes
    if (name === "password" && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateField(
          "confirmPassword",
          formData.confirmPassword
        ),
      }));
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
      localStorage.setItem("pendingUserId", res.userId);
      localStorage.setItem("registrationToken", res.token);
      alert(`${res.message}. Token: ${res.token}`);
      router.push(`/verify-email?userId=${res.userId}`);
    }
  };

  const handleGoogleSignIn = () => {
    alert("🔜 Google Sign-In integration coming soon!");
  };

  // Field configuration
  const fields = [
    { name: "name", icon: User, type: "text", placeholder: "Name" },
    { name: "email", icon: Mail, type: "email", placeholder: "Email" },
    { name: "password", icon: Lock, type: "password", placeholder: "Password" },
    {
      name: "confirmPassword",
      icon: Lock,
      type: "password",
      placeholder: "Confirm password",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-h-screen overflow-y-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 font-sans transition-all duration-300">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-1 text-[#F9D342]">
          QuanVaulte
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
          Create an E-Learn Account
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Join thousands of students learning future tech skills.
        </p>
      </div>

      {/* Global Error/Success Messages - Fixed Height Container */}
      <div className="h-[52px] mb-3 flex items-start">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full flex items-start gap-2 text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-lg">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-tight">{error}</p>
            </motion.div>
          )}
          {success && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 p-2.5 rounded-lg">
              <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-tight">
                Account created successfully! Redirecting...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dynamic Field Rendering */}
        {fields.map(({ name, icon: Icon, type, placeholder }) => {
          const isPasswordField =
            name === "password" || name === "confirmPassword";
          const show = name === "password" ? showPassword : showConfirm;
          const setShow =
            name === "password" ? setShowPassword : setShowConfirm;

          return (
            <div key={name}>
              <div className="relative">
                <Icon
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  name={name}
                  type={isPasswordField ? (show ? "text" : "password") : type}
                  placeholder={placeholder}
                  value={(formData as any)[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                  className={`w-full pl-10 ${
                    isPasswordField ? "pr-12" : "pr-4"
                  } py-2.5 text-black rounded-lg border-2 outline-none transition-all ${
                    errors[name] && touched[name]
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 hover:border-gray-400 focus:border-[#2C43EB] focus:ring-2 focus:ring-[#2C43EB]/20"
                  } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                />
                {isPasswordField && (
                  <button
                    type="button"
                    onClick={() => setShow((prev) => !prev)}
                    disabled={loading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
                    aria-label={show ? "Hide password" : "Show password"}>
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                )}
              </div>

              {/* Fixed height error container */}
              <div className="h-[18px] mt-1">
                <AnimatePresence mode="wait">
                  {errors[name] && touched[name] && (
                    <motion.p
                      key={`${name}-error`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-red-500 text-[11px] flex items-center gap-1 leading-tight">
                      <AlertCircle size={10} className="flex-shrink-0" />
                      {errors[name]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="border-t border-gray-300 flex-grow" />
          <span className="text-gray-500 text-xs font-medium">or</span>
          <div className="border-t border-gray-300 flex-grow" />
        </div>

        {/* Google Sign-In Button */}
        <motion.button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          whileHover={!loading ? { scale: 1.01 } : {}}
          whileTap={!loading ? { scale: 0.99 } : {}}
          className={`w-full flex items-center justify-center gap-2.5 py-2.5 border-2 border-gray-300 rounded-lg transition-all ${
            loading
              ? "opacity-60 cursor-not-allowed"
              : "hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100"
          }`}>
          <svg viewBox="0 0 24 24" className="w-4 h-4">
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
          <span className="text-gray-700 font-medium text-sm">
            Sign up with Google
          </span>
        </motion.button>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.01 } : {}}
          whileTap={!loading ? { scale: 0.99 } : {}}
          className={`w-full py-3 flex justify-center items-center gap-2 bg-[#2C43EB] text-white font-semibold rounded-xl transition-all duration-200 shadow-md ${
            loading
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-[#2336c9] hover:shadow-lg active:shadow-md"
          }`}>
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              <span className="text-sm">Creating Account...</span>
            </>
          ) : (
            <span className="text-sm">Create Account</span>
          )}
        </motion.button>

        {/* Login Redirect */}
        <p className="text-center text-xs text-gray-600 mt-3">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#2C43EB] font-semibold hover:text-[#2336c9] hover:underline transition-colors"
            tabIndex={loading ? -1 : 0}>
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
