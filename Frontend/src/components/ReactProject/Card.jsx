import CardNav from "./CardNav";

export default function App() {
  const logo = "";

  const items = [
    {
      label: "Dashboard",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Home", href: "/" },
        { label: "About", ariaLabel: "About", href: "/About" },
        { label: "Categories", ariaLabel: "Categories", href: "/Categories" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Product", ariaLabel: "Product", href: "/Product" },
        { label: "Blog", ariaLabel: "Blog", href: "/Blog" },
        { label: "Support", ariaLabel: "Support", href: "/Contact" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Contact", ariaLabel: "Contact", href: "/Contact" },
        { label: "Instagram", ariaLabel: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", ariaLabel: "Facebook", href: "https://facebook.com" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
