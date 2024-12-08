import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex gap-5 justify-center items-center">
        <div className="w-[672px] h-[510px] mt-[200px] px-[54px] py-[64px] bg-[#007580] text-[#F9F9F9]">
          <div className="w-[495px] h-[161px] ml-5 gap-3 mb-[20px] justify-start items-center">
            <h1 className="text-[32px] font-bold leading-[38.73px]">
              About Us - Comforty
            </h1>
            <p>
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button className="w-[179px] h-[56px] mt-[149px] ml-5 padding: py-[16px] px-[32px] gap-[10px] text-[16px] leading-6 text-[#F9F9F9] bg-[#23838b]">
            View collection
          </button>
        </div>
        <div className="bg-blue-300 mt-[178px]">
          <Image
            src="/Images/image1.png"
            alt="chair"
            width={500}
            height={560}
          ></Image>
        </div>
      </div>
      <div className="w-full mt-[150px]">
        <h1 className="font-semibold text-[32px] leading-[35.5px] flex justify-center items-center mb-0">
          What makes our Brand Different
        </h1>
      </div>
      <div className="w-full">
        <div className="w-[1320px] h-[244px] mt-[100px] flex justify-center items-center ml-[300px] gap-6 p-4">
          <div className="w-[309px] h-[244px] p-12 flex flex-col gap-[10px] bg-[#F9F9F9]">
            <TbTruckDelivery className="text-[#007580] w-6 h-6" />
            <h1 className="text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </h1>
            <p className="text-[16px] leading-6 text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="w-[309px] h-[244px] p-12 flex flex-col gap-[10px] bg-[#F9F9F9]">
            <TbTruckDelivery className="text-[#007580] w-6 h-6" />
            <h1 className="text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </h1>
            <p className="text-[16px] leading-6 text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="w-[309px] h-[244px] p-12 flex flex-col gap-[10px] bg-[#F9F9F9]">
            <TbTruckDelivery className="text-[#007580] w-6 h-6" />
            <h1 className="text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </h1>
            <p className="text-[16px] leading-6 text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="w-[309px] h-[244px] p-12 flex flex-col gap-[10px] bg-[#F9F9F9]">
            <TbTruckDelivery className="text-[#007580] w-6 h-6" />
            <h1 className="text-[20px] leading-[28px] text-[#007580]">
              Next day as standard
            </h1>
            <p className="text-[16px] leading-6 text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
        </div>
        <div className="w-full mt-[150px]">
          <h1 className="font-semibold text-[32px] ml-[350px] flex items-center">
            Our Popular Products
          </h1>
          <div className="w-[1280px] flex justify-center items-center gap-2 ml-[350px] mt-[100px]">
            <div className="flex flex-col gap-6">
              <Image
                src="/Images/Large1.png"
                alt="large image"
                width={630}
                height={375}
              ></Image>
              <div className="flex flex-col gap-2">
                <h1>The Poplar suede sofa</h1>
                <p>$99.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <Image
                src="/Images/Large2.png"
                alt="large image"
                width={305}
                height={375}
              ></Image>
              <div className="flex flex-col gap-2">
                <h1>The Poplar suede sofa</h1>
                <p>$99.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <Image
                src="/Images/Large3.png"
                alt="large image"
                width={305}
                height={375}
              ></Image>
              <div className="flex flex-col gap-2">
                <h1>The Poplar suede sofa</h1>
                <p>$99.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
