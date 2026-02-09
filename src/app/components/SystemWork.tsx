import imgSystem1 from "../../assets/33e7b7ae8a2314c44023e44eeefd73780a9edf4a.png";
import imgSystem2 from "../../assets/734dc8b9d2fd81bca58787e77611280ac7e65117.png";
import imgSystem3 from "../../assets/970903f388e1d3c703317c73ab0cc6b697b3abbe.png";

export function SystemWork() {
  return (
    <div className="flex flex-col gap-16 w-full py-8">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full gap-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h3 className="font-sans font-medium leading-[1.2] tracking-tighter text-black text-[36px]">
            Designing systems that scale
          </h3>
          <p className="text-[#1c1f23]/70 text-[24px] font-[DM_Sans]">
            I advocated for a system that could grow without
            breaking.
          </p>
        </div>
        <a 
          href="https://www.figma.com/deck/uqIObLDchcd94HCETJJeJL/Creating-design-systems-with-variables---tokens?node-id=1-169&t=SPhFH1PGGjuMzpgI-1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 shrink-0 group hover:opacity-80 transition-opacity"
        >
          <span className="text-[#f5719d] font-['DM_Sans'] font-normal leading-[0.96] tracking-[-0.88px] text-[24px]">
            Read more
          </span>
          <div className="relative w-8 h-8">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 32 32">
              <path d="M12 6.66667V9.33333H20.7867L5.33333 24.7867L7.21333 26.6667L22.6667 11.2133V20H25.3333V6.66667H12Z" fill="#F5719D" />
            </svg>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Card 1 */}
        <div className="relative h-[360px] lg:h-[500px] bg-white rounded-[13px] border border-black/10 overflow-hidden group">
          <div className="absolute inset-0 p-8 flex items-center justify-center">
            <img
              src={imgSystem1}
              alt="Design System Shapes"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[360px] lg:h-[500px] bg-[#f3f3f3] rounded-[13px] overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img
              src={imgSystem2}
              alt="UI Components"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[360px] lg:h-[500px] bg-[#d7ceff] rounded-[13px] overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img
              src={imgSystem3}
              alt="Graph"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}