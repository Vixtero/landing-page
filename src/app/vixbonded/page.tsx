import Link from "next/link";

export default function Page() {
  return (
    <section className="flex flex-col text-4xl gap-4 font-archivo font-semibold text-gray-800 items-center justify-center h-dvh w-full">
      VIXBONDED PAGE
      <Link
        href="/"
        className="text-blue-500 hover:underline font-normal text-xl"
      >
        Back to home
      </Link>
    </section>
  )
}