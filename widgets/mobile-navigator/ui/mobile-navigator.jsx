import IconHome from '@/shared/icons/navigation/home'
import styles from './mobile-navigator.module.scss'
import Link from 'next/link'
import LetsIconsBasketAlt3 from '@/shared/icons/navigation/lets-icons-basket-alt3'
import IconUser from '@/shared/icons/navigation/user'
import { shopMobileNav } from '@/shared/shop.config'
import PointBasketLength from '@/shared/mini-components/point-basket-length/ui/point-basket-length'

export default function MobileNavigator() {
  return (
    <section className={styles.navigator}>
        <div><Link href={'/'} aria-label={shopMobileNav.onGeneralLabel}><IconHome/></Link></div>
        {/* <div><Link href={'#'}aria-label={shopMobileNav.inProfileLabel}><IconUser/></Link></div> */}
        <div><Link href={'/basket'} aria-label={shopMobileNav.inBasketLabel}><LetsIconsBasketAlt3/></Link><PointBasketLength/></div>
    </section>
  )
}
