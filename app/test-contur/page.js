import styles from './page.module.scss'
import SkeletonSimilarGoods from '@/entities/any-variable-groups/ui/similar-goods/ui/skeleton-similar-goods';
import SkeletonBreadcrumbs from '@/features/breadcrumbs/ui/skeleton-breadcrumbs';
import SkeletonAboutProduct from '@/entities/about-product/ui/skeleton-about-product';
import Skeleton from 'react-loading-skeleton';
import SkeletonBuyPriceWidget from '@/widgets/buy-price-widget/ui/skeleton-buy-price-widget';

export default function TestPage() {
    return (
                <div className={styles.page_box}>
            <div className={styles.page_navigator}>
                <SkeletonBreadcrumbs/>
            </div>
            <div className={styles.content_block}>
                <div className={styles.interactive_block}>
                    <div className={styles.interactive_sticky}>
                        <div className={styles.image_block}>
                            <Skeleton height={'100%'}/>
                        </div>
                        <SkeletonBuyPriceWidget/>
                    </div>
                </div>
                <div className={styles.discription}>
                    <SkeletonAboutProduct/>
                </div>
            </div>
            <div className={styles.another_blocks}>
                <SkeletonSimilarGoods data={new Array(10).fill(null)}/>
            </div>
        </div>
    )
}