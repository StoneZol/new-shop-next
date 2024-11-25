import styles from './promo-tag-line.module.scss'

export default function PromoTagLine({promoTag}) {
 if (promoTag) {
    return <aside className={styles.promotionTag}>{promoTag}</aside>
 } else return null;
}
