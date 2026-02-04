import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function detectIdentifierType(value) {
    if (/^\d{10}$/.test(value)) return "phone";
    if (/^\S+@\S+\.\S+$/.test(value)) return "email";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const rawIdentifier = formData.get("identifier");
    const identifier = rawIdentifier ? rawIdentifier.trim() : "";

    const type = detectIdentifierType(identifier);

    if (!type) {
      setError("Enter a valid email or 10-digit mobile number");
      setLoading(false);
      return;
    }

    formData.append("type", type);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        window.location.href = "/Admin/dashboard";
      } else {
        setError("Invalid email/phone or password");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Login using email or mobile number
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg px-4 py-2 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email or Mobile Number"
            name="identifier"
            placeholder="Email address or 10-digit mobile"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black dark:bg-white
                       text-white dark:text-black
                       py-2.5 text-sm font-medium
                       hover:opacity-90 transition
                       disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center space-y-2">
          <a
            href="/forgot-password"
            className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
          >
            Forgot password?
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-black dark:text-white font-medium hover:underline"
            >
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-700 px-4 py-2.5 text-sm
                   text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
      />
    </div>
  );
}
