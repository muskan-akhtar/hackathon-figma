"use client";  // Marking this as a Client Component

import React, { useState , useEffect} from "react";
import Image from "next/image";
import { Product } from "@/types/Product";
import { urlFor } from "@/sanity/lib/image"

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
 
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <div key={product._id} className="w-full max-w-[312px] h-auto flex flex-col gap-3">
          <div className="relative w-full h-[312px]">
            <Image
              src={urlFor(product.image).width(312).height(312).url() || "/Images/default.png"}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <div className="flex gap-2 justify-between items-center">
            <div className="w-full flex flex-col gap-[10px]">
              <h1 className="text-[#007580] text-[16px] font-semibold">{product.title}</h1>
              <div className="flex gap-1 items-center">
                <p className="text-black text-[18px] font-semibold">${product.price}</p>
                {product.priceWithoutDiscount && (
                  <s className="text-[#9A9CAA] text-[14px]">
                    ${product.priceWithoutDiscount}
                  </s>
                )}
              </div>
            </div>
            <div
              onClick={() => handleAddToCart(product)}  
              className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE] cursor-pointer"
            >
              <Image
                src="/Images/cart.png"
                alt="cart"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8">
        <p className="text-xl font-semibold text-black">
          Cart: {cart.length} item{cart.length !== 1 && "s"}
        </p>
      </div>
    </div>
  );
};

export default ProductList;
