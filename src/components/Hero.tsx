import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:w-[1321px] h-auto md:ml-[300px] p-4 md:p-0">
        <div className="w-full md:w-[557px] h-auto md:h-[337px] rounded-sm mb-8 md:mb-0">
          <h1 className="text-[14px] md:text-[16px] tracking-[12%] leading-[14px] text-[#272343] mb-2">
            Welcome to chairy
          </h1>
          <h1 className="font-bold text-[32px] md:text-[60px] tracking-[12%] leading-[40px] md:leading-[66px] text-[#272343] mb-4">
            Best Furniture Collection for your interior.
          </h1>
          <button className="mt-8 flex justify-between items-center gap-5 bg-[#029FAE] w-full md:w-[171px] h-[52px] rounded-lg py-[14px] px-6">
            <h1 className="text-[#FFFFFF] text-[16px] leading-[17.6px] text-center">
              Shop Now
            </h1>
            <Image
              src="/Images/Rightarrow.png"
              alt="arrow"
              width={24}
              height={24}
            ></Image>
          </button>
        </div>
        <Image
          src="/Images/product-image.png"
          alt="chair"
          width={434}
          height={584}
          className="w-full md:w-[434px] h-auto md:h-[584px] mt-4 md:mt-0"
        ></Image>
      </div>

      <div className="flex flex-wrap justify-between items-center w-full md:w-[1321px] h-auto md:ml-[300px] p-4 md:p-0">
        <Image
          src="/Images/zapier.png"
          alt="zapier logo"
          width={85}
          height={87}
          className="mb-4 md:mb-0"
        ></Image>
        <Image
          src="/Images/pipedrive.png"
          alt="pipedrive logo"
          width={107}
          height={109}
          className="mb-4 md:mb-0"
        ></Image>
        <Image
          src="/Images/cibbank.png"
          alt="cibbank logo"
          width={135}
          height={139}
          className="mb-4 md:mb-0"
        ></Image>
        <Image
          src="/Images/z-red.png"
          alt="z-red logo"
          width={63}
          height={65}
          className="mb-4 md:mb-0"
        ></Image>
        <Image
          src="/Images/burnttoast.png"
          alt="burnttoast logo"
          width={98}
          height={101}
          className="mb-4 md:mb-0"
        ></Image>
        <Image
          src="/Images/panda-doc.png"
          alt="panda-doc logo"
          width={113}
          height={115}
          className="mb-4 md:mb-0"
        ></Image>
        <Image
          src="/Images/moz-logo.png"
          alt="moz logo"
          width={84}
          height={87}
          className="mb-4 md:mb-0"
        ></Image>
      </div>
    </div>
  );
}

export default Hero;
