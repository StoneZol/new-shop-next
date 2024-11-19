import Skeleton from 'react-loading-skeleton'
import styles from './nutritional-value.module.scss'

export default function SkeletonNutritionalValue() {
    return (
        <section className={styles.skeleton}>
            <h3><Skeleton/></h3>
            <div className={styles.nutritionalBox}>
                <Skeleton width={40} height={36}/>  
                <Skeleton width={40} height={36}/>
                <Skeleton width={40} height={36}/>
                <Skeleton width={40} height={36}/>
            </div>
        </section>
    )
}