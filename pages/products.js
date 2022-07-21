import React, { useRef, useState } from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { RiStarFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const products = ({ products }) => {
  const slugArray = [];

  const BrandRef = useRef();
  const BrandDD = () => {
    if (BrandRef.current.classList.contains("hidden")) {
      BrandRef.current.classList.remove("hidden");
    } else if (!BrandRef.current.classList.contains("hidden")) {
      BrandRef.current.classList.add("hidden");
    }
  };

  const BrandDDout = () => {
    BrandRef.current.classList.add("hidden");

  };
  const [brandfilter, setbrandfilter] = useState("");

  const brandname = (brandName) => {
    setbrandfilter(brandName);
  };

  const outlinestar = useRef();
  const fillstar = useRef();

  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });

  const builder = imageUrlBuilder(client);

  const [ customerrating, setcustomerrating ] = useState(0) 

  const onestarfill = useRef()
  const twostarfill = useRef()
  const threestarfill = useRef()
  const fourstarfill = useRef()
  const fivestarfill = useRef()
  const onestaroutline = useRef()
  const twostaroutline = useRef()
  const threestaroutline = useRef()
  const fourstaroutline = useRef()
  const fivestaroutline = useRef()

  const fivestarfilter = () =>{
    if (fivestarfill.current.classList.contains("hidden")) {
      fivestarfill.current.classList.remove("hidden");
      fivestaroutline.current.classList.add("hidden");
      setcustomerrating(5)
    } else if (!fivestarfill.current.classList.contains("hidden")) {
      fivestaroutline.current.classList.remove("hidden");
      fivestarfill.current.classList.add("hidden");
      setcustomerrating(0)
    }
  }
  const fourstarfilter = () =>{
    if (fourstarfill.current.classList.contains("hidden")) {
      fourstarfill.current.classList.remove("hidden");
      fourstaroutline.current.classList.add("hidden");
      setcustomerrating(5)
    } else if (!fourstarfill.current.classList.contains("hidden")) {
      fourstaroutline.current.classList.remove("hidden");
      fourstarfill.current.classList.add("hidden");
      setcustomerrating(0)
    }
  }
  const threestarfilter = () =>{
    if (threestarfill.current.classList.contains("hidden")) {
      threestarfill.current.classList.remove("hidden");
      threestaroutline.current.classList.add("hidden");
      setcustomerrating(3)
    } else if (!threestarfill.current.classList.contains("hidden")) {
      threestaroutline.current.classList.remove("hidden");
      threestarfill.current.classList.add("hidden");
      setcustomerrating(0)
    }
  }
  const twostarfilter = () =>{
    if (twostarfill.current.classList.contains("hidden")) {
      twostarfill.current.classList.remove("hidden");
      twostaroutline.current.classList.add("hidden");
      setcustomerrating(2)
    } else if (!twostarfill.current.classList.contains("hidden")) {
      twostaroutline.current.classList.remove("hidden");
      twostarfill.current.classList.add("hidden");
      setcustomerrating(0)
    }
  }
  const onestarfilter = () =>{
    if (onestarfill.current.classList.contains("hidden")) {
      onestarfill.current.classList.remove("hidden");
      onestaroutline.current.classList.add("hidden");
      setcustomerrating(1)
    } else if (!onestarfill.current.classList.contains("hidden")) {
      onestaroutline.current.classList.remove("hidden");
      onestarfill.current.classList.add("hidden");
      setcustomerrating(0)
    }
  }

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="bg-gray-200 pt-3 flex gap-3">
        <div className="bg-white ml-3 w-1/5">
          <p className="font-semibold text-xl pt-4 pl-2 pb-2">Filters</p>
          <hr />
          <div className="p-4">
            <p className="font-medium text-sm">PRICE</p>
            <div className="bg-gray-300 h-8 pb-2">
             
            </div>
            <hr />
          </div>

          <div className="p-4 space-x-4">
            <p className="font-medium text-sm mb-2">RATINGS</p>
           <div ref={outlinestar}>
            <div className="flex py-1" ref={fivestaroutline} onClick={() =>{fivestarfilter()}}><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/></div>
            <div className="flex py-1 hidden" ref={fivestarfill} onClick={() =>{fivestarfilter()}}><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>

            <div className="flex py-1" ref={fourstaroutline} onClick={() =>{fourstarfilter()}}><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/></div>
            <div className="flex py-1 hidden" ref={fourstarfill} onClick={() =>{fourstarfilter()}}><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>

            <div className="flex py-1" ref={threestaroutline} onClick={() =>{threestarfilter()}}><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/></div>
            <div className="flex py-1 hidden" ref={threestarfill} onClick={() =>{threestarfilter()}}><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>

            <div className="flex py-1" ref={twostaroutline} onClick={() =>{twostarfilter()}}><AiOutlineStar className="text-blue-700"/><AiOutlineStar className="text-blue-700"/></div>
            <div className="flex py-1 hidden" ref={twostarfill} onClick={() =>{twostarfilter()}}><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>

            <div className="flex py-1" ref={onestaroutline} onClick={() =>{onestarfilter()}}><AiOutlineStar className="text-blue-700"/></div>
           </div>
           <div className="flex py-1 hidden" ref={onestarfill} onClick={() =>{onestarfilter()}}><AiFillStar className="text-blue-700"/></div>
           </div>
           {/* <div ref={fillstar} className="hidden" oncli>
            <div className="flex py-1" onClick={() =>{starfilter()}}><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>
            <div className="flex py-1"><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>
            <div className="flex py-1"><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>
            <div className="flex py-1"><AiFillStar className="text-blue-700"/><AiFillStar className="text-blue-700"/></div>
            <div className="flex py-1"><AiFillStar className="text-blue-700"/></div>
           </div>
          </div> */}
          <div
            className="flex flex-col justify-center cursor-pointer hover:text-blue-500"
            onMouseEnter={BrandDD}
            onMouseLeave={BrandDDout}
          >
            <div className="font-semibold text-center text-sm flex items-center justify-center">
              Filter by BRAND <BiChevronDown />
            </div>
            <div
              ref={BrandRef}
              className="hidden absolute top-[10.75rem] z-10 shadow-2xl bg-white p-3 space-y-4"
            >
              <div>
                

          <div className="p-4 space-x-4 flex flex-col">
            <div className="justify-around flex">
            <p className="font-medium text-sm my-2 text-blue-700">BRANDS</p>
            <button onClick={()=> brandname("")} className="font-medium text-sm absolute right-3 top-2 text-blue-400 hover:text-blue-600">Clear Filter</button></div><hr />
            <div className="grid grid-cols-2 gap-2">
              {products.map((product) => {
                return (
                  <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium" onClick={()=>brandname(product.brand)}>
                   {product.brand}
                 </p>
                );
              })}
               </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        <div className="mr-2 pl-6 py-6 bg-white w-4/5">
          <p className="text-lg text-gray-500 font-medium">
            Showing All Products
          </p>
          <hr />
          <div className="grid grid-cols-3">
            {products
              .filter(function (item) {
                if (brandfilter !== "") {
                  return item.brand == brandfilter;
                } else {
                  return item;
                }
              })
              .map((product) => {
                return (
                  <Link
                    key={product.slug.current}
                    href={"/product/" + product.slug.current}
                  >
                    <div className="border-spacing-2 border-dashed border-0 shadow-lg border-gray-400 my-1 p-1">
                      <div className="flex gap-4 cursor-pointer flex-col">
                        <div>
                          <a className="block relative h-48 rounded overflow-hidden justify-center">
                            <img
                              alt="ecommerce"
                              className="object-contain object-center w-full h-full block"
                              src={builder
                                .image(product.image)
                                .width(300)
                                .url()}
                            />
                          </a>
                        </div>
                        <div>
                          <div className="mt-4 px-auto pl-2">
                            <h2 className="hover:text-blue-700">
                              <p className="text-gray-500">{product.brand} </p>
                              <p className="text-black font-semibold text-md">
                                {product.title}
                              </p>
                            </h2>
                          </div>
                        </div>
                        <div>
                          <span className="mt-4  px-4 font-semibold text-black text-xl">
                            ₹{product.price}{" "}
                            <span className="text-gray-400 font-normal line-through text-sm ml-1">
                              ₹{product.mrp}
                            </span>
                            <span className="text-gray-400 font-normal text-sm ml-1">
                              ₹{product.rating}
                            </span>
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
