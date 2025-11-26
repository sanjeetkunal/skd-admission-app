// src/services/nestapplication.ts
import axios from "axios";
import { useState } from "react";

export type RegisterRequest = {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  state: string;
  city: string;
  program: string;
  course: string;
  consent: boolean;
};

/**
 * axios instance. Uses Vite env var VITE_API_BASE if present,
 * fallback to absolute URL used in your project.
 *
 * Add VITE_API_BASE to your .env (e.g. VITE_API_BASE=https://entrance-api.skduniversity.com)
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE ?? "http://localhost:8080/nestapp",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

/**
 * useRegister - simple hook to send register request.
 * Returns { register, loading, error }.
 *
 * Usage:
 * const { register, loading, error } = useRegister();
 * await register(data);
 */
export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  async function register(data: RegisterRequest) {
    setLoading(true);
    setError(null);
    try {
      const resp = await apiClient.post("/register", data);
      setLoading(false);
      return resp.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  }

  return { register, loading, error };
}
