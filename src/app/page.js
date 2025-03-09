"use client";

import AllCategory from "@/app/components/AllCategory";
import ProductSlider from "@/app/components/ProductSlider";
import Image from "next/image";
import ClientLayout from "./ClientLayout";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from "./components/ProductCard";

export default function Home() {

  useEffect(() => {
    product_Data();
   }, [])
   
 
   const [productData, setproductData]=useState([]);
 
    const product_Data = async ()=>{
        try {
            const response = await axios.get('https://api.therashtriya.com/api/products');
            setproductData(response.data);
            // console.log(JSON.stringify(response.data))
          } catch (error) {
            console.error(error);
          }
    }


  return (
    <ClientLayout>
      <main>
        <div className="p-4 lg:px-[8rem] min-h-screen">
          {/* Banner */}
          <div className="shadow-lg rounded-xl w-full">
            <Image
              className="rounded-xl"
              src="/images/carousel/gif_banner.gif"
              alt="Banner Image"
              height={100}
              width={100}
              layout="responsive"
            />
          </div>
          {/* category banner */}
          <div className="flex justify-start gap-3 my-3">
            <Image src={'/images/banner/medical_shop.png'} 
            height={300}
            width={300} 
            style={{height:'100%',width:'100%'}}
          />
            <Image src={'/images/banner/baby_care.png'} 
              height={300}
              width={300} 
            style={{height:'100%',width:'100%'}}
            />
            <Image src={'/images/banner/cakeshop.png'} 
            height={300}
            width={300} 
            style={{height:'100%',width:'100%'}}
            />
          </div>

          {/* Categories */}
          <AllCategory />

          {/* Product Slider */}
          <p className="text-2xl text-gray-700 mt-4 font-bold">Baby Care Products</p>
          <ProductSlider productData={productData} />
        
          {/* Product Slider */}
          <p className="text-2xl text-gray-700 mt-4 font-bold">Explore by Products</p>
          <ProductSlider productData={productData} />
        </div>

        {/* Location Component */}
        {/* <LocationX isOpen={isLocationXOpen} setIsOpen={setIsLocationXOpen} /> */}
      </main>
    </ClientLayout>
  );
}
