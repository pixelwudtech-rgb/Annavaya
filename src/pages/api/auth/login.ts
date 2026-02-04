import type { APIRoute } from "astro";
import { pool } from "@/lib/db";
import crypto from "node:crypto";

export const prerender = false;

// helpers (must match register)
const KEY_LENGTH = 64;

function verifyPassword(
  password: string,
  stored: string
): boolean {
  const [salt, originalHash] = stored.split(":");

  const hash = crypto
    .scryptSync(password, salt, KEY_LENGTH)
    .toString("hex");

  return crypto.timingSafeEqual(
    Buffer.from(hash, "hex"),
    Buffer.from(originalHash, "hex")
  );
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const identifier = String(formData.get("identifier") || "");
    const password = String(formData.get("password") || "");
    const type = String(formData.get("type") || ""); // email | phone

    if (!identifier || !password || !type) {
      return new Response(
        JSON.stringify({ error: "Missing credentials" }),
        { status: 400 }
      );
    }

    const query =
      type === "email"
        ? `SELECT * FROM public.users WHERE email = $1`
        : `SELECT * FROM public.users WHERE phone = $1`;

    const { rows } = await pool.query(query, [identifier]);
    const user = rows[0];

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, user.password);

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
};
