"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

const API_BASE_URL = "https://quanvaulte-be.onrender.com";

interface LoginPayload {
  email: string;
  password: string;
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (data: LoginPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, data, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess(true);
      console.log("✅ Logged in:", res.data);
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("error login", err);
        
        const axiosErr = err as AxiosError<{ message?: string }>;
        const message =
          axiosErr.response?.data?.message || "Login failed, try again.";
        setError(message);
      } else {
        setError("An unexpected error occurred");
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error, success };
}
