import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";

const MapChart = dynamic(() => import("@/app/components/MapChart"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="h-[calc(100dvh-73px)] p-2">
      <div className="relative flex h-full items-center gap-4 overflow-hidden rounded-2xl">
        <div className="flex h-full flex-col items-center justify-start px-2 pt-52 text-center md:max-w-[60%] md:items-start md:justify-center md:px-8 md:pt-0 md:text-left">
          <h1 className="font-archivo text-3xl font-semibold text-[#005D7A] md:text-4xl">
            Unlock Seamless Global Trade
          </h1>
          <h2 className="font-dongle text-3xl font-medium text-[#0283B1] md:text-4xl">
            Simplify. Connect. Thrive Globally.
          </h2>
          <p className="mt-4 text-pretty text-sm text-[#646464] md:text-base">
            Empowering businesses to trade across borders without the stress —
            automate compliance, integrate systems, and scale faster.
          </p>
          <button className="mt-64 flex w-fit gap-2 rounded-md bg-[#005D7A] px-4 py-2 text-white transition duration-300 hover:bg-[#005D7A95] md:mt-8">
            Learn more
            <ChevronDown />
          </button>
        </div>
        <Background />
      </div>
    </section>
  );
}

function Background() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-[#F5FCFF]">
      <Image
        src="/svg/circle-grid.svg"
        alt="blob"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute right-0 h-auto w-[200%] scale-x-[-1] md:w-[90%]"
      />
      <div className="absolute -left-[200px] top-[300px] md:left-[500px] md:top-0">
        <MapChart />
      </div>
    </div>
  );
}
