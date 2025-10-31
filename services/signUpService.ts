import axios, { AxiosError } from "axios";

const API_BASE_URL = "https://quanvaulte-be.onrender.com";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  is_admin?: boolean;
}

export async function registerUser(data: RegisterPayload) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      {
        ...data,
        is_admin: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("error", error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const message =
        axiosError.response?.data?.message || "Failed to register user";
      throw new Error(message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}
