import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";
import { searchState } from "../atoms/searchAtom";
import Link from "next/link"
import Image from "next/image"
import { subtotalState } from "../atoms/subtotalAtom";
import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import Lottie from "lottie-react";
import knotanimation from "./knotanimation.json"
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = ({ items }) => {

  const { data: session } = useSession();
  
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });

  const builder = ImageUrlBuilder(client);

  const [search, setSearch] = useRecoilState(searchState);
  const [cart, setcart] = useRecoilState(cartState);

  const clearcart = () => {
      setcart({});
      savecart({});
    };

  const [subTotal, setsubTotal] = useRecoilState(subtotalState);

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

  const removefromcart = (
    itemCode,
    qty,
    image,
    title,
    brand,
    price,
    mrp,
    rating,
    numReviews
  ) => {
    let newcart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newcart[itemCode].qty <= 0) {
      delete newcart[itemCode];
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

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        savecart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear;
    }
  }, []);

  const style = {
    width: 40,
  };
  

  const [showcart, setshowcart] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue-600 p-2 md:p-4 flex align-middle">

    <Link href={"/"}>
    <Image src="/AKrbg.png" className="w-16 md:w-20 absolute top-[-.25rem] md:left-16 left-4 hidden sm:block"  alt="" /></Link>
        <div className="flex w-full sm:justify-center">
          <input
            className="outline-none p-1 ml-2 w-3/5 sm:w-2/5"
            type="search"
            name="search"
            id="search"
            placeholder="Search for products, brands and more"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch className="w-6 h-10 bg-white pr-1 text-blue-700 font-bold" />
        </div>
        <p
          className="flex text-white font-bold items-center mr-4 md:mr-8 cursor-pointer"
          onClick={() => setshowcart(true)}
        >
          <RiShoppingCart2Fill className="w-6 h-6 text-white" />
          Cart
        </p>
        { showcart &&
          <div className="absolute z-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-2xl text-xl text-white top-0 right-0 rounded-md rounded-r-none max-w-full overflow-x-hidden pr-4 overflow-y-scroll">
            <div className="sideCart z-200 font-semibold md:font-bold underline flex justify-around text-lg md:text-2xl my-4">
              <span className="m-auto">Items In Your Cart</span>
              <span>
                <AiFillCloseCircle className="absolute top-4 right-4 hover:cursor-pointer" onClick={() => setshowcart(false) }/>
              </span>
            </div>
            {Object.keys(cart).length == 0 && (
              <div className="m-8 text-lg md:text-xl">
                {" "}
                Cart is empty!! <br /> <br /> Add products to checkout.{" "}
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <div key={k} className="flex m-8 gap-6 items-center">
                  <span className="w-1/5">
                    < img alt="ecommerce" className="object-contain rounded border-gray-200 border-2 p-4 bg-white" src={builder.image(cart[k].image).width(60).url()} />
                  </span>  
                  <span className="w-2/6 text-center">{cart[k].brand}<p className="text-sm">({cart[k].title})</p></span>
                  <span className="w-1/6 flex my-auto">
                    <FaMinusCircle
                      className="m-1 text-white cursor-pointer"
                      onClick={() => {
                        removefromcart(
                          k,
                          1,
                          "image",
                          "price",
                          "name",
                          "size",
                          "variant"
                        );
                      }}
                    />{" "}
                    {cart[k].qty}{" "}
                    <FaPlusCircle
                      className="m-1 text-white cursor-pointer"
                      onClick={() => {
                        addtocart(k,
                          1,
                          "image",
                          "price",
                          "name",
                          "size",
                          "variant");
                      }}
                    />
                  </span>
                  <span className="w-1/6 my-auto">
                    {" "}
                    ₹{(cart[k].price * cart[k].qty).toFixed(2)}
                    <span className="line-through">₹{(cart[k].mrp * cart[k].qty).toFixed(2)}</span>
                  </span>
                </div>
              );
            })}
            <div className="flex justify-end mr-10 mt-6 mb-6 ">
              <span className="border-t-2 border-t-white font-bold">
                Subtotal: ₹{subTotal.toFixed(2)}
              </span>
            </div>

            <Link href={"/Contact"}>
              <button className="bg-white p-2 md:p-3 rounded-3xl m-4 block mx-auto cursor-pointer font-medium md:font-semibold mt-8 text-blue-600">
                <BsFillBagCheckFill className="inline mb-1 mr-1" />
                Checkout
              </button>
            </Link>
            <p
              className="text-center mt-10 mb-4 cursor-pointer hover:underline"
              onClick={clearcart}
            >
              Clear Cart
            </p>
          </div>}
          
          { session && <button onClick={signOut}> <Image src={session.user.image} alt="" className="rounded-full w-9 h-8"/> </button>}
          { !session && <button onClick={signIn} className="bg-white text-blue-600 font-medium md:font-bold px-4 rounded-full">Login</button>}
      </div>
    </header>
  );
};

export default Navbar;
