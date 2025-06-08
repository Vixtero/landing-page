"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#our-products", label: "Our Products" },
    // { href: "/#contact-us", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-[#F2F2F2] bg-white py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-2 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              src="/img/vixtero-logo-only.png"
              alt="VIXTERO Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[32px] w-auto hover:cursor-pointer"
            />
            <p className="font-days_one">VIXTERO</p>
          </div>
          <nav>
            <ul className="hidden font-dongle text-2xl font-light md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="p-4 transition duration-300 hover:font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button
          className="hidden rounded-lg border bg-[#004766] px-4 py-2 text-sm text-white transition duration-300 hover:bg-[#00476695] md:block"
          onClick={() => {
            document
              .getElementById("contact-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book a Demo
        </button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <nav>
              <ul className="space-y-2 font-dongle text-2xl font-light">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link href={item.href}>
                        <div className="w-full transition duration-300 hover:font-medium">
                          {item.label}
                        </div>
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild>
              <Button
                className="mt-2 w-full bg-[#004766] hover:bg-[#004766] hover:brightness-90"
                onClick={() => {
                  document
                    .getElementById("contact-us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                type="submit"
              >
                Book a Demo
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
