import styles from './page.module.scss'
import CategoryCard from "@/entities/category-card/ui/category-card"
import Mapper from "@/shared/mapper/ui/mapper"
import { shopCategoriesPage } from '@/shared/shop.config'

const mockCard = [
    {
        name: 'Выпечка',
        imageUrl: 'https://buloshnaya.org/wp-content/uploads/2018/05/Food_Bread.jpg'
    },
    {
        name: 'Шоколад',
        imageUrl: 'https://www.depo.ua/uploads/281064/conversions/c707b05547e42354cc489518c0746a3d-wide-big.jpg'
    },
    {
        name: 'Торты',
        imageUrl: 'https://static.vkusnyblog.com/full/uploads/2025/01/hazelnut-chocolate-cake-300x400.jpg'
    },
    {
        name: 'Мармелад',
        imageUrl: 'https://piratmarmelad.ru/catalog/product/zhevatelnyj-marmelad-frukty-4d-100gr-w800-h800.jpg'
    },
    {
        name: 'Шоколад',
        imageUrl: 'https://www.depo.ua/uploads/281064/conversions/c707b05547e42354cc489518c0746a3d-wide-big.jpg'
    },
    {
        name: 'Выпечка',
        imageUrl: 'https://buloshnaya.org/wp-content/uploads/2018/05/Food_Bread.jpg'
    },
    {
        name: 'Мармелад',
        imageUrl: 'https://piratmarmelad.ru/catalog/product/zhevatelnyj-marmelad-frukty-4d-100gr-w800-h800.jpg'
    },
    {
        name: 'Торты',
        imageUrl: 'https://static.vkusnyblog.com/full/uploads/2025/01/hazelnut-chocolate-cake-300x400.jpg'
    },    {
        name: 'Выпечка',
        imageUrl: 'https://buloshnaya.org/wp-content/uploads/2018/05/Food_Bread.jpg'
    },
    {
        name: 'Мармелад',
        imageUrl: 'https://piratmarmelad.ru/catalog/product/zhevatelnyj-marmelad-frukty-4d-100gr-w800-h800.jpg'
    },
    {
        name: 'Шоколад',
        imageUrl: 'https://www.depo.ua/uploads/281064/conversions/c707b05547e42354cc489518c0746a3d-wide-big.jpg'
    },
    {
        name: 'Выпечка',
        imageUrl: 'https://buloshnaya.org/wp-content/uploads/2018/05/Food_Bread.jpg'
    },{
    name: 'Торты',
    imageUrl: 'https://static.vkusnyblog.com/full/uploads/2025/01/hazelnut-chocolate-cake-300x400.jpg'
}, 
]
export default async function ALLCategoriesPage(){
    return(
        <div className={styles.category_page}>
            <h2>{shopCategoriesPage.h2}</h2>
            <Mapper data={mockCard} className={styles.mapper}>
                {(item, index) => <CategoryCard key={index} name={item.name} imageUrl={item.imageUrl}/>}
            </Mapper>
        </div>
    )
}