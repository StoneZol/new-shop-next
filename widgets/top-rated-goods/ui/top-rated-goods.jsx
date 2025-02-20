import Link from 'next/link'
import styles from './top-rated-goods.module.scss'
import ProductsList from '@/features/products-list/ui/products-list'
import { shopTopRatedGoods } from '@/shared/shop.config'

export default function TopRatedGoods({data}) {

  return (
    <section className={styles.section}>
        <div className={styles.header_section}>
            <h3>{shopTopRatedGoods.h3}</h3>
            <Link className={styles.link} href={'#'}>{shopTopRatedGoods.linkText}</Link>
        </div>
        <ProductsList products={data} skeletons={12}/>
        <div className={styles.show_link}> 
            <Link className={styles.link_button} href={'#'}>{shopTopRatedGoods.linkText}</Link>
        </div>
    </section>
  )
}
