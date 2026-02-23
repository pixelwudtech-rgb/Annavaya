import { useEffect } from "react";

export default function AdminGuard({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      window.location.href = "/";
    }
  }, []);

  return children;
}