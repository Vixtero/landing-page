import Image from "next/image";
import ContactUs from "../components/ContactUs";

export default function Vixborder() {
  return (
    <>
      <section>
        <div className="bg-white px-6 py-12 text-center">
          <div className="mx-auto flex max-w-7xl items-center gap-8">
            <div className="flex-1">
              <div className="flex w-fit items-center gap-1 rounded-full p-[2px] pr-2 text-xs text-[#006B99] shadow">
                <div className="rounded-full bg-gradient-to-r from-[#99E1FF] via-[#E5F8FF] to-[#CCF0FF] p-2 py-1 text-sm font-semibold text-[#006B99]">
                  VIXBORDER
                </div>{" "}
                by VIXTERO
              </div>
              <h1 className="mt-2 text-start text-4xl font-bold text-[#00648F]">
                <span className="text-[#004766]"> Automate</span> your
                Export-Import Document in Seconds
              </h1>
              <p className="text-start text-base text-[#646464]">
                Extract document data with AI, ensure validation, and send
                declarations straight to CEISA 4.0.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="rounded-lg bg-gradient-to-r from-[#99E1FF] via-[#E5F8FF] to-[#CCF0FF] p-4 font-semibold text-[#006B99]">
                Request a Demo
              </button>
              <div className="mt-2 cursor-pointer text-[#006B99]">
                See other products ▾
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 h-[600px] max-w-7xl rounded-md border p-8"></div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 place-items-center gap-8 bg-[#F0FAFF] px-6 py-12">
          <div className="h-fit">
            <h2 className="mb-2 text-xl font-bold text-[#00648F]">
              AI-Powered OCR: From Documents to Structured Forms
            </h2>
            <p className="mb-4 text-[#646464]">
              Extracts data from Commercial Invoices, Packing Lists, Airway
              Bills (AWB), and Bills of Lading (BL) with up to 99% accuracy,
              converting unstructured documents into usable form data
              automatically.
            </p>
          </div>
          <Image
            src="/img/vixborder/feature-1.png"
            alt="OCR Example"
            width={400}
            height={200}
            className="h-auto w-full"
          />

          <Image
            src="/img/vixborder/feature-2.png"
            alt="OCR Example"
            width={400}
            height={200}
            className="h-auto w-full"
          />
          <div>
            <h2 className="mb-2 text-xl font-bold text-[#00648F]">
              Automated HS Code & Lartas Validation
            </h2>
            <p className="mb-4 text-[#646464]">
              Automatically identifies HS Codes and checks for Lartas
              (Prohibited & Restricted Items) regulations using up-to-date
              official databases.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-[#00648F]">
              Internal Approval Workflow
            </h2>
            <p className="mb-4 text-[#646464]">
              Provides structured document approval flows with Maker, Checker,
              and Approver roles, including real-time notifications for faster
              review and decision-making.
            </p>
          </div>
          <Image
            src="/img/vixborder/feature-3.png"
            alt="OCR Example"
            width={400}
            height={200}
            className="h-auto w-full"
          />

          <Image
            src="/img/vixborder/feature-4.png"
            alt="OCR Example"
            width={400}
            height={200}
            className="h-auto w-full"
          />
          <div>
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
      <ContactUs />
    </>
  );
}
