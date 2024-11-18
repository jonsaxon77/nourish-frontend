import ProductList from "./ui/products/ProductList";
import { products } from '@/app/lib/placeholder-data';
import chickenmushroompie from '../public/chicken-mushroom-pie.jpg';
import Jumbotron from "./ui/Jumbotron";

export default function Home() {

  return (

      <main className="main">
        <Jumbotron />
        <ProductList products={products} />
      </main>
  

  );
}
