import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactUs from "@/app/components/ContactUs";
import OtherProducts from "@/app/components/OtherProducts";
import Image from "next/image";

export default function Page() {
  return (
    <>
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
      <Features />
      <OtherProducts />
      <ContactUs />
    </>
  );
}

function Features() {
  return (
    <section className="bg-red-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-2 px-6 py-12 md:grid-cols-2 md:gap-8">
        <Image
          src="/img/vixborder/feature-1.png"
          alt="AI-Powered OCR extracting data from trade documents"
          width={400}
          height={200}
          className="order-1 h-auto w-full md:order-2"
        />
        <div className="order-2 mb-8 md:order-1 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-red-800">
            AI-Powered OCR: From Documents to Structured Forms
          </h2>
          <p className="mb-4 text-[#646464]">
            Extracts data from Commercial Invoices, Packing Lists, Airway Bills
            (AWB), and Bills of Lading (BL) with up to 99% accuracy, converting
            unstructured documents into usable form data automatically.
          </p>
        </div>

        <Image
          src="/img/vixborder/feature-2.png"
          alt="Automated HS Code and Lartas validation"
          width={400}
          height={200}
          className="order-3 h-auto w-full"
        />
        <div className="order-4 mb-8 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-red-800">
            Automated HS Code & Lartas Validation
          </h2>
          <p className="mb-4 text-[#646464]">
            Automatically identifies HS Codes and checks for Lartas (Prohibited
            & Restricted Items) regulations using up-to-date official databases.
          </p>
        </div>

        <Image
          src="/img/vixborder/feature-3.png"
          alt="Internal approval workflow for trade documents"
          width={400}
          height={200}
          className="order-5 h-auto w-full md:order-6"
        />
        <div className="order-6 mb-8 md:order-5 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-red-800">
            Internal Approval Workflow
          </h2>
          <p className="mb-4 text-[#646464]">
            Provides structured document approval flows with Maker, Checker, and
            Approver roles, including real-time notifications for faster review
            and decision-making.
          </p>
        </div>

        <Image
          src="/img/vixborder/feature-4.png"
          alt="Automated and dynamic cost calculation for trade operations"
          width={400}
          height={200}
          className="order-7 h-auto w-full"
        />
        <div className="order-8 mb-8 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-red-800">
            Automated & Dynamic Cost Calculation
          </h2>
          <p className="mb-4 text-[#646464]">
            Automatically calculates duties, taxes (VAT, PPH), and logistics
            costs based on document data and current regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
