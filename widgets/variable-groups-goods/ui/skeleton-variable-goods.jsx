import SkeletonProductsList from '@/features/products-list/ui/skeleton-products-list';
import styles from './variable-groups-goods.module.scss'
import Skeleton from "react-loading-skeleton";

export default function SkeletonVariableGoods({ length = 12 }) {
    return (
      <section className={length === 8 ? `${styles.section} ${styles.short}` : styles.section}>
        <div className={styles.header_section}>
          <Skeleton width="30%" height="24px" />
          <Skeleton width="20%" height="16px" />
        </div>
          <SkeletonProductsList array={length}/>
        <div className={styles.show_link}>
          <Skeleton width="25%" height="20px" />
        </div>
      </section>
    );
  }
  