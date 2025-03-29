"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoelevas from "../../public/logoelevas.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0  z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className=" flex w-full h-18 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoelevas}
            alt="ELEVAS Logo"
            width={72} // Define width y height correctamente
            priority
            style={{ height: "auto" }} // Evita el warning
          />
        </Link>
        <nav className="hidden md:flex gap-6 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#e4b53b]"
                  : "text-[#6d381a] hover:text-[#e4b53b]"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  className="h-0.5 bg-[#e4b53b]"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 ">
          <Button
            asChild
            className="hidden md:flex bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white"
          >
            <Link href="/contacto">Contáctanos</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-[#6d381a]"
              >
                <Menu className="h-5 w-5 text-[#6d381a]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col gap-6 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#e4b53b]"
                        : "text-[#6d381a] hover:text-[#e4b53b]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white"
                >
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
