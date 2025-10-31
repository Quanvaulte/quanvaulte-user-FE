const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://quanvaulte-be.onrender.com";

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data as T;
}
