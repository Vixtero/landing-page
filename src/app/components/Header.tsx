import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#our-products", label: "Our Products" },
    { href: "/#contact-us", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#F2F2F2] bg-white px-8 pb-1 pt-2">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="VIXTERO Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[60px] w-auto hover:cursor-pointer"
        />
        <nav>
          <ul className="flex font-dongle text-2xl font-light">
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
      <button className="rounded-lg border bg-[#004766] px-4 py-2 text-sm text-white transition duration-300 hover:bg-[#00476695]">
        Book a Demo
      </button>
    </header>
  );
}
