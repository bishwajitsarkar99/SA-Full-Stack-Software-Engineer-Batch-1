"use client";

import { useState } from "react";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Shield, Zap } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authType, setAuthType] = useState<"session" | "jwt">("jwt");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;
      if (authType === "session") {
        response = await authService.loginSession({ email, password });
      } else {
        response = await authService.loginJWT({ email, password });
        localStorage.setItem("auth_token", response.data.token);
      }
      
      localStorage.setItem("auth_type", authType);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      toast.success(`Logged in successfully via ${authType.toUpperCase()}!`);
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to AuthMaster
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose your authentication flavor
          </p>
        </div>

        {/* Auth Type Switcher */}
        <div className="flex p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setAuthType("jwt")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
              authType === "jwt" ? "bg-white shadow text-indigo-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Zap size={16} /> JWT Auth
          </button>
          <button
            onClick={() => setAuthType("session")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
              authType === "session" ? "bg-white shadow text-indigo-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Shield size={16} /> Session Auth
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" name="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${
                authType === "jwt" ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500" : "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
              }`}
            >
              {loading ? "Authenticating..." : `Sign in with ${authType.toUpperCase()}`}
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
