import svgPaths from "./svg-4p5gmrd5yz";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[40px] text-black tracking-[-2px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Designing systems that scale
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] opacity-70 relative shrink-0 text-[#1c1f23] text-[32px] tracking-[-0.704px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Advocating for a system that could grow without breaking.
      </p>
    </div>
  );
}

function NorthEast() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="north_east">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_17_24)" id="north_east">
          <g id="Vector" />
          <path d={svgPaths.p51a2e80} fill="var(--fill-0, #F5719D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_24">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0.96] relative shrink-0 text-[#f5719d] text-[40px] tracking-[-0.88px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Read more
      </p>
      <NorthEast />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}