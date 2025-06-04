import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ScanLine,
  ShieldCheck,
  BarChart3,
  FileText,
  BadgeCheck,
  FileChartColumn,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OurProducts() {
  return (
    <section className="m-auto mb-16 max-w-7xl md:my-16">
      <LatestProduct />
      <OtherProducts />
      {/* <section className="m-auto my-16 grid max-w-7xl grid-cols-[10%_80%_10%]">
        <div className="border-[0.5px] border-l-0 border-t-0 border-[#F5F5F5]"></div>
        <section className="border-[0.5px] border-t-0 border-[#F5F5F5]">
          <div className="p-4 text-center">
            <h1 className="text-3xl font-semibold text-[#01627F]">
              Our Products
            </h1>
            <p className="text-balance text-lg text-[#666666]">
              We offer a comprehensive suite of integrated solutions to enhance
              your trade ecosystem
            </p>
          </div>
        </section>
        <div className="border-[0.5px] border-r-0 border-t-0 border-[#F5F5F5]"></div>
        <CarouselDemo />
      </section> */}
    </section>
  );
}

function CarouselDemo() {
  const items = [
    {
      id: 1,
      name: "VIXBORDER",
      desc: "VixBorder is an application that streamlines the Customs Clearance process by generating Goods Import and Export Notification documents, significantly reducing the risk of Customs penalties (NOTUL - Nota Pembetulan).",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixborder-hero.png",
    },
    {
      id: 2,
      name: "VIXADVIS",
      desc: "VixAdvis is a platform that provides comprehensive information on Customs Tariffs, Import and Export Prohibitions, and Trade Regulations, ensuring compliance with the latest regulations.",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixadvis-hero.png",
    },
    {
      id: 3,
      name: "VIXBONDED",
      desc: "VixBonded is a platform that simplifies the management of Bonded Zones, including the issuance of Import and Export Notification documents, ensuring compliance with Customs regulations.",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixbonded-hero.png",
    },
    {
      id: 4,
      name: "VIXBANK",
      desc: "VixBank is a platform that simplifies the management of Letter of Credit (L/C) and Bank Guarantee (BG) processes, ensuring compliance with banking regulations.",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixbank-hero.png",
    },
    {
      id: 5,
      name: "VIXCASH",
      desc: "VixCash is a platform that simplifies the management of Trade Finance processes, including the issuance of Bank Guarantees and Letters of Credit, ensuring compliance with banking regulations.",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixcash-hero.png",
    },
    {
      id: 6,
      name: "VIXPROTEKSI",
      desc: "VixProteksi is a platform that simplifies the management of Trade Insurance processes, ensuring compliance with insurance regulations.",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixproteksi-hero.png",
    },
    {
      id: 7,
      name: "VIXMARKET",
      desc: "VixMarket is a platform that simplifies the management of Trade Marketplaces, ensuring compliance with marketplace regulations.",
      logo: "/img/vixborder-logo.png",
      img: "/img/vixmarket-hero.png",
    },
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {/* BUTTONS */}
      <div className="border-[0.5px] border-l-0 border-[#F5F5F5]"></div>
      <section className="place-items-center border-[0.5px] border-[#F5F5F5]">
        <Carousel className="p-4">
          <CarouselContent className="-ml-1">
            {items.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <button
                    onClick={() => {
                      if (api) {
                        api.scrollTo(item.id - 1);
                      }
                    }}
                    className={`flex w-full items-center justify-center rounded-full border p-2 text-sm ${
                      current === item.id
                        ? "bg-gradient-to-r from-[#99E1FF] via-[#E5F8FF] to-[#CCF0FF] font-semibold text-[#006B99]"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <div className="border-[0.5px] border-r-0 border-[#F5F5F5]"></div>

      {/* DETAILS */}
      <div className="border-[0.5px] border-l-0 border-[#F5F5F5]"></div>
      <section className="grid grid-cols-[20%_80%]">
        <div className="border-[0.5px] border-[#F5F5F5] p-4">
          <Image
            src={items[current].logo}
            alt={items[current].name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto"
          />
        </div>
        <p className="border-[0.5px] border-[#F5F5F5] p-4 text-[#666666]">
          {items[current].desc}
        </p>
      </section>
      <div className="border-[0.5px] border-r-0 border-[#F5F5F5]"></div>

      {/* HERO IMAGES */}
      <div className="border-[0.5px] border-l-0 border-[#F5F5F5]"></div>
      <section className="place-items-center border-[0.5px] border-[#F5F5F5]">
        <Carousel setApi={setApi} className="p-4">
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id}>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <div className="border-[0.5px] border-r-0 border-[#F5F5F5]"></div>

      {/* ROW 4 */}
      <div className="border-[0.5px] border-b-0 border-l-0 border-[#F5F5F5]"></div>
      <div className="h-16 border-[0.5px] border-b-0 border-[#F5F5F5]"></div>
      <div className="border-[0.5px] border-b-0 border-r-0 border-[#F5F5F5]"></div>
    </>
  );
}

function LatestProduct() {
  return (
    <section className="bg-white py-16">
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold text-[#004766] md:text-3xl">
          Our Products
        </h2>
        <p className="mb-10 mt-2 text-sm text-[#666666] md:text-base">
          We offer a comprehensive suite of integrated solutions to enhance your
          trade ecosystem
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 md:grid-cols-2 md:gap-10">
        {/* Text Content */}
        <div>
          <span className="mb-2 inline-block rounded-md bg-gradient-to-r from-[#99E1FF] via-[#E5F8FF] to-[#CCF0FF] px-2 py-1 text-xs font-semibold text-[#006B99]">
            VIXBORDER
          </span>
          <h3 className="text-xl font-semibold text-[#00648F] md:text-2xl">
            <span className="text-[#004766]">Automate</span> your Export-Import
            Document in Seconds
          </h3>
          <p className="mb-4 text-sm text-[#646464] md:text-base">
            Extract document data with AI, ensure validation, and send
            declarations straight to CEISA 4.0.
          </p>
          <Link
            href="/vixborder"
            className="inline-flex items-center text-sm font-semibold text-[#004766] hover:underline md:text-base"
          >
            Learn more <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/img/vixborder-at-landing.png" // Replace with actual image path later
            alt="VIX Border Hero"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="mt-4 flex max-w-7xl flex-col gap-4 px-4 md:flex-row">
        <div className="flex w-full items-start gap-3">
          <FileText className="mt-1 min-h-6 min-w-6 text-[#595959]" />
          <div>
            <h4 className="text-sm font-semibold text-[#595959]">
              AI Document Scanning
            </h4>
            <p className="text-sm text-[#999999]">
              Extract key data documents with up to 99% accuracy
            </p>
          </div>
        </div>
        <div className="hidden min-h-full min-w-[1px] bg-border md:block" />
        <div className="flex w-full items-start gap-3">
          <BadgeCheck className="mt-1 min-h-6 min-w-6 text-[#595959]" />
          <div>
            <h4 className="text-sm font-semibold text-[#595959]">
              Anti-NOTUL System
            </h4>
            <p className="text-sm text-[#999999]">
              Triple layer Import-Export document validation with alerts and
              notification.
            </p>
          </div>
        </div>
        <div className="hidden min-h-full min-w-[1px] bg-border md:block" />
        <div className="flex w-full items-start gap-3">
          <FileChartColumn className="mt-1 min-h-6 min-w-6 text-[#595959]" />
          <div>
            <h4 className="text-sm font-semibold text-[#595959]">
              Smart Analytics
            </h4>
            <p className="text-sm text-[#999999]">
              Comprehensive analytical reports that provide valuable insights
              into your trade operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherProducts() {
  const products = [
    {
      id: "vixadvis",
      title: "Expert Insights, Smarter Decisions",
      tag: "VIXADVIS",
      description:
        "Empowers companies with strategic insights and tailored solutions across Manufacturing, Automotive, Trading, Customs, and Taxation.",
    },
    {
      id: "vixfreight",
      title: "One Platform for All Freight",
      tag: "VIXFREIGHT",
      description:
        "Connects importers, exporters, and domestic suppliers with shipping lines, air cargo, trucking, and warehousing partners in one streamlined e...",
    },
    {
      id: "vixtrade",
      title: "Simplify Trade Operations",
      tag: "VIXTRADE",
      description:
        "Simplifies customs document management, purchase orders, invoicing, goods flow control, and GRN processes.",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-semibold text-[#004766] md:text-3xl">
          Other Products
        </h2>
        <p className="mb-10 mt-2 text-sm text-[#666666] md:text-base">
          Get ready for a complete suite of trade solutions is on the way to
          streamline your business operations.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl bg-white p-4 text-left transition hover:shadow-sm md:p-6"
            >
              <span className="mb-2 inline-block rounded bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
                {product.tag}
              </span>
              <h3 className="mb-2 text-lg font-bold text-[#004766] md:text-xl">
                {product.title}
              </h3>
              <p className="mb-4 text-sm text-[#646464] md:text-base">
                {product.description}
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center font-semibold text-[#004766] hover:underline"
              >
                Learn more <span className="ml-1">→</span>
              </a> */}
            </div>
          ))}
        </div>

        {/* <div className="mt-8 flex w-full justify-center">
          <button className="flex gap-2 text-sm font-medium text-[#004766] hover:underline">
            Show all <ChevronDown strokeWidth={1.5} size={20} />
          </button>
        </div> */}
      </div>
    </section>
  );
}
