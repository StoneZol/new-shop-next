import styles from "./page.module.scss";
import ProductCard from './../shared/ProductCard/ui/ProductCard';
import SkeletonProductCard from "@/shared/ProductCard/ui/SkeletonProductCard";


const testData = {
  id: "6",
  imageNames: 'Picture name',
  name: 'Elisenlebkuchen Nürnberger',
  price: 500,
  discount: 20,
  totalPrice: 400,
  units: 'ШТ',
  description: 'Sonne',
  count: 0, 
  category: "Конфеты",
  availability: true
}

export default function Home() {
  return (
    <div>
      <ProductCard product={testData}/>
      <SkeletonProductCard/>
    </div>
  );
}