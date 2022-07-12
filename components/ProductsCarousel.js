import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link"


const ProductsCarousel = () => {

  return (
    <>
     <div className="mt-8 bg-gray-200">
      <div
        className="bg-blue-600 p-4 flex align-middle place-items-end mx-4  items-center justify-between"
        id="{topOffers}"
      >
        <p className="text-white font-semibold">Top Offers</p>
        <Link href={"/category/top-offers"}>
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
              slidesToSlide={1}
              swipeable
            >
              <Link href={"/category/nutrition&healthcare"}>
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/150/150/kvpklu80/protein-supplement/q/n/h/weight-gainers-mass-gainers-the-bull-mass-gainer-the-bull-mass-original-imag8jxnhbnpvjjw.jpeg?q=70"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Health Products
                    </h2>
                    <p className="mt-1 text-green-600">Min. 25% Off</p>
                  </div>
                </div>
              </Link>
              <Link href={"/category/ac-min-40-percent-off"}>
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/312/312/k9x3v680/air-conditioner-new/z/e/x/fkac083siaext-0-8-split-fixed-speed-marq-by-flipkart-original-imafrhkmbfg5nb7s.jpeg?q=70"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Air Conditioner
                    </h2>
                    <p className="mt-1 text-green-600">Min. 40% Off</p>
                  </div>
                </div>
              </Link>
              <Link href={"/category/deo-min-35-percent-off"}>
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/150/150/jy0frm80/deodorant/g/f/p/400-hamilton-deodorant-body-spray-denver-men-original-imafgb9fsafampwz.jpeg?q=70"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Deodorants
                    </h2>
                    <p className="mt-1 text-green-600">Min. 35% Off</p>
                  </div>
                </div>
              </Link>
              <Link href={"category/laptop"}>
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70"
                    />
                  </a>

                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Laptop
                    </h2>
                    <p className="mt-1 text-green-600">Min. 10% Off</p>
                  </div>
                </div>
              </Link>
              <Link href={"/category/diapers-upto-50-percent-off"}>
                <div className="w-auto mx-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/150/150/ku2zjww0/diaper/d/a/g/pant-style-diaper-l-cuddles-super-pants-original-imag7agye4np6xde.jpeg?q=70"
                    />
                  </a>
                  <div className="mt-6 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Baby Diapers
                    </h2>
                    <p className="mt-1 text-green-600">Upto 40% Off</p>
                  </div>
                </div>
              </Link>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
    </>
  
  )
}

export default ProductsCarousel;
