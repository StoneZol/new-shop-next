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
import OrderItem from "../entities/orderItem/ui/OrderItem";
import SkeletonOrderItem from "@/entities/orderItem/ui/SkeletonOrderItem";


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
        availability: true,
        imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg',
        'https://wallpaper.forfun.com/fetch/74/74d2c5f8c46325771cab9ac7613fb04f.jpeg?h=900&r=0.5',
        'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'
       ] 
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
      availability: true,
      imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg',
      'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'
     ] 
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
    availability: true,
    imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg',
    'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'
   ] 
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
  availability: true,      
  imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg'] 
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
availability: true,
imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg'] 
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
availability: true,
imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg'] 
},
]

const mockNutritionalValues = {
  protein: "5",
  fat: "10",
  carbohydrate: "30",
  calories: "250"
};

const orders = [
  {
    id: 1,
    Basket: {
      BasketItems: [
        {
          id: 101,
          count: 2,
          TotalPrice: 199.99,
        },
        {
          id: 102,
          count: 1,
          TotalPrice: 49.99,
        },
      ],
      BasketPrice: 249.98,
    },
    Status: "Processing",
    clientPhone: "+1234567890",
    clientName: "John Doe",
    TrackId: "TRCK12345678",
    mailData: "john.doe@example.com",
  },
  {
    id: 2,
    Basket: {
      BasketItems: [
        {
          id: 201,
          count: 3,
          TotalPrice: 299.99,
        },
        {
          id: 202,
          count: 2,
          TotalPrice: 99.99,
        },
      ],
      BasketPrice: 399.98,
    },
    Status: "Shipped",
    clientPhone: "+9876543210",
    clientName: "Jane Smith",
    TrackId: "TRCK87654321",
    mailData: "jane.smith@example.com",
  },
  {
    id: 3,
    Basket: {
      BasketItems: [
        {
          id: 301,
          count: 1,
          TotalPrice: 499.99,
        },
        {
          id: 302,
          count: 4,
          TotalPrice: 199.96,
        },
      ],
      BasketPrice: 699.95,
    },
    Status: "Delivered",
    clientPhone: "+1122334455",
    clientName: "Alice Brown",
    TrackId: "TRCK11223344",
    mailData: "alice.brown@example.com",
  },
];





export default function Home() {
  return (
    
    <div>
      <br/>
      <SkeletonOrderItem/>
      <br/>
      <OrderItem/>
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
      {/* <div style={{width: '180px', height: '380px'}}><SwiperProductCard width={180} height={380}/></div> */}
      <ProductsList products={testData2}/>
      <SkeletonProductsList/>
    </div>
  );
}