import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { RiStarFill } from 'react-icons/ri';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const products = ({ categories }) => {
  
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
  
        <div className="w-full mr-2 pl-6 py-6 bg-white">
          <p className="text-lg text-gray-500 font-medium">
            Showing All Products
          </p>
          <hr />
         <div className="grid grid-cols-3">
          {categories.map((category) => {
            return (
              <Link key={category.slug.current} href={"/category/" + category.slug.current}>
               <div>
                {category.title}
               </div> 
              </Link>
            );
          })}
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
  const query = `*[_type == "category"]`;
  const categories = await client.fetch(query);

  return {
    props: {
      categories,
    },
  };
}
