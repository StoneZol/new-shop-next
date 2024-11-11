import styles from "./page.module.scss";
import ProductCard from '../entities/productCard/ui/ProductCard';
import SkeletonProductCard from "@/entities/productCard/ui/SkeletonProductCard";
import ProductsList from "@/widgets/productsList/ui/ProductsList";
import SkeletonProductsList from "@/widgets/productsList/ui/SkeletonProductsList";
import ProductSearch from "@/features/productSearch/ui/ProductSearch";
import SwiperProductCard from "@/shared/swiperProductCard/ui/SwiperProductCard";


const testData = {
  id: "6",
  imageNames: 'Picture name',
  name: 'Elisenlebkuchen Nürnberger',
  price: 500,
  discount: 90,
  totalPrice: 50,
  units: 'ШТ',
  description: 'Sonne',
  count: 0, 
  category: "Конфеты",
  availability: true
}

const testData2 = [
    {
        id: "6",
        imageNames: 'Picture name',
        name: '6Elisenlebkuchen Nürnberger',
        price: 500,
        discount: 0,
        totalPrice: 500,
        units: 'ШТ',
        description: 'Sonne',
        count: 0,
        category: "Конфеты",
        availability: true
    },
    {
      id: "7",
      imageNames: 'Picture name',
      name: '7Elisenlebkuchen Nürnberger',
      price: 500,
      discount: 0,
      totalPrice: 500,
      units: 'ШТ',
      description: 'Sonne',
      count: 0,
      category: "Конфеты",
      availability: true
  },
  {
    id: "8",
    imageNames: 'Picture name',
    name: '8Elisenlebkuchen Nürnberger',
    price: 500,
    discount: 90,
    totalPrice: 50,
    units: 'ШТ',
    description: 'Sonne',
    count: 0,
    category: "Конфеты",
    availability: true
},
{
  id: "9",
  imageNames: 'Picture name',
  name: '6Elisenlebkuchen Nürnberger',
  price: 500,
  discount: 20,
  totalPrice: 400,
  units: 'ШТ',
  description: 'Sonne',
  count: 0,
  category: "Конфеты",
  availability: true
},
{
id: "10",
imageNames: 'Picture name',
name: '7Elisenlebkuchen Nürnberger',
price: 500,
discount: 20,
totalPrice: 400,
units: 'ШТ',
description: 'Sonne',
count: 0,
category: "Конфеты",
availability: true
},
{
id: "11",
imageNames: 'Picture name',
name: '8Elisenlebkuchen Nürnberger',
price: 500,
discount: 20,
totalPrice: 400,
units: 'ШТ',
description: 'Sonne',
count: 0,
category: "Конфеты",
availability: true
},
]

export default function Home() {
  return (
    <div>
      <ProductSearch/>
      <SwiperProductCard/>
      <ProductsList products={testData2}/>
      <SkeletonProductsList/>
    </div>
  );
}