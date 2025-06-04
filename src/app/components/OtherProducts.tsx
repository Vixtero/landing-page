export default function OtherProducts() {
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
    <section id="other-products" className="bg-[#FAFAFA] py-12">
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
