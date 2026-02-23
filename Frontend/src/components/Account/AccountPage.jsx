"use client";

import React, { useEffect, useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);

  /* 🔐 LOGOUT */
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/LogIn";
  };

  /* =========================
     FETCH ACCOUNT (JWT)
  ========================= */
useEffect(() => {
  const token = localStorage.getItem("token");

  // 🔐 No token → redirect to login
  if (!token) {
    window.location.href = "/LogIn";
    return;
  }

  const fetchAccount = async () => {
    try {
      const API = import.meta.env.PUBLIC_API_BASE_URL;

      if (!API) {
        console.warn("PUBLIC_API_BASE_URL is not defined");
        return;
      }

      const res = await fetch(`${API}/api/account`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 🔐 Token expired / invalid
      if (res.status === 401) {
        localStorage.clear();
        window.location.href = "/LogIn";
        return;
      }

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();

      setName(data.name || "");
      setEmail(data.email || "");
      setPhone(data.mobile || "");
    } catch (err) {
      console.error("Account fetch failed:", err);
    }
  };

  fetchAccount();
}, []);

  /* =========================
     SAVE ACCOUNT
  ========================= */
 const handleSave = async () => {
  setSaving(true);

  try {
    const API = import.meta.env.PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    if (!API) {
      console.warn("PUBLIC_API_BASE_URL is not defined");
      return;
    }

    if (!token) {
      window.location.href = "/LogIn";
      return;
    }

    const res = await fetch(`${API}/api/account`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
        mobile: phone,
      }),
    });

    // 🔐 Token expired / invalid
    if (res.status === 401) {
      localStorage.clear();
      window.location.href = "/LogIn";
      return;
    }

    if (!res.ok) {
      throw new Error(`Save failed with status ${res.status}`);
    }

    // Optional: success feedback
    console.log("Account updated successfully");
  } catch (err) {
    console.error("Save failed:", err);
  } finally {
    setSaving(false);
  }
};

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900">Account</h1>
          <p className="text-gray-500 mt-1">
            Manage your personal information
          </p>
        </div>

        {/* PROFILE FORM */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10">

          {/* AVATAR */}
          <div className="flex items-center gap-6 mb-8">
            <div className="h-16 w-16 rounded-full bg-[#00945A]/10 flex items-center justify-center text-[#00945A] font-semibold text-xl">
              {name ? name.charAt(0).toUpperCase() : "?"}
            </div>
            <p className="text-sm text-gray-500">
              Your profile details
            </p>
          </div>

          {/* NAME */}
          <div className="mb-6">
            <label className="block text-sm text-gray-500 mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3
                         focus:outline-none focus:border-[#00945A]"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block text-sm text-gray-500 mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3
                         focus:outline-none focus:border-[#00945A]"
            />
          </div>

          {/* PHONE (READ ONLY) */}
          <div className="mb-10">
            <label className="block text-sm text-gray-500 mb-1">
              Mobile number
            </label>
            <input
              value={phone}
              disabled
              className="w-full bg-gray-50 border border-gray-200
                         rounded-lg px-4 py-3 text-gray-600"
            />
          </div>

          {/* SAVE */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3 rounded-full bg-[#00945A]
                       text-white font-medium disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>

        {/* OTHER OPTIONS */}
        <div className="bg-white rounded-2xl border border-gray-200 divide-y">
          <AccountItem title="My Orders" subtitle="View order history" />
          <AccountItem title="Saved Addresses" subtitle="Manage addresses" />
          <AccountItem title="Security" subtitle="Password & security" />
        </div>

        {/* LOGOUT */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <button
            onClick={handleLogout}
            className="animated-button h-12 justify-center"
          >
            <span className="text">Log out</span>
          </button>
        </div>

      </div>
    </section>
  );
}

/* =========================
   REUSABLE ROW
========================= */
function AccountItem({ title, subtitle }) {
  return (
    <div className="flex items-center justify-between p-6 hover:bg-gray-50 cursor-pointer">
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <span className="text-gray-400 text-xl">›</span>
    </div>
  );
}