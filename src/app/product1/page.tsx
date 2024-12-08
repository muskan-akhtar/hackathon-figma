import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

function Product1() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex gap-12 justify-center mt-[100px]">
        <Image
          src="/Images/Image2.png"
          alt="Product"
          width={675}
          height={605}
          className="rounded-[10px]"
        ></Image>
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-8">
            <h1 className="w-[541px] h-[132px] font-bold text-[60px] leading-[66px] p-2">
              Library Stool Chair
            </h1>
            <p className="w-[144px] h-[44px] text-center bg-[#029FAE] rounded-[100px] font-semibold text-[#FFFFFF] flex justify-center items-center">
              $20.00 USD
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="w-[543px] h-[101px] text-[22px] leading-[33px] text-opacity-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
            <button className="w-[212px] h-[63px] text-center bg-[#029FAE] rounded-[8px] font-semibold py-[14px] px-6 flex justify-center items-center gap-[9px]">
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={29}
                height={29}
              ></Image>
              <h1 className="text-[#FFFFFF]">Add to cart</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1920px] flex flex-col mt-[150px]">
        <h1 className="ml-[300px] mt-1 w-[286px] h-[35px] leading-[35.2px] text-[32px]">
          Featured Products
        </h1>
        <div className="flex ml-[240px] justify-center">
          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image10.png"
              alt="Image"
              width={270}
              height={273}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex justify-between items-center">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px] font-bold">
                  $20
                </p>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/image1.png"
              alt="Image"
              width={270}
              height={273}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex justify-between items-center">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px] font-bold">
                  $20
                </p>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image7.png"
              alt="Image"
              width={270}
              height={273}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex justify-between items-center">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px] font-bold">
                  $20
                </p>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image3.png"
              alt="Image"
              width={270}
              height={273}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex justify-between items-center">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px] font-bold">
                  $20
                </p>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image5.png"
              alt="Image"
              width={270}
              height={273}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex justify-between items-center">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px] font-bold">
                  $20
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Product1;
