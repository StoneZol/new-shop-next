import React from 'react'
import styles from './footer.module.scss'
import { shopContacts, shopLocation } from '@/shared/shop.сonfig'
import Link from 'next/link'
import Image from 'next/image'
import { Vk } from '@/shared/icons/social/vk'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.baseinfo}>
            <h4>Наши контакты:</h4>
            <p>Email: <Link href={`mailto:${shopContacts.email}`}>{shopContacts.email}</Link></p>
            <p>Телефон: <Link href={`tel:${shopContacts.phone}`}>{shopContacts.phone}</Link></p>
        </section>
        <section className={styles.socials}> 
            <h4>Следите за нами в соцсетях!</h4>
            <div>
                <span>Мы в ВК!</span><Vk url={'https://vk.com'}/>
            </div>
        </section>
        <section className={styles.map}>
            <h4>{shopLocation.addres}</h4>
            <Link href={shopLocation.maplink}>
                <Image src={'/map.png'} width={360} height={220} quality={100}/>
            </Link>
        </section>
    </footer>
  )
}
