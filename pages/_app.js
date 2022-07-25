import '../styles/globals.css'
import React, { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { cartState } from '../atoms/cartAtom';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  // useEffect(() => {
  //   try {
  //     if (localStorage.getItem("cart")) {
  //       setcart(JSON.parse(localStorage.getItem("cart")));
  //       savecart(JSON.parse(localStorage.getItem("cart")));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     localStorage.clear;
  //   }
  // }, [router.query]);

  // const savecart = (mycart) => {
  //   localStorage.setItem("cart", JSON.stringify(mycart));
  //   let subt = 0;
  //   let keys = Object.keys(mycart);
  //   for (let i = 0; i < keys.length; i++) {
  //     subt += mycart[keys[i]]["price"] * mycart[keys[i]]["qty"];
  //   }
  //   setsubTotal(subt);
  // };


  return (
   <SessionProvider session={pageProps.session}>  
    <RecoilRoot>
     <Component {...pageProps} />
    </RecoilRoot> 
   </SessionProvider> 
  )
}

export default MyApp
