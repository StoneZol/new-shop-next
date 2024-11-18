import styles from "./page.module.scss";
import ProductCard from '../entities/productCard/ui/ProductCard';
import SkeletonProductCard from "@/entities/productCard/ui/SkeletonProductCard";
import ProductsList from "@/widgets/productsList/ui/ProductsList";
import SkeletonProductsList from "@/widgets/productsList/ui/SkeletonProductsList";
import ProductSearch from "@/features/productSearch/ui/ProductSearch";
import SwiperProductCard from "@/shared/swiperProductCard/ui/SwiperProductCard";
import NutritionalValue from "@/entities/NutritionalValue/ui/NutritionalValue";
import SkeletonNutritionalValue from "@/entities/NutritionalValue/ui/SkeletonNutritionalValue";
import AboutProduct from "@/entities/aboutProduct/ui/AboutProduct";
import SkeletonAboutProduct from "@/entities/aboutProduct/ui/SkeletonAboutProduct";


const testData = {
  id: "6",
  imageNames: 'Picture name',
  name: 'Elisenlebkuchen Nürnberger',
  price: 500,
  discount: 90,
  totalPrice: 50,
  units: 'шт',
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
        units: 'шт',
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
      units: 'шт',
      description: 'Sonne',
      count: 0,
      category: "Конфеты",
      availability: true
  },
  {
    id: "8",
    imageNames: 'Picture name',
    name: '8ElisenlebkuchenNürnberger',
    price: 500,
    discount: 90,
    totalPrice: 50,
    promotionTag:'11.11',
    units: 'шт',
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
  promotionTag:'Новогодние каникулы',
  units: 'шт',
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
units: 'шт',
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
units: 'шт',
description: 'Sonne',
count: 0,
category: "Конфеты",
availability: true
},
]

const mockNutritionalValues = {
  protein: "5",
  fat: "10",
  carbohydrate: "30",
  calories: "250"
};


export default function Home() {
  return (
    <div>
      <br/>
      <AboutProduct/>
      <br/>
      <SkeletonAboutProduct/>
      <br/>
      <NutritionalValue values={mockNutritionalValues}/>
      <br/>
      <SkeletonNutritionalValue/>
      <br/>
      <ProductSearch/>
      <div style={{width: '180px', height: '380px'}}><SwiperProductCard width={180} height={380}/></div>
      <ProductsList products={testData2}/>
      <SkeletonProductsList/>
    </div>
  );
}