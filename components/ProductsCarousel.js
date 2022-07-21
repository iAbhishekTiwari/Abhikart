import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link"
import Image from "next/image"
import { useRecoilValue } from "recoil";
import { searchState } from "../atoms/searchAtom";

const ProductsCarousel = ({ phones, appliances }) => {

  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });

  const builder = imageUrlBuilder(client);

  const search = useRecoilValue(searchState);

  if(search==''){
  return (
    <>
     <div className="mt-8 bg-gray-200">
      <div
        className="bg-blue-600 p-4 flex align-middle place-items-end mx-4  items-center justify-between"
        id="{topOffers}"
      >
        <p className="text-white font-semibold">Top Offers on Phones</p>
        <Link href={"/category/mobile-phone"}>
          <button className="bg-white text-blue-600 font-bold px-4 rounded-full">
            View All
          </button>
        </Link>
      </div>
      <section className="text-gray-600 mx-4 body-font bg-white  cursor-pointer">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap mt-4 mx-auto">
           <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 2,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                },
              }}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
             
            {phones.map((item) => {
              return (
              <Link href={"/product/" + item.slug.current} key={"item.slug.current"} >
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src={builder.image(item.image).width(200).url()}
                    />
                  </a>
                  <div className="mt-6 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.brand}
                    </h2>
                    <p>{item.title}</p>
                    <p className="mt-1 text-green-600">₹{item.price}<span className="line-through decoration-2 decoration-slate-500">₹{item.mrp}</span></p>
                  </div>
                </div>
              </Link> ) })}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
    <div className="mt-8 bg-gray-200">
      <div
        className="bg-blue-600 p-4 flex align-middle place-items-end mx-4  items-center justify-between"
        id="{topOffers}"
      >
        <p className="text-white font-semibold">Appliances</p>
        <Link href={"/category/mobile-phone"}>
          <button className="bg-white text-blue-600 font-bold px-4 rounded-full">
            View All
          </button>
        </Link>
      </div>
      <section className="text-gray-600 mx-4 body-font bg-white  cursor-pointer">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap mt-4 mx-auto">
           <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 2,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                },
              }}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
             
            {appliances.map((item) => {
              return (
              <Link href={"/product/" + item.slug.current} key={item.slug.current}>
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src={builder.image(item.image).width(200).url()}
                    />
                  </a>
                  <div className="mt-6 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.brand}
                    </h2>
                    <p>{item.title}</p>
                    <p className="mt-1 text-green-600">₹{item.price}<span className="line-through decoration-2 decoration-slate-500">₹{item.mrp}</span></p>
                  </div>
                </div>
              </Link> ) })}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
    </>
  
  ) }
}

export default ProductsCarousel;