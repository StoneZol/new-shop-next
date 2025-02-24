import Link from 'next/link'
import styles from './variable-groups-goods.module.scss'
import ProductsList from '@/features/products-list/ui/products-list'

const sectionStyles = {
  8: `${styles.section} ${styles.short}`,
  12: styles.section,
};



export default function VariableGroupsGoods({data, text, link = '#', lenght=12}) {

  const sectionClass = sectionStyles[lenght] || styles.section;

  return (
    <section className={sectionClass}>
        <div className={styles.header_section}>
            <h3>{text.h3}</h3>
            <Link className={styles.link} href={link}>{text.linkText}</Link>
        </div>
        <ProductsList products={data} skeletons={lenght}/>
        <div className={styles.show_link}> 
            <Link className={styles.link_button} href={link}>{text.linkText}</Link>
        </div>
    </section>
  )
}


//переделать на лонг и шорт версию. шорт 1 строка, лонг 2 строки