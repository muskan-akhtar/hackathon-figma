import { client } from "@/sanity/lib/client";
import ProductList from "@/components/ProductsList"; // Client Component
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const fetchProducts = async () => {
  const query = `*[_type == "products"]{
    _id,
    title,
    price,
    priceWithoutDiscount,
    image,
  }`;
  return await client.fetch(query);
};

const ProductPage = async () => {
  const products = await fetchProducts(); 

  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center mt-[150px] px-4">
        <h1 className="text-black flex justify-start items-center mt-4 w-full md:w-[205px] h-[35px] leading-[35.2px] text-[32px] font-semibold">
          Our Products
        </h1>
        <ProductList products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;


// "use client"

// import React from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { client, urlFor } from "@/sanity/lib/client";
// import { useCart } from "@/app/Context/CartContext";

// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// const ProductPage = async () => {
//   const query = `*[_type == "products"]{
//     _id,
//     title,
//     price,
//     priceWithoutDiscount,
//     image,
//   }`;

//   const products: Product[] = await client.fetch(query);
//   const { addToCart } = useCart();

//   return (
//     <div className="bg-[#FFFFFF]">
//       <Navbar />
//       <div className="w-full flex flex-col justify-center items-center mt-[150px] px-4">
//         <h1 className="text-black flex justify-start items-center mt-4 w-full md:w-[205px] h-[35px] leading-[35.2px] text-[32px] font-semibold">
//           Our Products
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
//           {products.map((product) => (
//             <div key={product._id} className="w-full max-w-[312px] h-auto flex flex-col gap-3">
//               <div className="relative w-full h-[312px]">
//                 <Image
//                   src={urlFor(product.image).width(312).height(312).url() || "/Images/default.png"}
//                   alt={product.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-md"
//                 />
//               </div>

//               <div className="flex gap-2 justify-between items-center">
//                 <div className="w-full flex flex-col gap-[10px]">
//                   <h1 className="text-[#007580] text-[16px] font-semibold">{product.title}</h1>
//                   <div className="flex gap-1 items-center">
//                     <p className="text-black text-[18px] font-semibold">
//                       ${product.price}
//                     </p>
//                     {product.priceWithoutDiscount && (
//                       <s className="text-[#9A9CAA] text-[14px]">
//                         ${product.priceWithoutDiscount}
//                       </s>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   className="bg-[#F0F2F3] rounded-lg w-12 h-12 flex justify-center items-center hover:bg-[#029FAE] cursor-pointer"
//                   onClick={() =>
//                     addToCart({
//                       id: product._id,
//                       title: product.title,
//                       price: product.price,
//                       quantity: 1,
//                     })
//                   }
//                 >
//                   <Image
//                     src="/Images/cart.png"
//                     alt="cart"
//                     width={24}
//                     height={24}
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductPage;
