"use client"; // Mark this as a Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { urlFor } from "@/sanity/lib/image"

// Define the Product type
type Product = {
  _id: string;
  title: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

const Cart = () => {
  // Define state for the cart
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart items from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Function to add items to the cart
  const addToCart = (product: Product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to remove items from the cart
  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="max-w-[1321px] mx-auto px-4 py-8 mt-[180px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>

            {/* Dynamically loop through cartItems to display added products */}
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-orange-200 rounded">
                      <Image
                      src={urlFor(product.image).width(312).height(312).url() || "/Images/default.png"}
                        alt={product.title}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                        {product.title}
                      </h3>
                      <div className="flex flex-wrap sm:flex-nowrap space-x-4 mb-3">
                        <p className="text-[15px] font-normal text-[#757575]">Quantity: 1</p>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <CiHeart />
                        <RiDeleteBin6Line
                          onClick={() => removeFromCart(product._id)}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-3 sm:mt-0">
                    <p className="text-[16px] font-normal text-[#111111]">MRP:</p>
                    <p className="text-[16px] font-normal text-[#111111]">${product.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-black">Summary</h2>
            <div className="flex justify-between mb-4">
              <p className="text-lg text-black">Subtotal</p>
              <p className="text-lg font-semibold text-black">
                ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg text-black">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold text-black">Total</p>
              <p className="text-xl font-bold text-black">
                ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </p>
            </div>
            <button className="w-full md:w-[334.67px] h-[60px] rounded-[30px] text-white bg-[#029FAE]">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
