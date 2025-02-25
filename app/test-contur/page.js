import styles from './page.module.scss'
import SkeletoPromoActions from "@/entities/promo-actions/ui/skeleton-promo-actions";
import PopularCategories from '@/entities/any-variable-groups/ui/popular-categories/ui/popular-categories';
import SkeletonPopularCategories from '@/entities/any-variable-groups/ui/popular-categories/ui/skeleton-popular-categories';
import SkeletonMostPopular from '@/entities/any-variable-groups/ui/most-popular/ui/skeleton-most-popular';
import SkeletonSpecialForU from '@/entities/any-variable-groups/ui/special-for-u/ui/skeleton-special-for-u';

const mockPromo = [
    {
        promoUrl: '#',
        imageUrl: 'https://bogatyr.club/uploads/posts/2024-05/79576/1715179436_bogatyr-club-e96l-p-zvezdnoe-ditya-oboi-143.jpg',
        ad: {
            legalPerson: 'OOO Cigane',
            inn: '8800553535',
            erid: 'fkj4kjw5hryhe6yu5'
        }
    },
    {
        promoUrl: '#',
        imageUrl: 'https://bogatyr.club/uploads/posts/2024-05/79576/1715179387_bogatyr-club-5jad-p-zvezdnoe-ditya-oboi-10.jpg',
        ad: {
            legalPerson: 'OOO koni',
            inn: 'who are you',
            erid: 'hjjgfj65757'
        }
    },
    {
        promoUrl: '#',
        imageUrl: 'https://bogatyr.club/uploads/posts/2024-05/79576/1715179435_bogatyr-club-f38r-p-zvezdnoe-ditya-oboi-149.jpg',
        ad: null,
    }
]

const mockCategory = [
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
]

const texts ={
    h3: 'Популярное',
    link: "Подробнее"
}

const links = '#'


export default function TestPage() {
    return (
        <div className={styles.index_page}>
            <SkeletoPromoActions/>
            <PopularCategories data={mockCategory.slice(0,8)}/>
            <SkeletonPopularCategories data={new Array(8).fill(null)}/>
            <SkeletonMostPopular data={new Array(12).fill(null)}/>
            <SkeletonSpecialForU data={new Array(8).fill(null)}/>
        </div>
    )
}