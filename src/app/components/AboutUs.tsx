import { BadgeCheck, FileCheck2, LifeBuoy, Radar } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    {
      icon: <BadgeCheck size={32} color="#004766" />,
      title: "34.000+",
      description: "Trusted Industry Leaders",
    },
    {
      icon: <Radar size={32} color="#004766" />,
      title: "7.000+",
      description: "Potential Network Reach",
    },
    {
      icon: <FileCheck2 size={32} color="#004766" />,
      title: "95%",
      description: "AI Document Accuracy",
    },
    {
      icon: <LifeBuoy size={32} color="#004766" />,
      title: "24/7",
      description: "Mission-Critical Support",
    },
  ];

  return (
    <div id="about-us" className="bg-[#F5FCFF]">
      <section className="m-auto mt-16 max-w-7xl gap-4 px-0 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/img/plane.png" // Replace with actual image path later
            alt="VIX Border Hero"
            width={600}
            height={400}
            className="top-10 w-[70%] md:w-full"
          />
          <div className="p-6 md:p-12">
            <h1 className="text-2xl font-semibold text-[#004766]">
              About VIXTERO
            </h1>
            <p className="mt-2 text-justify text-sm text-[#353535] md:text-left md:text-base">
              At VIXTERO (PT Vixtero Pintar Nusantara), we deliver sophisticated
              services that strengthen both international and domestic trade
              through seamless integration. Our Vix Trade Portal empowers
              businesses to overcome trade barriers with precision, backed by
              comprehensive banking, financing, and insurance solutions.
              Understanding global economic fluctuations, we prepare surplus
              capacity during booms while maintaining agility to optimize
              resources during downturns, ensuring businesses not only survive
              but thrive in any market condition.
            </p>
          </div>
        </div>
        <ul className="flex min-w-[40%] flex-col justify-between gap-0 md:flex-row md:gap-4">
          {stats.map(({ icon, title, description }, index) => (
            <li
              key={index}
              className="flex w-full items-center gap-2 rounded-xl p-4"
            >
              <div className="grid size-12 place-content-center justify-self-center rounded-md">
                {icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#004766]">
                  {title}
                </h3>
                <p className="text-sm text-[#008FCC]">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
