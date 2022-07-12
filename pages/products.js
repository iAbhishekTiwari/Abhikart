import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { RiStarFill } from 'react-icons/ri';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const products = ({ products }) => {
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });

  const builder = imageUrlBuilder(client);

  return (
    
    <div className="bg-gray-200">
      <Navbar />
      <div className="flex my-3 w-11/12 mx-auto gap-3 flex-wrap">
        <button className="px-2 py-1 text-sm text-black bg-gray-50 rounded-full font-medium">Health & Nutrition</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Grooming</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Fitness</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Toys& school essentials</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Men Footwear</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Men Topwear</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Men Bottom Wear</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Women Footwear</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Women Topwear</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Women Bottom Wear</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Women Ethnic</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Women Western</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Grocery</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Laptop</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Headphone</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Tablets</button>             
        <button className="px-2 py-1 text-sm text-blue-600 bg-white rounded-full font-medium">Phones</button>             
                   

      </div>
      <div className="bg-gray-200 pt-3 flex gap-3">
        <div className="w-1/5 bg-white ml-3">
          <p className="font-semibold text-xl pt-4 pl-2 pb-2">Filters</p><hr />
          <div className="p-4">
            
            <p className="font-medium text-sm">PRICE</p>
            <div className="bg-gray-300 h-8 pb-2"><input type="range" name="" id="" min={0} max={50000} step={5000} defaultValue={50000} className="w-full"/></div><hr />
          </div>
          
          <div className="p-4 space-x-4">
            <p className="font-medium text-sm">CUSTOMER RATINGS</p>
            <div className="my-2 flex"><input type="checkbox" name="rating" id=""/><span className="ml-4 text-sm">4 <RiStarFill className="inline-block mb-1" /> & above</span></div>
            <div className="my-2"><input type="checkbox" name="rating" id="" /><span className="ml-4 text-sm">3 <RiStarFill className="inline-block mb-1" /> & above</span></div>
            <div className="my-2"><input type="checkbox" name="rating" id="" /><span className="ml-4 text-sm">2 <RiStarFill className="inline-block mb-1" /> & above</span></div>
            <div className="my-2"><input type="checkbox" name="rating" id="" /><span className="ml-4 text-sm">1 <RiStarFill className="inline-block mb-1" /> & above</span></div>
          </div>
        </div>

        <div className="w-full mr-2 pl-6 py-6 bg-white">
          <p className="text-lg text-gray-500 font-medium">
            Showing All Products
          </p>
          <hr />
         <div className="grid grid-cols-3">
          {products.map((product) => {
            return (
              <Link key={product.slug.current} href={"/product/" + product.slug.current}>
               <div className="border-spacing-2 border-dashed border-0 shadow-lg border-gray-400 my-1 p-1"> 
                <div className="flex gap-4 cursor-pointer flex-col">
                  <div>
                    <a className="block relative h-48 rounded overflow-hidden justify-center">
                      <img
                        alt="ecommerce"
                        className="object-contain object-center w-full h-full block"
                        src={builder.image(product.image).width(300).url()}
                      />
                    </a>
                  </div>
                  <div>
                    <div className="mt-4 px-auto pl-2">
                      <h2 className="hover:text-blue-700">
                        <p className="text-gray-500">{product.brand} </p> 
                        <p className="text-black font-semibold text-md">{product.title}</p>       
                      </h2>   
                    </div>
                  </div>
                  <div>
                    <span className="mt-4  px-4 font-semibold text-black text-xl">
                      ₹{product.price}{" "}
                      <span className="text-gray-400 font-normal line-through text-sm ml-1">₹{product.mrp}</span> 
                    </span>
                  </div>
                </div>
               </div> 
              </Link>
            );
          })}
          </div> 
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default products;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
}
