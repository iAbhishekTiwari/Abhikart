import { useRouter } from 'next/router'
import React, { Component, useRef, useState } from 'react';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link"
import Image from "next/image"
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../../atoms/cartAtom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { searchState } from '../../atoms/searchAtom';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const Category = ({ products }) => {

  const search = useRecoilValue(searchState);

  const router = useRouter()
  const { slug } = router.query
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });


  const builder = imageUrlBuilder(client);

  const SortDD = useRef()

  const [sortby, setsortby] = useState(null)


  const showdd = () =>{
    if (SortDD.current.classList.contains("hidden")) {
      SortDD.current.classList.remove("hidden");
    } else if (!SortDD.current.classList.contains("hidden")) {
      SortDD.current.classList.add("hidden");
    }

  }



  return (
    <><Navbar />
    <div className="w-full mr-2 pl-6 py-6 bg-white">
      <div className="my-2 flex justify-end">
         <div className="mr-12">
           <button className='flex text-white shadow-md bg-blue-700 p-1 font-bold items-center my-2' onClick={() => showdd()}>Sort By: {sortby} <BiChevronDown className='mt-1'/> </button> 
           <div className='flex flex-col px-2 py-1 hidden bg-white shadow-lg' ref={SortDD}> 
            <button className='text-black hover:font-medium' onClick={() => {setsortby('Popularity') ; 
            showdd()}}>Popularity</button><hr />             
            <button className='text-black hover:font-medium flex text-center justify-center' onClick={() => {setsortby('Price-Low To High') ; 
            showdd()}}>Price <AiOutlineArrowDown className='mt-1'/> To <AiOutlineArrowUp className='mt-1'/> </button>  <hr />             
             <button className='text-black hover:font-medium flex text-center justify-center' onClick={() => {setsortby('Price-High To Low') ; 
            showdd()}}>Price <AiOutlineArrowUp className='mt-1'/> To <AiOutlineArrowDown className='mt-1'/> </button>  <hr />                 
            <button className='text-black hover:font-medium' onClick={() => {setsortby('Rating') ; 
            showdd()}}>Rating</button>             
           </div>
         </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-3">
        { search=='' && products.filter(item => item?.category?.category?.title == slug).sort((a, b) => {
          if(sortby =='Price-Low To High')
            return parseFloat(a.price) - parseFloat(b.price)
          if(sortby =='Price-High To Low')
          return parseFloat(b.price) - parseFloat(a.price)
          if(sortby =='Rating')
          return parseFloat(b.rating) - parseFloat(a.rating)
          if(sortby =='Popularity')
          return parseFloat(b.numReviews) - parseFloat(a.numReviews)}).map((product) => {
          return (
            <Link key={product.slug.current} href={"/product/" + product.slug.current}>
              <div className="border-spacing-2 border-dashed border-0 shadow-lg border-gray-400 my-1 p-1">
                <div className="flex gap-4 cursor-pointer flex-col">
                  <div>
                    <a className="block relative h-48 rounded overflow-hidden justify-center">
                      <Image
                        alt="ecommerce"
                        className="object-contain object-center w-full h-full block"
                        src={builder.image(product.image).width(300).url()} />
                    </a>
                  </div>
                  <div>
                    <div className="mt-4 px-auto pl-2">
                      <h2 className="hover:text-blue-700">
                        <p className="text-gray-500">{product.brand} </p>
                        <p className="text-black font-semibold text-md">{product.title}<span className="bg-blue-700 px-1 font-normal flex-end text-white  text-sm ml-1 ">{product.rating} <AiFillStar className='inline'/></span></p>
                      </h2>
                    </div>
                  </div>
                  <div>
                    <span className="mt-4  px-4 font-semibold text-black text-xl">
                      ₹{product.price}{" "}
                      <span className="text-gray-400 font-normal line-through text-sm ml-1">₹{product.mrp}</span>
                      <span className="text-white font-normal text-sm ml-1 px-2 py-1">{product.rating}</span>
                      
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        { search!=='' && products.filter(item => (item?.category?.category?.title == slug && ((item.title).toLowerCase().includes(search.toLowerCase()) ||  (item.brand).toLowerCase().includes(search.toLowerCase())) )).map((product) => {
          return (
            <Link key={product.slug.current} href={"/product/" + product.slug.current}>
              <div className="border-spacing-2 border-dashed border-0 shadow-lg border-gray-400 my-1 p-1">
                <div className="flex gap-4 cursor-pointer flex-col">
                  <div>
                    <a className="block relative h-48 rounded overflow-hidden justify-center">
                      <Image
                        alt="ecommerce"
                        className="object-contain object-center w-full h-full block"
                        src={builder.image(product.image).width(300).url()} />
                    </a>
                  </div>
                  <div>
                    <div className="mt-4 px-auto pl-2">
                      <h2 className="hover:text-blue-700">
                        <p className="text-gray-500">{product.brand} </p>
                        <p className="text-black font-semibold text-md">{product.title}<span className="bg-blue-700 px-1 font-normal flex-end text-white  text-sm ml-1 ">{product.rating} <AiFillStar className='inline'/></span></p>
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
    <Footer />
    </>
  ) 
}

export default Category

export async function getServerSideProps(context) {

  const { slug } = context.query

  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });
  const productquery = `*[_type == "product"]{
    title,
    brand,
    image,
    price,
    mrp,
    rating,
    numReviews,
    slug,
    category{
    category->{
    title
  }
  }
  }`;
  const products = await client.fetch(productquery);


  return {
    props: {
     products
    },
  };
}
