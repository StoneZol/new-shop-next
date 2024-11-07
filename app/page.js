import styles from "./page.module.scss";
import ProductCard from './../shared/ProductCard/ui/ProductCard';
import SkeletonProductCard from "@/shared/ProductCard/ui/SkeletonProductCard";

export default function Home() {
  return (
    <div>
      <ProductCard/>
      <SkeletonProductCard/>
    </div>
  );
}
