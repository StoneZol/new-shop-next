import SkeletonPopularCategories from '@/entities/any-variable-groups/ui/popular-categories/ui/skeleton-popular-categories';
import styles from './page.module.scss'
import SkeletoPromoActions from "@/entities/promo-actions/ui/skeleton-promo-actions";
import SkeletonMostPopular from '@/entities/any-variable-groups/ui/most-popular/ui/skeleton-most-popular';
import SkeletonSpecialForU from '@/entities/any-variable-groups/ui/special-for-u/ui/skeleton-special-for-u';
export default function loading() {
  return (
    <div className={styles.index_page}>
      <SkeletoPromoActions/>
      <SkeletonSpecialForU data={new Array(8).fill(null)}/>
      <SkeletonPopularCategories data={new Array(8).fill(null)}/>
      <SkeletonMostPopular data={new Array(12).fill(null)}/>
    </div>
  )
}
