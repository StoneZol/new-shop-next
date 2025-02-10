import styles from './promo-tag-line.module.scss'

export default function PromoTagLine({promoTag}) {
 if (promoTag) {
    return <aside className={styles.promotion_tag}>{promoTag}</aside>
 } else return null;
}
