import { NorthEast } from "./Icons";

export function Header() {
  return (
    <nav className="flex justify-between items-start py-8 md:py-12 max-w-[1664px] mx-auto w-full px-6 md:px-16">
      <div className="text-xl md:text-2xl font-serif italic font-medium text-black tracking-tight">
        Divya B
      </div>
      <div className="flex gap-6 md:gap-8 items-center">
        <a
          href="#about"
          className="font-sans text-lg md:text-xl text-black hover:opacity-70 transition-opacity"
        >
          About me
        </a>
        <a
          href="#resume"
          className="flex items-center gap-2 font-sans text-lg md:text-xl text-black hover:opacity-70 transition-opacity group"
        >
          <span>Resume</span>
          {/* <NorthEast className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> */}
        </a>
      </div>
    </nav>
  );
}