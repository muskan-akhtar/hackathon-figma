import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { GoPlus } from "react-icons/go";

function FAQ() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full flex justify-center">
        <div className="w-[1320px] h-[731px] flex-col mt-[100px]">
          <div className="flex ml-[290px] flex-col justify-center items-center gap-2 text-center w-[771px] h-[101px]">
            <h1 className="font-bold text-[48px] leaing-[56px] text-[#333333]">
              Questions Looks Here
            </h1>
            <p className="text-[16px] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 p-5 mt-[100px]">
            <div className="flex flex-col gap-3 bg-[#F7F7F7] p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold leading-[26px] text-[18px]">
                  What types of chairs do you offer?
                </h1>
                <GoPlus className="w-6 h-6" />
              </div>
              <p className="text-left text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#F7F7F7] p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold leading-[26px] text-[18px]">
                  How can we get in touch with you?
                </h1>
                <GoPlus className="w-6 h-6" />
              </div>
              <p className="text-left text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#F7F7F7] p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold leading-[26px] text-[18px]">
                  Do your chairs come with a warranty?
                </h1>
                <GoPlus className="w-6 h-6" />
              </div>
              <p className="text-left text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#F7F7F7] p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold leading-[26px] text-[18px]">
                  What will be delivered? And When?
                </h1>
                <GoPlus className="w-6 h-6" />
              </div>
              <p className="text-left text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#F7F7F7] p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold leading-[26px] text-[18px]">
                  Can I try a chair before purchasing?
                </h1>
                <GoPlus className="w-6 h-6" />
              </div>
              <p className="text-left text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#F7F7F7] p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold leading-[26px] text-[18px]">
                  How do I clean and maintain my Comforty chair?
                </h1>
                <GoPlus className="w-6 h-6" />
              </div>
              <p className="text-left text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FAQ;