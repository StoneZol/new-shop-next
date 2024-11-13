import Skeleton from 'react-loading-skeleton'
import styles from './nutritionalValue.module.scss'

export default function SkeletonNutritionalValue({}) {
    return (
        <section className={styles.skeleton}>
            <h3><Skeleton/></h3>
            <div className={styles.nutritionalBox}>
                <Skeleton width={40} height={36} className={styles.skeleton}/>  
                <Skeleton width={40} height={36} className={styles.skeleton}/>
                <Skeleton width={40} height={36} className={styles.skeleton}/>
                <Skeleton width={40} height={36} className={styles.skeleton}/>
            </div>
        </section>
    )
}