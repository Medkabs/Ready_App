import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.blue.500),theme(colors.purple.200),theme(colors.purple.600),theme(colors.blue.300),theme(colors.purple.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Web Application Development 
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-white-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in designing, developing, and deploying high quality web applications
                tailored to your business needs. Our team of experts ensures that every project 
                is handled with precision and care, delivering results that exceed expectations.
              </p>
            </div>
          </div>

          {/* Video that plays automatically on load */}
          <div className="relative flex justify-center items-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="100%"
              height="50%"
              // className="rounded-2xl"
            >
              <source src="videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}