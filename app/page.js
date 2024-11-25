import styles from "./page.module.scss";
import ProductsList from "@/widgets/products-list/ui/products-list";
import SkeletonProductsList from "@/widgets/products-list/ui/skeleton-products-list";
import ProductSearch from "@/features/product-search/ui/product-search";
import NutritionalValue from "@/entities/nutritional-value/ui/nutritional-value";
import SkeletonNutritionalValue from "@/entities/nutritional-value/ui/skeleton-nutritional-value";
import AboutProduct from "@/entities/about-product/ui/about-product";
import SkeletonAboutProduct from "@/entities/about-product/ui/skeleton-about-product";
import OrderList from "@/widgets/order-list/ui/order-list";
import SwiperProductCard from "@/shared/swiper-product-card/ui/swiper-product-card";
import BuyPageBlock from "@/entities/buy-page-block/ui/buy-page-block";


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
  availability: true,
  imageUrls:['https://cdn1.ozone.ru/s3/multimedia-o/6063449232.jpg',
  'https://wallpaper.forfun.com/fetch/74/74d2c5f8c46325771cab9ac7613fb04f.jpeg?h=900&r=0.5',
  'https://i.pinimg.com/736x/a7/da/f2/a7daf24393f0ba0d8282d9e720e88510.jpg'
 ] 
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
      <BuyPageBlock product={testData2[2]}/>
      <br/>
      <SkeletonAboutProduct/>
      <br/>
      <NutritionalValue values={mockNutritionalValues}/>
      <br/>
      <SkeletonNutritionalValue/>
      <br/>
      <ProductSearch/>
      <div style={{width: '380px', height: '380px'}}><SwiperProductCard width={380} height={380} content={testData.imageUrls} imageQuality={100}/></div>
      <ProductsList products={testData2}/>
      <SkeletonProductsList/>
    </div>
  );
}