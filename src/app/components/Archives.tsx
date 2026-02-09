export function Archives() {
  return (
    <div className="flex flex-col gap-8 w-full py-8">
      <h3 className="font-sans font-medium leading-[1.2] tracking-tighter text-black text-[36px]">
        Archieves
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:h-[560px] w-full">
        {/* Large Left Box */}
        <div className="flex-1 bg-[#d9d9d9] rounded-[13px] min-h-[300px]" />
        
        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Top Wide Box */}
          <div className="flex-1 bg-[#d9d9d9] rounded-[13px] min-h-[200px]" />
          
          {/* Bottom Two Boxes */}
          <div className="flex-1 flex gap-8">
            <div className="flex-1 bg-[#d9d9d9] rounded-[13px] min-h-[200px]" />
            <div className="flex-1 bg-[#d9d9d9] rounded-[13px] min-h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
