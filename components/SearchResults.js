import React from 'react'
import { useRecoilValue } from 'recoil';
import { searchState } from '../atoms/searchAtom';
import Link from "next/link"
import Image from "next/image"
import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';


const SearchResults = ({items}) => {

    const client = createClient({
      projectId: "hhj2mrqs",
      dataset: "production",
      useCdn: false,
      apiVersion: "2021-08-31",
    });
 
    const builder = ImageUrlBuilder(client);
    const search = useRecoilValue(searchState);

    if(search !==''){
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 pt-3 flex gap-3">
        <div className="w-full mr-2 pl-6 py-6 bg-white">
          <p className="text-lg text-gray-500 font-medium">
            Search Result(s)
          </p>
          <hr />
         <div className="grid grid-cols-3">
          {items.filter(function (item) {
            return (item.title).toLowerCase().includes(search.toLowerCase()) ||  (item.brand).toLowerCase().includes(search.toLowerCase())}).map((product) => {
            return (
              <Link key={product.slug.current} href={"/product/" + product.slug.current}>
               <div className="border-spacing-2 border-dashed border-0 shadow-lg border-gray-400 my-1 p-1"> 
                <div className="flex gap-4 cursor-pointer flex-col">
                   <div>
                    <a className="block relative h-48 rounded overflow-hidden justify-center">
                      <Image
                        alt="ecommerce"
                        className="object-contain object-center w-full h-full block"
                        src={builder.image(product.image).width(300).url()}
                      />
                    </a>
                   </div>
                  <div>
                    <div className="mt-4 px-auto pl-2">
                      <h2 className="hover:text-blue-700">
                        <p className="text-gray-500 overflow-hidden">{product.brand} </p> 
                        <p className="text-black font-semibold text-md overflow-hidden">{product.title}</p>       
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
    </div>
  )}
}

export default SearchResults
