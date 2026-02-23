"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userName, setUserName] = useState("");
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("name");
  window.location.href = "/";
};


useEffect(() => {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name"); // optional

  if (token) {
    setIsLoggedIn(true);
    setUserName(name || "");
  } else {
    setIsLoggedIn(false);
  }
}, []);



  /* ===============================
     SCROLL HIDE / REVEAL
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 50);

      if (current > lastScrollY.current && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     LOCK BODY SCROLL (MOBILE)
  =============================== */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0.5 left-0 right-0 z-50 
          transition-transform duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div
          className={`
            mx-auto flex h-[70px] sm:h-[80px] items-center px-4 sm:px-6
            transition-all duration-300
            ${
              scrolled
                ? "max-w-[75%] rounded-full bg-white shadow-lg"
                : "max-w-[75%] rounded-full bg-white shadow-lg"
            }
          `}
        >
          <div className="flex w-full max-w-7xl mx-auto items-center justify-between">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img src="/Logo Color.png" alt="Keerai World" className="h-16 sm:h-24" />
            </a>

            {/* DESKTOP NAV */}
           <nav className="hidden lg:flex items-center gap-4 text-black">
  <a
    href="/"
    className="px-4 py-2 rounded-full hover:bg-[#00945A] hover:text-white transition"
  >
    Home
  </a>

  <a
    href="/AboutUs"
    className="px-4 py-2 rounded-full hover:bg-[#00945A] hover:text-white transition"
  >
    About Us
  </a>

  <a
    href="/BlogPage"
    className="px-4 py-2 rounded-full hover:bg-[#00945A] hover:text-white transition"
  >
    Blog
  </a>

  <a
    href="/Shop"
    className="px-4 py-2 rounded-full hover:bg-[#00945A] hover:text-white transition"
  >
    Shop Now
  </a>

  <a
    href="/Contact"
    className="px-4 py-2 rounded-full hover:bg-[#00945A] hover:text-white transition"
  >
    Contact
  </a>
</nav>


            {/* ICONS + CTA (DESKTOP ONLY) */}
           <div className="hidden lg:flex items-center gap-4">

  {/* CART */}
  <a
    href="/Cart"
    className="
      w-14 h-14 rounded-full
      flex items-center justify-center
      bg-white
      shadow-[0_10px_30px_rgba(0,0,0,0.15)]
     
      hover:-translate-y-0.5
      transition-all duration-300
    "
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-900"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={1.4}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2.5 3h2.2l.45 2.2m1.2 7.6h9.8l3.8-7.4H5.15M8 18a1.25 1.25 0 102.5 0A1.25 1.25 0 008 18zm7 0a1.25 1.25 0 102.5 0A1.25 1.25 0 0015 18z"
  />
</svg>
  </a>

  {/* WISHLIST */}
  <a
    href="/Favorites"
    className="
      w-14 h-14 rounded-full
      flex items-center justify-center
      bg-white
      shadow-md
      hover:shadow-lg
      hover:-translate-y-0.5
      transition-all duration-300
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364 4.318 12.682a4.5 4.5 0 010-6.364z"
      />
    </svg>
  </a>

  {/* USER MENU */}
  <div className="relative group">
    <div
      className="
        w-14 h-14 rounded-full
        flex items-center justify-center
        bg-white
        shadow-md
        hover:shadow-lg
        hover:-translate-y-0.5
        transition-all duration-300
        cursor-pointer
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>

    {/* DROPDOWN */}
    <div
      className="
        absolute right-0 mt-3 w-48
        rounded-2xl bg-white
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        opacity-0 invisible
        translate-y-2
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all duration-300
      "
    >
      {[
        { label: "My Account", href: "/Account" },
        { label: "Orders", href: "/Orders" },
        { label: "Wishlist", href: "/Favorites" },
       
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="
            block px-5 py-3 text-sm
            text-gray-700
            hover:bg-gray-100
            rounded-xl
          "
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>

  {/* LOGIN CTA */}
  {/* USER / LOGIN */}
{!isLoggedIn ? (
  /* LOGIN BUTTON */
  <a href="/LogIn" className="animated-button h-12">
    <svg className="arr-2" viewBox="0 0 24 24">
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
    <span className="text">LOG IN</span>
    <span className="circle"></span>
    <svg className="arr-1" viewBox="0 0 24 24">
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  </a>
) : (
  /* USER AVATAR + DROPDOWN */
  <div className="relative group">
    <div
      className="
        w-14 h-14 rounded-full
        flex items-center justify-center
        bg-white
        shadow-md
        hover:shadow-lg
        hover:-translate-y-0.5
        transition-all duration-300
        cursor-pointer
      "
    >
      <span className="text-gray-900 font-semibold">
        {userName ? userName.charAt(0).toUpperCase() : "U"}
      </span>
    </div>

    {/* DROPDOWN */}
    <div
      className="
        absolute right-0 mt-3 w-48
        rounded-2xl bg-white
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        opacity-0 invisible
        translate-y-2
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all duration-300
      "
    >
      <a
        href="/Account"
        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-xl"
      >
        My Account
      </a>

      <button
        onClick={handleLogout}
        className="w-full text-left px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 rounded-xl"
      >
        Logout
      </button>
    </div>
  </div>
)}
</div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-3xl text-black"
            >
              ☰
            </button>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-white z-[999] transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center h-[70px] px-6 border-b border-white/10">
          <span className="text-black text-lg">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="text-black text-3xl">
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-12 space-y-8">
          <a
  href="/"
  onClick={() => setIsMenuOpen(false)}
  className="text-black text-2xl"
>
  Home
</a>

<a
  href="/Shop"
  onClick={() => setIsMenuOpen(false)}
  className="text-black text-2xl"
>
  Shop
</a>

<a
  href="/AboutUs"
  onClick={() => setIsMenuOpen(false)}
  className="text-black text-2xl"
>
  AboutUs
</a>

<a
  href="/BlogPage"
  onClick={() => setIsMenuOpen(false)}
  className="text-black text-2xl"
>
  Blog
</a>

<a
  href="/Contact"
  onClick={() => setIsMenuOpen(false)}
  className="text-black text-2xl"
>
  Contact
</a>

          {/* MOBILE QUICK ACTIONS */}
<div className="flex justify-center gap-10 px-6 py-6 border-b border-white/10 lg:hidden">
  {/* FAVORITES */}
  <a
    href="/Favorites"
    onClick={() => setIsMenuOpen(false)}
    className="flex flex-col items-center gap-2 text-black"
  >
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
      <img src="/Home/grocery.gif" alt="Favorites" className="w-11 h-11" />
    </div>
    <span className="text-xs opacity-80">Cart</span>
  </a>

  <a
    href="/Favorites"
    onClick={() => setIsMenuOpen(false)}
    className="flex flex-col items-center gap-2 text-black"
  >
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
      <img src="/icon/like.gif" alt="Favorites" className="w-11 h-11" />
    </div>
    <span className="text-xs opacity-80">Favorites</span>
  </a>

  {/* ACCOUNT */}
  <a
    href="/Account"
    onClick={() => setIsMenuOpen(false)}
    className="flex flex-col items-center gap-2 text-black"
  >
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
      <img src="/icon/add-user.gif" alt="Account" className="w-11 h-11" />
    </div>
    <span className="text-xs opacity-80">Account</span>
  </a>
</div>

          <div className=" md:block  mt-8 space-y-6 flex flex-col">
           {["LOG IN"].map((text) => (
              <a key={text} href="/Contact" className="animated-button h-12">
                <svg className="arr-2" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">{text}</span>
                <span className="circle"></span>
                <svg className="arr-1" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </a>
            ))}
          </div>

          <div className=" text-xs flex justify-between mt-30">
    <a href="/Policy" 
       className="text-gray-900 hover:text-white transition-colors">Privacy Policy</a>

    <a href="/Term" 
       className="text-gray-900 hover:text-white transition-colors">Terms</a>

    <a href="#" 
       className="text-gray-900 hover:text-white transition-colors">Cookies</a>
  </div>
        </nav>
      </div>
    </>
  );
}
