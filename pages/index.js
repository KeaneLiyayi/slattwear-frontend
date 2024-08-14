import Collection from "@/components/Collection";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import Skirt from "@/components/Skirt";
import TopProducts from "@/components/TopProducts";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/products";

export default function Home({ product, products }) {
  console.log(products);
  return (
    <>
      <Hero featuredProduct={product} />
      <TopProducts products={products} />
      <FeaturedProduct />
      <Collection />
      <Skirt />

    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  try {
    const id = '66704173a577a1f0d2a95803';
    const product = await Product.findById(id).lean(); // Convert Mongoose document to plain JavaScript object
    const products = await Product.find().lean(); // Fetch all products

    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
        products: JSON.parse(JSON.stringify(products))
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        product: null,
        products: null // Handle error gracefully
      }
    };
  }
}
