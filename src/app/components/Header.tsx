"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const logoMap: Record<string, string> = {
  "/vixbonded": "/logo/vixbonded.png",
  "/vixfreight": "/logo/vixfreight.png",
  "/vixlite": "/logo/vixlite.png",
  "/vixborder": "/logo/vixborder.png",
  "/": "/logo/vixtero.png",
};

export default function Header() {
  const pathname = usePathname();

  // Match from the start of path
  const matched = Object.keys(logoMap).find((prefix) =>
    pathname.startsWith(prefix)
  );

  const logoSrc = logoMap[matched || "/"];

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#our-products", label: "Our Products" },
  ];
  return (
    <header className="sticky top-0 z-10 border-b border-[#F2F2F2] bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Go to Home" className="block">
          <span className="sr-only">Home</span>
          <div className="relative h-[40px] w-[100px]">
            <Image
              src={logoSrc}
              alt="Vix Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <NavigationMenuDemo />
          <div className="flex items-center gap-4">
            <Button
              className="hidden bg-[#004766] transition duration-300 hover:bg-[#004766] hover:brightness-90 md:block"
              onClick={() => {
                document
                  .getElementById("contact-us")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              type="submit"
            >
              Book a Demo
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Select a section
                  </SheetDescription>
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
        </div>
      </div>
    </header>
  );
}

const menuItems = [
  {
    id: "vixborder",
    title: "Vixborder",
    description: "Automate Export-Import Document",
    href: "/vixborder",
    image: "/logo/menu-vixborder.png",
    gradientFrom: "from-blue-100/50",
    gradientTo: "to-white",
  },
  {
    id: "vixbonded",
    title: "Vixbonded",
    description: "Expert Insights, Smarter Decisions",
    href: "/vixbonded",
    image: "/logo/menu-vixbonded.png",
    gradientFrom: "from-green-100/50",
    gradientTo: "to-white",
  },
  {
    id: "vixfreight",
    title: "Vixfreight",
    description: "One Platform for All Freight",
    href: "/vixfreight",
    image: "/logo/menu-vixfreight.png",
    gradientFrom: "from-red-100/50",
    gradientTo: "to-white",
  },
  {
    id: "vixlite",
    title: "Vixlite",
    description: "Simplify Trade Operations",
    href: "/vixlite",
    image: "/logo/menu-vixlite.png",
    gradientFrom: "from-sky-100/50",
    gradientTo: "to-white",
  },
];

export function NavigationMenuDemo() {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const [hovered, setHovered] = useState<string>("vixborder");
  const activeItem =
    menuItems.find((item) => item.id === hovered) || menuItems[0];
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {isRoot ? (
          <NavigationMenuItem>
            <Link href="/#about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : null}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {isRoot ? "Our Products" : "Other Products"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1.5fr_1.5fr]">
              {/* IMAGE DISPLAY BLOCK */}
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div
                    className={cn(
                      "relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md bg-gradient-to-b transition-all duration-300 ease-in-out",
                      activeItem.gradientFrom,
                      activeItem.gradientTo
                    )}
                  >
                    {menuItems.map((item) => (
                      <Image
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={300}
                        priority={true}
                        className={cn(
                          "absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ease-in-out",
                          hovered === item.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    ))}
                  </div>
                </NavigationMenuLink>
              </li>
              {/* LIST ITEMS */}
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavigationMenuLink
                    asChild
                    onMouseEnter={() => setHovered(item.id)}
                    onFocus={() => setHovered(item.id)} // for keyboard nav
                  >
                    <a
                      href={item.href}
                      className="block rounded-md p-2 transition hover:bg-muted"
                    >
                      <div className="text-sm font-medium uppercase">
                        {item.title}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
