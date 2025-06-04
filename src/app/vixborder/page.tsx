"use client";

import Image from "next/image";
import ContactUs from "@/app/components/ContactUs";
import OtherProducts from "@/app/components/OtherProducts";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <OtherProducts />
      <ContactUs />
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="bg-white px-3 py-12 text-center sm:px-6">
      <div className="mx-auto max-w-7xl items-center gap-8 md:flex">
        <div className="flex-1">
          <div className="flex w-fit items-center gap-1 place-self-center rounded-full p-[2px] pr-2 text-xs text-[#006B99] shadow md:place-self-start">
            <div className="rounded-full bg-gradient-to-r from-[#99E1FF] via-[#E5F8FF] to-[#CCF0FF] p-2 py-1 text-sm font-semibold text-[#006B99]">
              VIXBORDER
            </div>{" "}
            by VIXTERO
          </div>

          <h1 className="mt-2 text-pretty text-center text-3xl font-bold text-[#00648F] md:text-start">
            <span className="text-[#004766]"> Automate</span> your Export-Import
            Document in Seconds
          </h1>
          <p className="text-pretty text-center text-sm text-[#646464] md:text-start md:text-base">
            Extract document data with AI, ensure validation, and send
            declarations straight to CEISA 4.0.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center md:mt-0">
          <button
            className="rounded-lg bg-gradient-to-r from-[#99E1FF] via-[#E5F8FF] to-[#CCF0FF] px-4 py-2 font-semibold text-[#006B99] md:p-4"
            onClick={() => {
              document
                .getElementById("contact-us")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Request a Demo
          </button>
          <button
            className="mt-2 cursor-pointer text-base text-[#006B99]"
            onClick={() => {
              document
                .getElementById("other-products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See other products ▾
          </button>
        </div>
      </div>

      {/* HERO VIDEOS */}
      <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-lg border">
        <video autoPlay muted loop playsInline className="background-video">
          <source
            src="https://d1gt37kdnsmaxt.cloudfront.net/vixborder-product-demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-[#F0FAFF]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-2 px-6 py-12 md:grid-cols-2 md:gap-8">
        <Image
          src="/img/vixborder/feature-1.png"
          alt="OCR Example"
          width={400}
          height={200}
          className="order-1 h-auto w-full md:order-2"
        />
        <div className="order-2 mb-8 md:order-1 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-[#00648F]">
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
          alt="OCR Example"
          width={400}
          height={200}
          className="order-3 h-auto w-full"
        />
        <div className="order-4 mb-8 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-[#00648F]">
            Automated HS Code & Lartas Validation
          </h2>
          <p className="mb-4 text-[#646464]">
            Automatically identifies HS Codes and checks for Lartas (Prohibited
            & Restricted Items) regulations using up-to-date official databases.
          </p>
        </div>

        <Image
          src="/img/vixborder/feature-3.png"
          alt="OCR Example"
          width={400}
          height={200}
          className="order-5 h-auto w-full md:order-6"
        />
        <div className="order-6 mb-8 md:order-5 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-[#00648F]">
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
          alt="OCR Example"
          width={400}
          height={200}
          className="order-7 h-auto w-full"
        />
        <div className="order-8 mb-8 md:mb-0">
          <h2 className="mb-2 text-xl font-bold text-[#00648F]">
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
