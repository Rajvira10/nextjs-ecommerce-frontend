import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";


export default function HomePage({product}) {
  return (
    <>
      <Header/>
      <Featured product={product}/>
      <NewProducts/>
    </>
  )
}

export async function getServerSideProps(){
  const featuredProductId = '64443ad97503fd953d438175';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return{
    props: {product: JSON.parse(JSON.stringify(product))},
  } 
}
