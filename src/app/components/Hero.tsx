import imgDivya from "../../assets/f0e021e89306987c36c716296fa2c0184162de8e.png";

export function Hero() {
  return (
    <section className="relative w-full max-w-[1664px] mx-auto px-6 md:px-16 pt-12 md:pt-24 pb-24 md:pb-40 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start max-w-4xl z-10">
        <div className="mb-6 md:mb-8">
          <h1 className="font-serif italic font-medium leading-[0.96] tracking-tighter text-[#1c1f23] mb-2 text-[64px]">
            Heyo!<span className="inline-block mr-4">✋🏼</span>
            I’m Divya
            <br />
          </h1>
          <h2 className="font-regular leading-[0.96] tracking-tighter text-[#1c1f23]/70 text-[64px] font-[DM_Sans]">
            Product Designer
          </h2>
        </div>

        <p className="font-regular leading-tight tracking-tight text-[#1c1f23]/70 max-w-3xl mb-16 md:mb-24 text-[48px] font-[DM_Sans]">with <span className="text-[#f03473]">5+ years</span> of experience in simplifying digital interfaces</p>

        <div className="w-full flex flex-col gap-4 md:gap-6">
          <p className="font-sans text-[#1c1f23]/70 text-[24px]">
            Currently @HFI designing for Tata Play.
          </p>

          <div className="w-full max-w-2xl h-px bg-[#C2C2C2]" />

          <div className="flex flex-col gap-2">
            <p className="font-sans text-[#1c1f23]/70 text-[24px]">
              Previously at Lollypop Design Studios as UX
              Designer
            </p>
            <p className="font-sans text-[#1c1f23]/70 text-[24px]">
              Get in touch ·{" "}
              <a
                href="mailto:belchadadivya@gmail.com"
                className="text-[#f03473] hover:underline"
              >
                belchadadivya@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-[400px] flex-shrink-0 mt-12 md:-mt-12 lg:-mt-24 self-center md:self-start">
        <img
          src={imgDivya}
          alt="Divya B"
          className="w-full h-auto object-cover transform rotate-2 md:rotate-2 transition-transform hover:scale-105 duration-500"
        />
      </div>
    </section>
  );
}