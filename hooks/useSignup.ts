"use client";

import { useState } from "react";
import { registerUser } from "@/services/signUpService";

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await registerUser({ ...formData, is_admin: false });

      if (res?.userId) {
        setSuccess(true);
        console.log("✅ User registered:", res);
        return {
          userId: res.userId,
          token: res.token,
          message: res.msg,
        };
      } else {
        throw new Error("Invalid registration response");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("❌ Registration error:", err.message);
      setError(err.message || "Something went wrong during registration");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error, success };
}
