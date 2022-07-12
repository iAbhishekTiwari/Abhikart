import { createClient } from 'next-sanity';
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductsCarousel from '../components/ProductsCarousel';
import CategoriesCarousel from '../components/CategoriesCarousel';
import styles from '../styles/Home.module.css'

export default function Home({items}) {
  return (

      <div className='bg-gray-200'>
        <Navbar />
        <CategoriesCarousel />
        <ProductsCarousel />
        <Footer />
      </div>
  )
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "hhj2mrqs",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
  });
  const query = `*[_type == "product"]`;
  const items = await client.fetch(query);

  return {
    props: {
      items,
    },
  };
}