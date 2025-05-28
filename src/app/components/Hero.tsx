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
        <div className="flex h-full min-w-[50%] flex-col justify-center px-8">
          <h1 className="font-archivo text-4xl font-semibold text-[#005D7A]">
            Unlock Seamless Global Trade
          </h1>
          <h2 className="font-dongle text-4xl font-medium text-[#0283B1]">
            Simplify. Connect. Thrive Globally.
          </h2>
          <p className="mt-4 text-[#646464]">
            Empowering businesses to trade across borders without the stress —
            automate compliance, integrate systems, and scale faster.
          </p>
          <button className="mt-8 flex w-fit gap-2 rounded-md bg-[#005D7A] px-4 py-2 text-white transition duration-300 hover:bg-[#005D7A95]">
            Learn more
            <ChevronDown />
          </button>
        </div>
        <Background />
        <MapChart />
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
        className="absolute right-0 h-auto w-[90%] scale-x-[-1]"
      />
    </div>
  );
}
function BackgroundDeprecated() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-[#F5FCFF]">
      <motion.div
        className="absolute bottom-0 right-0"
        initial={{
          x: "0vh",
          y: "0vh",
          scale: 1,
        }}
        animate={{ x: "0vh", y: "0vh", scale: [1, 1.5, 1] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <Image
          src="/svg/blob.svg"
          alt="blob"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[80%] w-auto scale-x-[-1]"
        />
      </motion.div>
      {/* Animated Plane */}
      <motion.div
        className="absolute -left-[30%] -top-[30%] z-10 size-[800px]"
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{
          duration: 200,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src="/img/plane-circle-eye-view.png"
          alt="Plane Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rotate-90"
        />
      </motion.div>

      {/* Animated Ship */}
      <motion.div
        className="absolute z-10 h-40 w-40"
        style={{ left: "10%" }}
        initial={{ y: "70vh" }}
        animate={{ y: "-10vh" }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/img/ship-eye-view.png"
          alt="Ship Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-8"
        />
      </motion.div>
    </div>
  );
}
