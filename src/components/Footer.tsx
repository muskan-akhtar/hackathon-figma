// import React from "react";
// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io5";
// import { FaPinterest } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="w-full h-[343px] bg-[#FFFFFF] mt-[20px] p-4">
//       <div className="flex gap-[150px] mt-[70px]">
//         <div className="flex flex-col mt-[70px] ml-[300px] gap-6 w-[350px] h-[198px]">
//           <div className="flex justify-between items-center w-[168px] h-[40px] gap-2">
//             <Image
//               src="/Images/Logoicon.png"
//               alt="logo"
//               width={40}
//               height={40}
//             />
//             <h1 className="w-[120px] h-[31px] text-[26px] font-medium leading-[31.2px]">
//               Comforty
//             </h1>
//           </div>
//           <p className="w-[350px] leading-6 text-[16px] text opacity-[60%] text-[#272343]">
//             Vivamus tristique odio sit amet velit semper, eu posuere turpis
//             interdum. Cras egestas purus.
//           </p>
//           <div className="w-[206px] h-[38px] flex gap-2">
//             <div className="w-[38px] h-[38px]">
//               <FaFacebook className="w-4 h-[15.9px] justify-center items-center" />
//             </div>
//             <div className="w-[38px] h-[38px]">
//               <FaTwitter className="w-4 h-[15.9px] justify-center items-center" />
//             </div>
//             <div className="w-[38px] h-[38px]">
//               <IoLogoInstagram className="w-4 h-[15.9px] justify-center items-center" />
//             </div>
//             <div className="w-[38px] h-[38px]">
//               <FaPinterest className="w-4 h-[15.9px] justify-center items-center" />
//             </div>
//             <div className="w-[38px] h-[38px]">
//               <FaYoutube className="w-4 h-[15.9px] justify-center items-center" />
//             </div>
//           </div>
//         </div>

//         <div className="w-[105px] h-[203px] flex flex-col gap-5 mt-[70px] ">
//           <div>
//             <h1 className="text-[14px] leading-[15.4px] tracking-[6%] font-medium text-[#9A9CAA]">
//               CATEGORY
//             </h1>
//           </div>
//           <div className="flex flex-col gap-3">
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">Sofa</p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Arm Chair
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Wing Chair
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Desk Chair
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               wooden Chair
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Park Bench
//             </p>
//           </div>
//         </div>

//         <div className="w-[156px] h-[143px] flex flex-col gap-5 mt-[70px]">
//           <div>
//             <h1 className="text-[14px] leading-[15.4px] tracking-[6%] font-medium text-[#9A9CAA]">
//               SUPPORT
//             </h1>
//           </div>
//           <div className="flex flex-col gap-3">
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Help & Support
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Tearms & Conditions
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">
//               Privacy Policy
//             </p>
//             <p className="leading-[17.6px] text-[16px] text-[#272343]">Help</p>
//           </div>
//         </div>
//         <div className="w-[424px] h-[142px] mt-[80px] rounded-lg flex flex-col gap-3 p-1">
//           <div>
//             <h1 className="text-[#9A9CAA] text-[14px] leading-[15.4px] tracking-[6%] font-medium">
//               NEWSLETTER
//             </h1>
//           </div>
//           <div className="w-[424px] h-[142px] flex gap-2">
//             <input
//               name="email"
//               id="email"
//               placeholder="Your email"
//               className="text-[#9A9CAA] rounded-lg w-[285px] h-[46px] pl-3 border-[#E1E3E5] border-solid border-[1px]"
//             ></input>
//             <button className="w-[127px] h-[46px] rounded-lg py-[14px] px-6 flex gap-5 bg-[#029FAE] justify-center items-center">
//               Subscribe
//             </button>
//           </div>
//           <div className="w-full h-[46px]">
//             <p className="text-[#272343] text-opacity-60% leading-[22.5px] text-[15px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//               tincidunt erat enim.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full flex h-[75px] py-6 px-[300px] justify-between items-center">
//         <p className="text-[14px] leading-[21px]">@ 2021 - Blogy - Designed & Develop by <strong>Zakirsoft</strong></p>
//         <Image src="/Images/footerimg.png" alt="footerimg" width={227} height={27}></Image>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] mt-[20px] p-4">
      <div className="flex flex-wrap gap-10 justify-center md:justify-between mt-[70px]">
        {/* Logo and Description Section */}
        <div className="flex flex-col w-full md:w-[350px] h-auto gap-6 items-center md:items-start">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <Image
              src="/Images/Logoicon.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-[26px] font-medium">Comforty</h1>
          </div>
          <p className="text-[16px] text-[#272343] opacity-[60%] w-full md:w-[350px]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex gap-2 mt-2">
            <div className="w-8 h-8">
              <FaFacebook className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <FaTwitter className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <IoLogoInstagram className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <FaPinterest className="w-full h-full" />
            </div>
            <div className="w-8 h-8">
              <FaYoutube className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="w-full md:w-[105px] h-auto flex flex-col gap-5 mt-6 md:mt-0">
          <h1 className="text-[14px] font-medium text-[#9A9CAA] tracking-[6%]">
            CATEGORY
          </h1>
          <div className="flex flex-col gap-3">
            {["Sofa", "Arm Chair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((category, index) => (
              <p key={index} className="text-[16px] text-[#272343]">
                {category}
              </p>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full md:w-[156px] h-auto flex flex-col gap-5 mt-6 md:mt-0">
          <h1 className="text-[14px] font-medium text-[#9A9CAA] tracking-[6%]">
            SUPPORT
          </h1>
          <div className="flex flex-col gap-3">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item, index) => (
              <p key={index} className="text-[16px] text-[#272343]">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-[424px] h-auto mt-6 md:mt-0 rounded-lg flex flex-col gap-3 p-1">
          <h1 className="text-[#9A9CAA] text-[14px] font-medium tracking-[6%]">
            NEWSLETTER
          </h1>
          <div className="flex gap-2">
            <input
              name="email"
              id="email"
              placeholder="Your email"
              className="text-[#9A9CAA] rounded-lg w-[285px] h-[46px] pl-3 border-[#E1E3E5] border-solid border-[1px]"
            />
            <button className="w-[127px] h-[46px] rounded-lg py-[14px] px-6 bg-[#029FAE] text-white flex justify-center items-center">
              Subscribe
            </button>
          </div>
          <p className="text-[#272343] text-opacity-60% text-[15px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex flex-col md:flex-row h-[75px] py-6 px-4 md:px-[300px] justify-between items-center">
        <p className="text-[14px] text-center md:text-left">
          @ 2021 - Blogy - Designed & Develop by <strong>Zakirsoft</strong>
        </p>
        <Image
          src="/Images/footerimg.png"
          alt="footerimg"
          width={227}
          height={27}
        />
      </div>
    </div>
  );
}

export default Footer;
