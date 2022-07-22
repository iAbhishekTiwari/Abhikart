import { createClient } from 'next-sanity';
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductsCarousel from '../components/ProductsCarousel';
import CategoriesCarousel from '../components/CategoriesCarousel';
import SearchResults from '../components/SearchResults';

export default function Home({items, appliances, phones}) {
  return (

      <div className='bg-gray-200'>
        <Navbar />
        <CategoriesCarousel />
        <ProductsCarousel appliances={appliances} phones={phones} />
        <SearchResults items={items}/>
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

  const phonequery = `*[_type == "product" && references('40e53406-4e17-47cf-a837-a4511fe8df89')]`;
  const phones = await client.fetch(phonequery);

  const appliancequery = `*[_type == "product" && references('914be9aa-b2fd-4f87-aba3-6d27155d9840')]`;
  const appliances = await client.fetch(appliancequery);

  return {
    props: {
      items,
      phones,
      appliances
    },
  };
}