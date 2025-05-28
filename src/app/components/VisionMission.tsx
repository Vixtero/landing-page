import {
  Package,
  ShieldCheck,
  Shuffle,
  Wallet2,
  Waypoints,
} from "lucide-react";
import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="m-auto max-w-7xl px-8">
      <Vision />
      <Mission />
    </section>
  );
}

function Vision() {
  return (
    <section className="flex items-center gap-16">
      <div>
        <h1 className="text-3xl font-semibold text-[#01627F]">Our Vision</h1>
        <p className="text-lg italic text-[#666666]">
          Our vision is to create a seamless global trade ecosystem that
          simplifies processes, ensures compliance, and enhances financial
          accessibility.
        </p>
      </div>
      <Image
        src="/img/ship-container.png"
        alt="ship-container"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-[40%]"
      />
    </section>
  );
}

// MissionList.tsx
type Mission = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
};

type MissionListProps = {
  missions: Mission[];
};

function Mission() {
  const missions = [
    {
      id: 1,
      icon: <Shuffle size={32} color="#34CBFF" />,
      bgColor: "#ECFBFF",
      title: "Simplify Trade Processes",
      description:
        "Streamlining trade processes to make them faster and more efficient",
    },
    {
      id: 2,
      icon: <ShieldCheck size={32} color="#4B9B4B" />,
      bgColor: "#EEF7EE",
      title: "Ensure Regulatory Compliance",
      description:
        "Ensuring adherence to global and domestic trade regulations",
    },
    {
      id: 3,
      icon: <Wallet2 size={32} color="#FF6A8E" />,
      bgColor: "#FFEBF0",
      title: "Enhance Financial Accessibility",
      description:
        "Improving access to financial services for all trade stakeholders",
    },
    {
      id: 4,
      icon: <Package size={32} color="#F8A71B" />,
      bgColor: "#FEF4E1",
      title: "Optimize Supply Chain Operations",
      description:
        "Enhancing supply chain operations to be more responsive and cost-effective",
    },
    {
      id: 5,
      icon: <Waypoints size={32} color="#BC6DC5" />,
      bgColor: "#F7EDF8",
      title: "Build a Connected Trade Ecosystem",
      description: "Creating a cohesive and synergistic trade ecosystem",
    },
  ];
  return (
    <section className="mx-32 mt-24">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#01627F]">Our Mission</h1>
        <p className="text-balance text-lg text-[#666666]">
          The VIXTERO Trade Portal is designed to be a comprehensive, scalable,
          and resilient platform that facilitates seamless global and domestic
          trade.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-16">
        <ul className="grid grid-cols-6 justify-center justify-items-center">
          <li
            key={missions[0].id}
            className="col-span-2 max-w-80 border-[0.5px] border-l-0 border-t-0 border-[#F5F5F5] p-8 text-center"
          >
            <div
              className="grid size-12 place-content-center justify-self-center rounded-md"
              style={{ backgroundColor: missions[0].bgColor }}
            >
              {missions[0].icon}
            </div>
            <h3 className="mt-4 font-semibold">{missions[0].title}</h3>
            <p className="mt-2 text-sm text-[#666666]">
              {missions[0].description}
            </p>
          </li>
          <li
            key={missions[1].id}
            className="col-span-2 max-w-80 border-[0.5px] border-t-0 border-[#F5F5F5] p-8 text-center"
          >
            <div
              className="grid size-12 place-content-center justify-self-center rounded-md"
              style={{ backgroundColor: missions[1].bgColor }}
            >
              {missions[1].icon}
            </div>
            <h3 className="mt-4 font-semibold">{missions[1].title}</h3>
            <p className="mt-2 text-sm text-[#666666]">
              {missions[1].description}
            </p>
          </li>
          <li
            key={missions[2].id}
            className="col-span-2 max-w-80 border-[0.5px] border-r-0 border-t-0 border-[#F5F5F5] p-8 text-center"
          >
            <div
              className="grid size-12 place-content-center justify-self-center rounded-md"
              style={{ backgroundColor: missions[2].bgColor }}
            >
              {missions[2].icon}
            </div>
            <h3 className="mt-4 font-semibold">{missions[2].title}</h3>
            <p className="mt-2 text-sm text-[#666666]">
              {missions[2].description}
            </p>
          </li>
          <li className="col-span-3 max-w-80 justify-self-end border-[0.5px] border-b-0 border-l-0 border-[#F5F5F5] p-8 text-center">
            <div
              className="grid size-12 place-content-center justify-self-center rounded-md"
              style={{ backgroundColor: missions[3].bgColor }}
            >
              {missions[3].icon}
            </div>
            <h3 className="mt-4 font-semibold">{missions[3].title}</h3>
            <p className="mt-2 text-sm text-[#666666]">
              {missions[3].description}
            </p>
          </li>
          <li className="col-span-3 max-w-80 justify-self-start border-[0.5px] border-b-0 border-r-0 border-[#F5F5F5] p-8 text-center">
            <div
              className="grid size-12 place-content-center justify-self-center rounded-md"
              style={{ backgroundColor: missions[4].bgColor }}
            >
              {missions[4].icon}
            </div>
            <h3 className="mt-4 font-semibold">{missions[4].title}</h3>
            <p className="mt-2 text-sm text-[#666666]">
              {missions[4].description}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

const MissionList = ({ missions }: MissionListProps) => (
  <>
    {missions.map((mission) => (
      <li key={mission.id} className="max-w-80 text-center">
        <div
          className="grid size-12 place-content-center justify-self-center rounded-md"
          style={{ backgroundColor: mission.bgColor }}
        >
          {mission.icon}
        </div>
        <h3 className="mt-4 font-semibold">{mission.title}</h3>
        <p className="mt-2 text-sm text-[#666666]">{mission.description}</p>
      </li>
    ))}
  </>
);
