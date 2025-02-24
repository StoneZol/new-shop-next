import styles from './promo-tag-line.module.scss'

export default function PromoTagLine({promoTag, promoTagStyles= {}}) {
 if (!promoTag) return null
 return (
   <aside className={styles.promotion_tag} style={promoTagStyles}>{promoTag}</aside>
 );
}
