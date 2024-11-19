import Skeleton from 'react-loading-skeleton';
import styles from './order.module.scss';

export default function SkeletonOrderItem() {
    return (
        <section className={styles.skeleton}>
                <Skeleton height={25} width={100}/>
                <Skeleton height={25} width={160}/>
                <Skeleton height={25} width={160}/>
                <Skeleton height={25} width={160}/>
                <Skeleton height={25} width={50}/>
                <Skeleton height={25} width={90}/>
        </section>
    )
}
