import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <hr className="mx-4 md:mx-8" />
      <div className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
        <Image
          src="/img/vixtero-logo-only.png"
          alt="Vixtero Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-8 w-auto"
        />
        <p className="text-xs text-[#666666]">
          © 2025 VIXTERO. All rights reserved.
        </p>
      </div>
      <div className="h-4 bg-gradient-to-r from-[#4673BC] to-[#59E9D7]" />
    </footer>
  );
}
