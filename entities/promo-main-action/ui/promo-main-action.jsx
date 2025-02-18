import Image from 'next/image'
import styles from './promo-main-action.module.scss'
import Link from 'next/link'

const dataMock = {
    style: {
        color: 'white',
        backgroundColor: '#b80000',
        border: '2px solid gold',
    },
    text: 'Подробнее',
    promoUrl: 'Noviy_God',
    imageUrl: 'https://www.mirf.ru/backend/wp-content/uploads/2025/01/dRIjyCzQYBWzhJZQERFGEVORJ0ncGbkdrqgmHjWT/x1536-y0.webp'
}
export default function PromoMainAction({dataPromo = dataMock}){
    return(
        <section className={styles.section}>
            <div className={styles.back_side}>
                <div className={styles.image_block}>
                <Image src={dataPromo.imageUrl}
                        fill={true}
                        sizes="(max-width: 690px) 100vw, 100vw"
                        alt='image'
                        quality={80}
                        style={{ objectFit: "cover" }}
                        />
                </div>
            </div>
            <div className={styles.front_side}>
                <Link href={`/promo/${dataPromo.promoUrl}`} style={dataPromo.style}>{dataPromo.text}</Link>
            </div>
        </section>
    )
}
