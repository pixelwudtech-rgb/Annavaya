import type { APIRoute } from "astro";
import { pool } from "@/lib/db";
import crypto from "node:crypto";

export const prerender = false;

// helpers
const SALT_LENGTH = 16;
const KEY_LENGTH = 64;

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(SALT_LENGTH).toString("hex");

  const hash = crypto
    .scryptSync(password, salt, KEY_LENGTH)
    .toString("hex");

  return `${salt}:${hash}`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const username = String(formData.get("username") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const password = String(formData.get("password") || "");

    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    // 🔐 Secure password hash (hosting-safe)
    const hashedPassword = hashPassword(password);

    // 🗄 Insert into Neon (PostgreSQL)
    await pool.query(
      `INSERT INTO public.users (username, email, phone, password)
       VALUES ($1, $2, $3, $4)`,
      [username, email, phone, hashedPassword]
    );

    return new Response(
      JSON.stringify({ success: true }),
      { status: 201 }
    );
  } catch (err: any) {
    console.error("REGISTER ERROR:", err);

    if (err.code === "23505") {
      return new Response(
        JSON.stringify({ error: "Email already exists" }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
};
