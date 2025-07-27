import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="mr-3 rounded-full bg-red-600 px-4 py-1.5 text-xs text-white">
            Coming Soon
          </span>
          <span className="text-sm font-medium">
            Vixfreight is launching soon!
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Simplify Your Trade Operations with Vixfreight
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Vixfreight is our upcoming lightweight solution for efficient
          international trade management. Designed for speed, simplicity, and
          success.
        </p>

        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <Button asChild className="bg-red-500 hover:bg-red-600">
            <Link href="https://www.instagram.com/vixteropintar">
              Notify Me <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
