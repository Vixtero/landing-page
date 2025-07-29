"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OtherProducts() {
  const pathname = usePathname();

  type Product = {
    id: string;
    title: string;
    tag: string;
    description: string;
    logo: string;
  };

  const products: Product[] = [
    {
      id: "vixborder",
      title: "Automate your Export-Import Document in Seconds",
      tag: "VIXBORDER",
      description:
        "Extract document data with AI, ensure validation, and send declarations straight to CEISA 4.0.",
      logo: "/logo/vixborder.png",
    },
    {
      id: "vixbonded",
      title: "Bonded Zone Management Made Easy",
      tag: "VIXBONDED",
      description:
        "Streamline bonded zone operations, automate customs compliance, and manage inventory with real-time visibility and control.",
      logo: "/logo/vixbonded.png",
    },
    {
      id: "vixfreight",
      title: "One Platform for All Freight",
      tag: "VIXFREIGHT",
      description:
        "Connects importers, exporters, and domestic suppliers with shipping lines, air cargo, trucking, and warehousing partners in one streamlined experience.",
      logo: "/logo/vixfreight.png",
    },
    {
      id: "vixlite",
      title: "Essential Trade Tools, Made Simple",
      tag: "VIXLITE",
      description:
        "A streamlined solution for basic customs documentation, order tracking, and invoicing—perfect for businesses seeking simplicity.",
      logo: "/logo/vixlite.png",
    },
  ];

  // Match from the start of path
  const matched = products.find((product) =>
    pathname.startsWith(`/${product.id}`)
  );

  return (
    <section id="other-products" className="bg-[#FAFAFA] py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-semibold text-[#004766] md:text-3xl">
          Other Products
        </h2>
        <p className="mb-10 mt-2 text-sm text-[#666666] md:text-base">
          Get ready for a complete suite of trade solutions is on the way to
          streamline your business operations.
        </p>

        <ul className="grid gap-6 md:grid-cols-3">
          {products
            .filter((product) => {
              // Exclude matched product
              if (product === matched) return false;
              // Exclude vixborder if matched is undefined or pathname is root
              if (product.id === "vixborder" && (!matched || pathname === "/"))
                return false;
              return true;
            })
            .map((product) => (
              <li
                key={product.id}
                className="flex flex-col rounded-xl bg-white p-4 text-left transition hover:shadow-md"
              >
                {/* Product Image */}
                <div className="mb-2 flex justify-center rounded-lg bg-gray-50 p-2 py-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={product.logo}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Tag */}
                <span className="mb-2 inline-block w-fit rounded bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
                  {product.tag}
                </span>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-[#004766] md:text-xl">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-[#646464] md:text-base">
                  {product.description}
                </p>

                {/* Push Learn More to bottom */}
                <div className="mt-auto flex justify-end">
                  <Link
                    href={`/${product.id}`}
                    className="inline-flex items-center font-semibold text-[#004766] hover:underline"
                  >
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </div>
              </li>
            ))}
        </ul>

        {/* <div className="mt-8 flex w-full justify-center">
          <button className="flex gap-2 text-sm font-medium text-[#004766] hover:underline">
            Show all <ChevronDown strokeWidth={1.5} size={20} />
          </button>
        </div> */}
      </div>
    </section>
  );
}
