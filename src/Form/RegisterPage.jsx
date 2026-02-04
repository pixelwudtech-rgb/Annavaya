import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);

        // ✨ Premium delay before redirect
        setTimeout(() => {
          window.location.href = "/LogIn";
        }, 1200);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Registration failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Create your account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Start managing everything in one place
          </p>
        </div>

        {/* Success */}
        {success && (
          <div className="mb-4 rounded-lg bg-green-50 text-green-700 px-4 py-2 text-sm text-center">
            Account created successfully 🎉 Redirecting…
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input label="Username" name="username" placeholder="Your username" />
          <Input label="Email" name="email" type="email" placeholder="you@example.com" />
          <Input label="Phone Number" name="phone" placeholder="+91 98765 43210" />
          <Input label="Password" name="password" type="password" placeholder="••••••••" />

          <button
            type="submit"
            disabled={loading || success}
            className="w-full rounded-lg bg-black dark:bg-white
                       text-white dark:text-black
                       py-2.5 text-sm font-medium
                       hover:opacity-90 transition
                       disabled:opacity-60"
          >
            {loading ? "Creating account…" : success ? "Success ✓" : "Create account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black dark:text-white font-medium hover:underline">
            Login
          </a>
        </p>
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
