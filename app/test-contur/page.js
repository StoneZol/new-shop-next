import styles from './page.module.scss'
import SkeletoPromoActions from "@/entities/promo-actions/ui/skeleton-promo-actions";
import SkeletonVariableGoods from "@/widgets/variable-groups-goods/ui/skeleton-variable-goods";

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


export default function TestPage() {
    return (
        <div className={styles.index_page}>
            <SkeletoPromoActions/>
            <SkeletonVariableGoods/>
            <SkeletonVariableGoods length={8}/>
      </div>
    )
}