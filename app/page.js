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
import OrderList from "@/widgets/orderList/ui/OrderList";


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
    id: 11,
    basket: {
      basketItems: [
        {
          id: 101,
          count: 2,
          totalPrice: 199.99,
        },
        {
          id: 102,
          count: 1,
          totalPrice: 49.99,
        },
      ],
      basketPrice: 222249.98,
    },
    status: "Pending",
    clientPhone: "+1234567890",
    clientName: "John Doe Барабас",
    trackId: "TRCK12345678",
    mailData: "john.doe@example.com",
    createdAt: '2024-11-19T10:30:00Z',
    upddatedAt: "2024-11-19T10:30:00Z"
  },
  {
    id: 2222,
    basket: {
      basketItems: [
        {
          id: 201,
          count: 3,
          totalPrice: 299.99,
        },
        {
          id: 202,
          count: 2,
          totalPrice: 99.99,
        },
      ],
      basketPrice: 399.98,
    },
    status: "Shipped",
    clientPhone: "+9876543210",
    clientName: "Jane Smith Барабасова",
    trackId: "TRCK87654321",
    mailData: "jane.smith@example.com",
    createdAt: '2024-11-19T10:30:00Z',
    upddatedAt: "2024-11-19T10:30:00Z"
  },
  {
    id: 333333,
    basket: {
      basketItems: [
        {
          id: 301,
          count: 1,
          totalPrice: 499.99,
        },
        {
          id: 302,
          count: 4,
          totalPrice: 199.96,
        },
      ],
      basketPrice: 699.95,
    },
    status: "IncorrectData",
    clientPhone: "+1122334455",
    clientName: "Alice Brown",
    trackId: "TRCK11223344",
    mailData: "alice.brown@example.com",
    createdAt: '2024-11-19T10:30:00Z',
    upddatedAt: "2024-11-19T10:30:00Z"
  },
];





export default function Home() {
  return (
    
    <div>
      <OrderList orders={orders}/>
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