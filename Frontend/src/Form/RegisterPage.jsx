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

    const payload = {
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };

    try {
      const res = await fetch(
        import.meta.env.DEV
          ? "http://localhost:3000/api/register"
          : `${import.meta.env.PUBLIC_API_BASE}/api/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Registration failed");

      setSuccess(true);
      setTimeout(() => (window.location.href = "/LogIn"), 1200);
    } catch (err) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 md:mt-20 mt-10">

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl
                      bg-white/80 dark:bg-neutral-900/80
                      backdrop-blur-xl
                      border border-neutral-200/60 dark:border-neutral-800
                      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                      p-8">

        {/* Brand */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-neutral-500">
            Welcome
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white mt-2">
            Create account
          </h1>
          <p className="text-sm text-neutral-500 mt-3">
            One account. Everything managed.
          </p>
        </div>

        {/* Success */}
        {success && (
          <div className="mb-5 rounded-lg border border-green-200 bg-green-50
                          text-green-700 px-4 py-2 text-sm text-center">
            Account created successfully ✨
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50
                          text-red-700 px-4 py-2 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Userame" name="username" placeholder="Username" />
          <Input label="Email" name="email" type="email" placeholder="you@example.com" />
          <Input label="Phone" name="phone" placeholder="+91 98765 43210" />
          <Input label="Password" name="password" type="password" placeholder="••••••••" />

          <button
            type="submit"
            disabled={loading || success}
            className="w-full rounded-xl
                       bg-neutral-900 dark:bg-white
                       text-white dark:text-neutral-900
                       py-3 text-sm font-medium
                       transition-all duration-200
                       hover:opacity-90
                       hover:shadow-lg
                       disabled:opacity-60"
          >
            {loading ? "Creating…" : success ? "Done ✓" : "Create account"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <a
            href="/LogIn"
            className="font-medium text-neutral-900 dark:text-white hover:underline"
          >
            Log in
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