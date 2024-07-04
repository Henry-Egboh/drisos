"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";

const NavBar = () => {
  // get active links and style it
  const pathname = usePathname();
  // get open state
  const [isOpen, setIsOpen] = useState(false);
  // toggle open
  const toggle = () => setIsOpen(!isOpen);
  // close on click outside
  // nav items
  const links = [
    {
      id: 1,
      href: "/",
      name: "Home",
    },
    {
      id: 2,
      href: "/pricing",
      name: "Pricing",
    },
    {
      id: 3,
      href: "/webpages/services",
      name: "Services",
    },
    {
      id: 4,
      href: "/webpages/interior",
      name: "Interior",
    },
    {
      id: 5,
      href: "/webpages/contact",
      name: "Contact",
    },
    {
      id: 6,
      href: "/login",
      name: "Login",
    },
    {
      id: 7,
      href: "/cart",
      name: <FaShoppingCart />,
    },
  ];

  return (
    // nav container
    <nav className="flex items-center justify-between p-2 md:py-4 md:px-12 bg-lime-950 max-w-screen">
      <h1>
        <Link
          className="border-b-2 border-double ring-b font-medium md:font-semibold text-lg md:text-2xl tracking-wide transition duration ease-in-out text-white hover:text-[#c5c6c3]"
          href={"/"}
        >
          Drisos
        </Link>
      </h1>
      {/* nav items for desktop view  */}
      <ul className="hidden md:flex items-center justify-start gap-x-12 mx-auto">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href ? "text-yellow-500" : "text-white"
              } flex hover:text-[#c5c6c3] transition duration-300 ease-in-out text-sm font-medium transform hover:translate-x-1 scale-90`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* nav toggle for mobile view  */}
      <div
        onClick={toggle}
        className="md:hidden flex flex-col items-center justify-center cursor-pointer"
      >
        {isOpen ? (
          <RiCloseLargeFill size={20} className="text-white" />
        ) : (
          <RiMenuFill size={20} className="text-white" />
        )}
      </div>
      {/* nav items for mobile view  */}
      <ul
        className={`md:hidden fixed w-full top-10 left-0 flex flex-col gap-6 p-4 text-white items-center justify-center bg-lime-950 z-50 ${
          isOpen
            ? "flex"
            : "top-0 -left-full transition duration-3000 ease-in-out"
        }`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={`${
                pathname === link.href ? "text-yellow-500" : "text-white"
              } flex hover:text-[#c5c6c3] transition duration-300 ease-in-out text-sm font-medium`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
