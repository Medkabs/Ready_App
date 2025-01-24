import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
          layout ="responsive"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.blue.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Advanced Project Management
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.blue.500),theme(colors.indigo.500),theme(colors.purple.600),theme(colors.purple.300),theme(colors.blue.500))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Delivering Excellence in Web Development
            </h2>
            <p className="text-lg text-indigo-200/65">
            Our experienced team uses advanced project management techniques
             to ensure your web application is delivered on time and within
              budget, with an emphasis on Customer experience and success.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={800}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg>
              <h3  id="OurMethod"className="mb-1 font-nacelle text-[2rem] font-semibold text-blue-100 neon-text">
                Quality Assurance
              </h3>
              <p className="text-white">
              Our team ensures your web app performs flawlessly by thoroughly 
              testing for bugs, performance issues, and security vulnerabilities.
               We guarantee a smooth, reliable user experience across all devices
                and browsers before launch.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[2rem] font-semibold text-blue-600">
              Real Time Collaboration
              </h3>
              <p className="text-white-200/65">
              We emphasize real time collaboration throughout the 
               development process. Our team works closely with you, maintaining open
                lines of communication to ensure your vision is fully realized. 
                We provide platforms that allow for instant
                 feedback, regular updates, and transparent progress tracking.
                  Whether it's through virtual meetings, shared project dashboards, 
                  or instant messaging, we keep you involved every step of the way.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[2rem] font-bold text-purple-600 neon-text">
                Secure Solutions AND Optimized Performance
              </h3>
              
              <p className="text-white-200/65">
           
              We prioritize building secure, privacy compliant applications by 
              implementing advanced security measures to 
               protect against threats and ensure regulatory compliance. 
              Our solutions are optimized for performance,
                 to deliver fast load times, smooth responsiveness,
                 and reliability. We help deliver 
                 secure and seamless experiences.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                />
                <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                <path
                  d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                  opacity=".48"
                />
                <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[2rem] font-semibold text-blue-100">
              Focus on SEO
              </h3>
              <p className="text-white-200/65">
              We focus on every aspects of SEO to boost your website’s visibility on search engines, 
              driving more traffic and improving your online presence. We optimize
               everything from keywords to technical aspects, ensuring your site 
               ranks higher and provides value to users
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[2rem] font-semibold text-blue-600">
              Flexible Solutions
              </h3>
              <p className="text-white-200/65">
              We offer adaptable development processes that evolve with your 
              project’s needs. Whether it's scaling, adding features, or 
              responding to new priorities, our team stays agile to ensure your
               project aligns with changing requirements and business goals.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[2rem] font-semibold text-purple-600">
                Customer Priority
              </h3>
              <p className="text-white-200/65">
                We UNDERSTAND that our CUSTOMERS are at the CENTER of our MISSION. As such, 
                We are dedicated to go above and beyond to provide ongoing customer service and excellent technical support.
.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
