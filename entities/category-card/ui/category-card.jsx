import styles from './category-card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ name = null, imageUrl = null }) {

    if (name === null || imageUrl === null) return null

    return (
        <Link className={styles.link} href={`category/${name}`}>
            <div className={styles.link_data}>
                <Image
                    className={styles.img}
                    src={imageUrl}
                    alt='name'
                    width={170}
                    height={170}
                    style={{
                        objectFit: 'cover'
                    }}/>
                <div className={styles.link_text}>
                    <span>{name}</span>
                </div>
            </div>
        </Link>
    )
}
