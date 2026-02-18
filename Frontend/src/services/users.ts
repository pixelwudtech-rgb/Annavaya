import type { Users } from "../types/entities.js";

// Temporary in-memory users (no JSON, no faker)
const usersStaticData: Users = [];

export function getUsers() {
  console.log("getUsers");
  return usersStaticData;
}
