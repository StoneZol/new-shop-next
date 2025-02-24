import styles from './page.module.scss'
import SkeletoPromoActions from "@/entities/promo-actions/ui/skeleton-promo-actions";
import SkeletonVariableGoods from "@/widgets/variable-groups-goods/ui/skeleton-variable-goods";

export default function loading() {
  return (
    <div className={styles.index_page}>
      <SkeletoPromoActions/>
      <SkeletonVariableGoods/>
      <SkeletonVariableGoods length={8}/>
    </div>
  )
}
