/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";

const API_BASE_URL = "https://quanvaulte-be.onrender.com/api/v1";

export interface OnboardingData {
  name: string;
  user_type: "student" | "school" | "parent"| string;
  number_of_initial_students_enroll?: number;
  progress_tracker?: "weekly" | "monthly" | "daily";
  is_learning_goal?: boolean;
  is_external_community?: boolean;
}

interface OnboardingResponse {
  status?: string;
  message?: string;
  data?: any;
}

export const useOnboarding = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<OnboardingResponse | null>(null);

  const onboardUser = async (payload: OnboardingData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // ✅ Get token from localStorage
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const response = await axios.post<OnboardingResponse>(
        `${API_BASE_URL}/onboarding`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(response.data);
      console.log("✅ Onboarding success:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          message?: string;
          msg?: string;
        }>;
        const message =
          axiosError.response?.data?.message ||
          axiosError.response?.data?.msg ||
          (axiosError.response?.status === 401
            ? "Unauthorized. Please log in again."
            : "Failed to onboard user");
        console.error("❌ Onboarding error:", message);
        setError(message);
        throw new Error(message);
      } else {
        console.error("❌ Unexpected onboarding error:", error);
        setError("An unexpected error occurred");
        throw new Error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    onboardUser,
    loading,
    error,
    success,
  };
};
