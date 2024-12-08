import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

function Product() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center mt-[250px]">
        <h1 className="flex  justify-start items-center mt-4 w-[205px] h-[35px] leading-[35.2px] text-[32px] font-semibold">
          Our Products
        </h1>
        <div className="flex gap-8 justify-center items-center">
          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/image1.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image2.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <div className="flex gap-1 justify-start items-center">
                  <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                    $20
                  </p>
                  <s className="leading-[15.4px] text-[14px] text-[#9A9CAA]">
                    $39
                  </s>
                </div>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image3.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image4.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image6.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image8.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <div className="flex gap-1 justify-start items-center">
                  <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                    $20
                  </p>
                  <s className="leading-[15.4px] text-[14px] text-[#9A9CAA]">
                    $39
                  </s>
                </div>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image10.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image1.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image5.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image2.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <div className="flex gap-1 justify-start items-center">
                  <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                    $20
                  </p>
                  <s className="leading-[15.4px] text-[14px] text-[#9A9CAA]">
                    $39
                  </s>
                </div>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image3.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] ml-636px mt-[84px] flex flex-col gap-3">
            <Image
              src="/Images/Image7.png"
              alt="Image"
              width={312}
              height={312}
              className="rounded-md"
            ></Image>
            <div className="flex gap-2">
              <div className="w-[256px] h-[51px] flex flex-col gap-[10px]">
                <h1 className="text-[#007580] w-[256px] h-[21px] text-[16px] leading-[20.8px]">
                  Library Stool Chair
                </h1>
                <p className="w-[35px] h-[20px] text-[18px] leading-[19.8px]">
                  $20
                </p>
              </div>
              <div className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE]">
                <Image
                  src="/Images/cart.png"
                  alt="cart"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1924px] py-[100px] px-[300px] flex flex-col gap-[70px] mt-[300px]">
        <div className="w-[760px] h-[165px] text-center flex flex-col justify-between items-center ml-[280px]">
          <h1 className="font-medium text-[50px] leading-[58.59px] text-center">
            Or subscribe to the newsletter
          </h1>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Email Address..."
              className="w-[643px] h-[32px] border-b-black border-b-[1px] border-solid"
            />
            <button className="border-b-black border-b-[1px] border-solid w-[91px] h-8 ">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-12">
          <h1 className="w-[1013px] text-[50px] leading-[58.59px] text-center ml-[80px] font-medium">
            Follow products and discounts on Instagram
          </h1>
          <div className="flex gap-6 ml-11">
            <Image
              src="/Images/Image6.png"
              alt="Chair"
              width={186}
              height={186}
              className="rounded-md"
            ></Image>
            <Image
              src="/Images/Image5.png"
              alt="Chair"
              width={186}
              height={186}
              className="rounded-md"
            ></Image>
            <Image
              src="/Images/Image2.png"
              alt="Chair"
              width={186}
              height={186}
              className="rounded-md"
            ></Image>
            <Image
              src="/Images/image1.png"
              alt="Chair"
              width={186}
              height={186}
              className="rounded-md"
            ></Image>
            <Image
              src="/Images/Image3.png"
              alt="Chair"
              width={186}
              height={186}
              className="rounded-md"
            ></Image>
            <Image
              src="/Images/Image7.png"
              alt="Chair"
              width={186}
              height={186}
              className="rounded-md"
            ></Image>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Product;
