import { useRouter } from 'next/router'
import React, { Component } from 'react';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link"
import { useRecoilState } from 'recoil';
import { cartState } from '../../atoms/cartAtom';
import { subtotalState } from '../../atoms/subtotalAtom';
import Navbar from '../../components/Navbar';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar } from "react-icons/ai";

const Product = ({ product }) => {

  const [cart, setcart] = useRecoilState(cartState);

  const [subTotal, setsubTotal] = useRecoilState(subtotalState);

  const router = useRouter()
  const { slug } = router.query
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });

  const builder = imageUrlBuilder(client);
  
  
  const addtocart = (itemCode, qty, image, title, brand, price, mrp, rating, numReviews) => {
    let newcart = JSON.parse(JSON.stringify(cart));

    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newcart[itemCode] = { qty: 1,image, title, brand, price, mrp, rating, numReviews };
    }
    setcart(newcart);
    savecart(newcart);
  };
  
  const savecart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let subt = 0;
    let keys = Object.keys(mycart);
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]]["price"] * mycart[keys[i]]["qty"];
    }
    setsubTotal(subt);
  };

  return (
      <div className= "bg-gray-200" >
        
        <Navbar />
        <section className="text-gray-600 bg-white body-font overflow-hidden">
        <ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
         <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap gap-8 justify-center">
           < img alt="ecommerce" className="object-contain rounded border-gray-200 border-2 p-4 bg-white" src={builder.image(product.image).width(200).url()} />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
       
        <div className="flex mb-4">
          <span className="flex items-center">
            <span className='bg-blue-600 text-sm text-white px-2 py-0 mr-2'>{product.rating} <AiFillStar className='inline'/></span>
            <span className="text-gray-600 ml-3">{product.numReviews} Reviews</span>
          </span>
          
        </div>
        
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
      
        </div>
        <div className="flex">
          <span className="title-font font-medium text-lg sm:text-2xl text-black"> ₹{product.price}</span>
          <span className=" block title-font text-gray-500 line-through mx-1"> ₹{product.mrp}</span>
          <Link href={"https://abhishekTiwari.vercel.app/"}><button className="flex ml-auto text-white bg-indigo-500 border-0 py-1 px-3 sm:py-2 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded"> Buy Now</button></Link>
          <button className="flex ml-8 lg:ml-auto text-white bg-orange-500 border-0 py-1 px-3 sm:py-2 sm:px-6  focus:outline-none hover:bg-indigo-600 rounded" onClick={() => {
                    addtocart(
                      slug,
                      1,
                      `${product.image.asset._ref}`,
                      `${product.title}`,
                      `${product.brand}`,
                      `${product.price}`,
                      `${product.mrp}`,
                      `${product.rating}`,
                      `${product.numReviews}`
                    );
                    toast.success('Item added to cart!', {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      });}}>Add To Cart</button>

        </div>
      </div>
    </div>
  </div></section>
      </div> 
  ) 
}

export default Product

export async function getServerSideProps(context) {
  const { slug } = context.query
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: {
      product,
    },
  };
}
