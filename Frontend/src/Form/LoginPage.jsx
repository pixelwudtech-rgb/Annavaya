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
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier,
          password,
          type
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Login failed");
      }

      // ✅ SUCCESS
      window.location.href = "/Admin/dashboard";

    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-2">
            Login using email or mobile number
          </p>
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2 text-center">
            {error}
          </div>
        )}

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
            className="w-full rounded-lg bg-black text-white py-2.5 text-sm font-medium disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-lg border px-4 py-2.5 text-sm"
      />
    </div>
  );
}
