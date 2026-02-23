import jwt from "jsonwebtoken";

/* =========================
   CONFIG
========================= */
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_key";
const JWT_EXPIRES_IN = "1d";

/* =========================
   SIGN TOKEN
========================= */
export function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN
    }
  );
}

/* =========================
   VERIFY TOKEN (OPTIONAL USE)
========================= */
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}