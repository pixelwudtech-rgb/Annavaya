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
  const identifier = formData.get("identifier")?.trim();
  const password = formData.get("password");

  const type = detectIdentifierType(identifier);

  if (!type) {
    setError("Enter a valid email or 10-digit mobile number");
    setLoading(false);
    return;
  }

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password, type }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data?.error || "Login failed");

    // SAVE SESSION
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);
    localStorage.setItem("name", data.user.username);

    // ROLE-BASED REDIRECT
    if (data.user.role === "admin") {
      window.location.href = "/Admin/dashboard";
    } else {
      window.location.href = "/";
    }

  } catch (err) {
    setError(err.message || "Network error");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center
                    px-4">

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl
                      bg-white/80 dark:bg-neutral-900/80
                      backdrop-blur-xl
                      border border-neutral-200/60 dark:border-neutral-800
                      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                      p-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-neutral-500">
            Welcome back
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white mt-2">
            Sign in
          </h1>
          <p className="text-sm text-neutral-500 mt-3">
            Access your Website securely
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200
                          bg-red-50 text-red-700
                          px-4 py-2 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email or Mobile"
            name="identifier"
            placeholder="Email / mobile"
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
            className="w-full rounded-xl
                       bg-neutral-900 dark:bg-white
                       text-white dark:text-neutral-900
                       py-3 text-sm font-medium
                       transition-all duration-200
                       hover:opacity-90
                       hover:shadow-lg
                       disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-neutral-500">
          Don’t have an account?{" "}
          <a
            href="/SignUp"
            className="font-medium text-neutral-900 dark:text-white hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide
                        text-neutral-600 dark:text-neutral-400 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl
                   border border-neutral-300 dark:border-neutral-700
                   bg-white dark:bg-neutral-800
                   px-4 py-3 text-sm
                   text-neutral-900 dark:text-white
                   placeholder-neutral-400
                   focus:outline-none
                   focus:ring-2 focus:ring-neutral-900/20
                   dark:focus:ring-white/20
                   transition"
      />
    </div>
  );
}