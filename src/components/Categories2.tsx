// import React from "react";
// import Image from "next/image";

// function Categories2() {
//   return (
//     <div className="flex justify-center items-center">
//       {/* <h1
//         className="w-[648px] h-[62px] flex justify-between items-center left-[52px] text-[30px] -rotate-[90deg] text-black bg-purple-300">
//         Explore new and popular styles
//       </h1> */}
//       <div className="flex gap-7 w-[1320px] h-[684px] mt-[200px] justify-center items-center">
//         <div className="items-center justify-center flex h-[5500px]">
//           <Image
//             src="/Images/Image3.png"
//             alt="chair"
//             width={684}
//             height={504}
//           ></Image>
//         </div>
//         <div className="grid grid-cols-2 gap-[45px] items-center justify-center">
//           <Image
//             src="/Images/Image4.png"
//             alt="chair"
//             width={312}
//             height={312}
//           ></Image>
//           <Image
//             src="/Images/Image1.png"
//             alt="chair"
//             width={312}
//             height={312}
//             className="rounded-lg"
//           ></Image>
//           <Image
//             src="/Images/Image8.png"
//             alt="chair"
//             width={312}
//             height={312}
//             className="rounded-lg"
//           ></Image>
//           <Image
//             src="/Images/Image4.png"
//             alt="chair"
//             width={312}
//             height={312}
//           ></Image>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Categories2;






import React from "react";
import Image from "next/image";

function Categories2() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-7 w-full max-w-[1320px] mt-16 justify-center items-center">
        {/* Left Large Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/Images/Image3.png"
            alt="chair"
            width={684}
            height={504}
            className="w-full lg:w-[650px] rounded-lg"
          />
        </div>

        {/* Right Grid of Smaller Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-center justify-center">
          <Image
            src="/Images/Image4.png"
            alt="chair"
            width={312}
            height={312}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/Images/Image1.png"
            alt="chair"
            width={312}
            height={312}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/Images/Image8.png"
            alt="chair"
            width={312}
            height={312}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/Images/Image4.png"
            alt="chair"
            width={312}
            height={312}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories2;
