"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const testimonials = [
  {
    // img: TestimonialImg01,
    // clientImg: ClientImg01,
    name: "About US",
    // company: "",
    content:
      "At Particles.Ai, we blend human creativity with the power of Artificial Intelligence to deliver high quality, secure, and scalable web applications tailored to meet your unique needs.",
    categories: [1, 2],
    id: "testi",
  },
  {
    // img: TestimonialImg02,
    // clientImg: ClientImg02,
    name: "Mission",
    // company: "",
    content:
      "We are at the forefront of modern web development, fusing human expertise with the power of AI. By seamlessly integrating custom development with AI-driven features, we craft intelligent and user-centric applications that streamline operations, enhance user engagement, and drive significant business growth. This innovative approach empowers businesses to gain a competitive edge in the digital landscape by delivering exceptional experiences that anticipate user needs and unlock new avenues for success.",
    categories: [1, 2],
  },
  {
    // img: TestimonialImg03,
    // clientImg: ClientImg03,
    name: "Vision.",
    // company: "Binance",
    content:
      "To be at the forefront of creating significant value for businesses by strategically blending human-driven web development with cutting-edge AI technologies, driving their success and growth in the ever-evolving digital age.",
    categories: [1, 2],
  },
  {
    // img: TestimonialImg04,
    // clientImg: ClientImg04,
    name: "Our Values",
    // company: "Ray Ban",
    content:
      "Innovation: We constantly push the boundaries of technology, combining expert web development with the latest AI advancements to create innovative solutions. Customer Centric: Our customers are at the core of everything we do. We collaborate with you to ensure our solutions are aligned with your vision and deliver lasting impact.Security: With an unwavering focus on data protection, we implement robust security measures to ensure that your web applications remain secure and compliant. Quality: We are committed to delivering high-performance, reliable, and scalable web applications, built with precision and quality.",
    categories: [1, 2],
  },
  {
    // img: TestimonialImg05,
    // clientImg: ClientImg05, 
    name: "Why Choose Us?",
    // company: "Ray Ban",
    content:
      "We understand the power of human expertise and AI integration. We create solutions that are designed to grow with your business, enhance user experiences and streamline business processes. With a focus on quality, security, and customer satisfaction. we ensure your project is delivered on time, within budget, and exceeds expectations. ",
    categories: [1, 2],
  },
  {
    // img: TestimonialImg06,
    // clientImg: ClientImg06,
    name: "Can I request changes?",
    // company: "Maffell",
    content:
      " Yes, we offer flexible development services and can accommodate changes or updates to your web application after launch. Whether it’s adding new features or making design adjustments, our team is here to help.",
    categories: [1, 3],
    id: "quest",
  },
  {
    // img: TestimonialImg07,
    // clientImg: ClientImg07, 
    name: "How much does it cost to develop a custom web application?",
    // company: "Disney",
    content:
      "The cost of developing a custom web application depends on several factors, including the features required, design complexity, and AI integrations. We offer tailored pricing based on your specific needs, and we’ll provide you with an estimate after discussing your project.",

    categories: [1, 3],
  },
  {
    // img: TestimonialImg08,
    // clientImg: ClientImg08,
    name: "Will my web application be mobile friendly?",
    // company: "Forbes Inc.",
    content:
      "Yes, all the web applications we develop are fully responsive, providing your users with access and a consistent experience regardless of the device they are using, whether it's a desktop computer, a smartphone, or a tablet.", categories: [1, 3],
  },
  {
    // img: TestimonialImg09,
    // clientImg: ClientImg09,
    name: "How long does it take to develop a web application?",
    // company: "Cadbury",
    content:
      "The timeline for web application development varies depending on the complexity and scope of the project. Typically, a simple web application may take a few weeks, while larger, more complex applications could take several months. We’ll provide a detailed timeline after discussing your project requirements.",
    categories: [1, 3],
  },
];
export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.blue.600),theme(colors.blue.500),theme(colors.purple.600),theme(colors.purple.300),theme(colors.blue.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Particles.Ai
          </h2>
          <p className="text-lg text-white-200/65">
            We are committed to providing top notch web development services
            that help businesses achieve their goals through innovative solutions.
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[2.25rem] bg-purple-600 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === 1 ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <svg
                  className={`fill-current ${category === 1 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                </svg>
                <span>View All</span>
              </button>
              {/* Button #2 */}
              <button
                id="About"
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === 2 ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
                <svg
                  className={`fill-current ${category === 2 ? "text-indigo-500" : "text-gray-600"}`}
                  // xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />
                </svg>
                <span>About Us</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
                <svg
                  className={`fill-current ${category === 3 ? "text-indigo-500" : "text-gray-600"}`}
                  // xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" />
                </svg>
                <span>FAQs</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === 4 ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg
                  className={`fill-current ${category === 4 ? "text-indigo-500" : "text-gray-600"}`}
                  // xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z" />
                </svg>
                {/* <span>Enteprise</span> */}
              </button>
              {/* Button #5 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === 5 ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              >
                <svg
                  className={`fill-current ${category === 5 ? "text-indigo-500" : "text-gray-600"}`}
                  // xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" />
                </svg>
                {/* <span>Enteprise</span> */}
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    // img: StaticImageData;
    // clientImg: StaticImageData;
    name: string;
    // company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const content = testimonial.content;
  const isLongContent = content.length > 175;

  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-indigo-200/65 "></p>
        <div>
          {isLongContent && !isExpanded ? (
            <span>
              {content.substring(0, 185)}...
              <div
                style={{ color: 'rgb(147 51 234 / var(--tw-text-opacity, 1))', cursor: 'pointer' }}
                onClick={handleToggle}
              >
                ...see more
              </div>
            </span>
          ) : (
            <div data-aos="fade-in-down">
              {content}
              {isLongContent && (
                <div
                  style={{ color: 'rgb(147 51 234 / var(--tw-text-opacity, 1))', cursor: 'pointer' }}
                  onClick={handleToggle}
                  data-aos="fade-in-down"
                >
                  ...see less
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
          </div>
        </div>
      </div>
    </article>
  );
}
