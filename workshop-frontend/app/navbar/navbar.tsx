"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = (name : string) =>
    `font-medium transition-all ${
      active === name ? "text-orange-500" : "text-gray-600"
    }`;

  return (
    <header className=" top-0  fixed left-0 w-full bg-white shadow-xl shadow-orange-400 z-50">
  <div className="flex items-center justify-between px-4 md:px-30 py-3">
    <h4 className="text-2xl text-orange-600 font-bold">COOKCRAFT</h4>

    {/* Desktop Navbar */}
    <nav className="hidden text-xl md:flex items-center gap-6">
      <Link href="/" onClick={() => setActive("home")} className={navClass("home")}>
        HOME
      </Link>
      <Link href="/" onClick={() => setActive("recipes")} className={navClass("recipes")}>
        RECIPE
      </Link>
      <Link href="/" onClick={() => setActive("item")} className={navClass("item")}>
        ITEM
      </Link>
      <Link href="/" onClick={() => setActive("contact")} className={navClass("contact")}>
        CONTACT
      </Link>
    </nav>

    {/* Desktop Buttons */}
    <div className="hidden md:flex gap-3">
      <Button className="bg-orange-600 hover:bg-orange-700 rounded-full">
        <Link href={'/signup'}>Sign-up</Link>
        </Button>
      <Button 
        variant="outline"
        className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white rounded-full"
      >
                <Link href={'/login'}>Login</Link>

      </Button>
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden text-3xl text-orange-600" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
      <Link href="/" onClick={() => { setActive("home"); setMenuOpen(false); }} className={navClass("home")}>
        HOME
      </Link>
      <Link href="/" onClick={() => { setActive("recipes"); setMenuOpen(false); }} className={navClass("recipes")}>
        RECIPE
      </Link>
      <Link href="/" onClick={() => { setActive("item"); setMenuOpen(false); }} className={navClass("item")}>
        ITEM
      </Link>
      <Link href="/" onClick={() => { setActive("contact"); setMenuOpen(false); }} className={navClass("contact")}>
        CONTACT
      </Link>

      <div className="flex gap-3 pt-2">
        <Button className="bg-orange-600 hover:bg-orange-700 rounded-full w-full">Sign-up</Button>
        <Button
          variant="outline"
          className="w-full text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white rounded-full"
        >
          Login
        </Button>
      </div>
    </div>
  )}
</header>

  );
}
