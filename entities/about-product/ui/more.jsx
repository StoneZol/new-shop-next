import Link from 'next/link'
import styles from './more.module.scss'
import { shopSomeTranslate } from '@/shared/shop.config'

export default function More({data = [], category = ''}) {
    return (
        <div className={styles.more}>
            <div className={styles.more_string}>
                <div className={styles.type__category}>{shopSomeTranslate.category}</div>
                <Link className={styles.property__link} href={`/category/${category}`}>{category.toUpperCase()}</Link>
            </div>
            {Array.isArray(data) ?
                (data.map((data, index)=>(
                    <div className={styles.more_string} key={index}>
                        <div className={styles.type}>{data.name}</div>
                        <div className={styles.property}>{data.value}</div>
                    </div>
                ))): (null)
            }
        </div>
    )
}