import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  img?: StaticImageData;
  title1?: string;
  title2?: string;
  title3?: string;
}

const HeroBannerSecton = ({ title1, title2, title3 }: Props) => {
  return (
    <div className="relative w-full h-[50dvh]">
      <Image
        src="/images/img16.jpg"
        alt="Events Banner"
        fill
        className="object-cover"
      />

      {/* Updated overlay color */}
      <div className="absolute inset-0 flex items-center justify-left bg-slate-900/80">
        <div className="container px-4 py-12 mx-auto md:px-0">

          {/* Updated highlight + improved text contrast */}
          <h1 className="text-4xl font-bold leading-tight tracking-wide text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            <span className="my-2 text-blue-400">{title1}</span> <br />
            <span className="text-slate-100">{title2}</span>
            <br />
            <span className="text-slate-100">{title3}</span>
            <br />
          </h1>

        </div>
      </div>
    </div>
  );
};

export default HeroBannerSecton;
