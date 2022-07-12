import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link"
import { BiChevronDown } from 'react-icons/bi';


const CategoriesCarousel = () => {
    const Fashion = useRef();
    const Electronics = useRef();
    const Beauty = useRef();

   
    const FashionDD = () => {
      if (Fashion.current.classList.contains("hidden")) {
        Fashion.current.classList.remove("hidden");
      } else if (!Fashion.current.classList.contains("hidden")) {
        Fashion.current.classList.add("hidden");
      }
    };
  
    const FashionDDout = () => {
        Fashion.current.classList.add("hidden");
  
    };
  
    const ElectronicsDD = () => {
      if (Electronics.current.classList.contains("hidden")) {
        Electronics.current.classList.remove("hidden");
      } else if (!Electronics.current.classList.contains("hidden")) {
        Electronics.current.classList.add("hidden");
      }
    };
  
    const ElectronicsDDout = () => {
      Electronics.current.classList.add("hidden");
    };
  
    const BeautyDD = () => {
      if (Beauty.current.classList.contains("hidden")) {
        Beauty.current.classList.remove("hidden");
      } else if (!Beauty.current.classList.contains("hidden")) {
        Beauty.current.classList.add("hidden");
      }
    };
  
    const BeautyDDout = () => {
      Beauty.current.classList.add("hidden");
    };


  return (
    <>
     <div className="flex w-full justify-evenly border-b-6 border-gray-400">
                  <Link href={"/#{topOffers}"}>
                      <div className="flex flex-col justify-center cursor-pointer hover:text-blue-500">
                          <div>
                              <img
                                  src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                                  alt=""
                                  className="h-20 w-20" />
                          </div>
                          <div className="font-semibold text-center text-sm">
                              Top Offers
                          </div>
                      </div>
                  </Link>
                  <Link href={"/category/grocery"}>
                      <div className="flex flex-col justify-center cursor-pointer hover:text-blue-500">
                          <div>
                              <img
                                  src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                                  alt=""
                                  className="h-20 w-20" />
                          </div>
                          <div className="font-semibold text-center text-sm">Grocery</div>
                      </div>
                  </Link>
                  <Link href={"/category/mobile-phone"}>
                      <div className="flex flex-col justify-center cursor-pointer hover:text-blue-500">
                          <div>
                              <img
                                  src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                                  alt=""
                                  className="h-20 w-20" />
                          </div>
                          <div className="font-semibold text-center text-sm">
                              Mobile Phone
                          </div>
                      </div>
                  </Link>
                  <div
                      className="flex flex-col justify-center cursor-pointer hover:text-blue-500"
                      onMouseEnter={FashionDD}
                      onMouseLeave={FashionDDout}
                  >
                      <div>
                          <img
                              src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
                              alt=""
                              className="h-20 w-20" />
                      </div>
                      <div className="font-semibold text-center text-sm flex items-center justify-center">
                          Fashion <BiChevronDown />
                      </div>
                      <div
                          ref={Fashion}
                          className="hidden absolute top-[11.25rem] z-10 shadow-2xl bg-white p-3 space-y-4"
                      >
                          <Link href={"/category/mens-top-wear"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Men's Top Wear
                              </p>
                          </Link>
                          <Link href={"/category/mens-bottom-wear"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Men's Bottom Wear
                              </p>
                          </Link>
                          <Link href={"/category/women-ethnic"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Women Ethnic
                              </p>
                          </Link>
                          <Link href={"/category/women-western"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Women Western
                              </p>
                          </Link>
                          <Link href={"/category/men-footwear"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Men Footwear
                              </p>
                          </Link>
                          <Link href={"/category/women-footwear"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Women Footwear
                              </p>
                          </Link>
                      </div>
                  </div>
                  <div
                      className="flex flex-col justify-center cursor-pointer hover:text-blue-500"
                      onMouseEnter={ElectronicsDD}
                      onMouseLeave={ElectronicsDDout}
                  >
                      <div>
                          <img
                              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                              alt=""
                              className="h-20 w-20" />
                      </div>
                      <div className="font-semibold text-center text-sm flex items-center justify-center">
                          Electronics <BiChevronDown />
                      </div>
                      <div
                          ref={Electronics}
                          className="hidden absolute top-[11.25rem] z-10 shadow-2xl bg-white p-3 space-y-4"
                      >
                          <Link href={"/category/laptop"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Laptops
                              </p>
                          </Link>
                          <Link href={"/category/tablet"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Tablets
                              </p>
                          </Link>
                          <Link href={"/category/headphone"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Headphones
                              </p>
                          </Link>
                          <Link href={"/category/camera"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Cameras
                              </p>
                          </Link>
                          <Link href={"/category/television"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Television
                              </p>
                          </Link>
                      </div>
                  </div>
                  <Link href={"/category/appliances"}>
                      <div className="flex flex-col justify-center cursor-pointer hover:text-blue-500">
                          <div>
                              <img
                                  src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                                  alt=""
                                  className="h-20 w-20" />
                          </div>
                          <div className="font-semibold text-center text-sm">
                              Appliances
                          </div>
                      </div>
                  </Link>

                  <div
                      className="flex flex-col justify-center cursor-pointer hover:text-blue-500"
                      onMouseEnter={BeautyDD}
                      onMouseLeave={BeautyDDout}
                  >
                      <div className="w-full">
                          <img
                              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                              alt=""
                              className="h-20 w-20 mx-auto" />
                      </div>
                      <div className="font-semibold text-center text-sm flex items-center justify-center">
                          Beauty, Toys and More <BiChevronDown />
                      </div>
                      <div
                          ref={Beauty}
                          className="hidden absolute top-[11.25rem] z-10 shadow-2xl bg-white p-3 space-y-4"
                      >
                          <Link href={"/category/beauty&personal-care"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Beauty & Personal Care
                              </p>
                          </Link>
                          <Link href={"/category/sports&fitness"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Sports & Fitness
                              </p>
                          </Link>
                          <Link href={"/category/baby-care"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700  font-medium">
                                  Baby Care
                              </p>
                          </Link>
                          <Link href={"/category/grooming"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700  font-medium">
                                  Grooming
                              </p>
                          </Link>
                          <Link href={"/category/nutrition&healthcare"}>
                              <p className="text-black hover:bg-gray-200 hover:text-blue-700 font-medium">
                                  Nutrition & Healthcare
                              </p>
                          </Link>
                      </div>
                  </div>
              </div><Carousel
                  autoFocus
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  stopOnHover
                  swipeable
                  useKeyboardArrows
                  dynamicHeight={false}
                  showStatus={false}
              >
                      <div>
                          <img src="/assets/c1-headphones.jpg" className="relative" />


                      </div>
                      <div>
                          <img src="/assets/c2-electronics.jpg" />
                      </div>
                  </Carousel>
          
          </>
  );
};

export default CategoriesCarousel;
