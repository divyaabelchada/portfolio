interface WorkItemProps {
  logo?: React.ReactNode;
  title: string;
  date: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  imageStyle?: string; // Additional classes for the image wrapper
}

export function WorkItem({
  logo,
  title,
  date,
  tags,
  imageSrc,
  imageAlt,
  imageStyle,
}: WorkItemProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start w-full">
      {/* Left Text Content */}
      <div className="flex flex-col items-start w-full lg:w-[576px] shrink-0">
        {logo && <div className="mb-8">{logo}</div>}

        <div className="flex flex-col gap-3 mb-8">
          <h3 className="font-sans font-medium leading-[1.2] tracking-tighter text-black text-[36px]">
            {title}
          </h3>
          <p className="font-sans text-[#1c1f23]/70 text-[24px]">
            {date}
          </p>
        </div>

        <div className="w-full h-px bg-[#C2C2C2] mb-8" />

        <div className="flex flex-col gap-2 w-full">
          {tags.map((tag, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="text-[#1c1f23]/70 text-xl md:text-2xl mt-1">
                →
              </span>
              <p className="font-sans leading-normal text-[#1c1f23]/70 flex-1 text-[24px]">
                {tag}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Content */}
      <div
        className={`w-full lg:w-[960px] aspect-[960/752] rounded-[13px] bg-[#d9d9d9] overflow-hidden relative shadow-lg ${imageStyle}`}
      >
        {imageSrc.includes("12a005575d49e7830ee70b49266fe77cc469b992") ? (
          <a
            href="https://www.figma.com/deck/KRAqsQ6NMQL6nAS3oKfyi2/Tata-Play?node-id=1-19424&t=svvOrhd1ijB9dCKv-1"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </a>
        ) : imageSrc.includes("c2a5e46b6dacba5132f7ab25861600a172fb7f4a") ? (
          <a
            href="https://www.figma.com/deck/0Me1SChsxlmvTAdfH1d0Mc/AgScout?node-id=1-89&t=DmgHkz9McZvsMIb2-1"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </a>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        )}
      </div>
    </div>
  );
}