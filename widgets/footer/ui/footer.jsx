import React from 'react'
import styles from './footer.module.scss'
import {shopContacts, shopLocation, shopSocialContacts} from '@/shared/shop.сonfig'
import Link from 'next/link'
import Image from 'next/image'
import Vk from '@/shared/icons/social/vk'
import Ok from '@/shared/icons/social/ok'
import Tg from '@/shared/icons/social/tg'
import Insta from '@/shared/icons/social/insta'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftSide}>
                <section className={styles.contacts}>
                    <h4>Наши контакты:</h4>
                    <p>Телефон:
                        <Link href={`tel:${shopContacts.phone}`}> {shopContacts.phone}</Link>
                    </p>
                    <p>email:
                        <Link href={`mailto:${shopContacts.email}`}> {shopContacts.email}</Link>
                    </p>
                </section>
                <section className={styles.socials}>
                    <h4>Следите за нами в соцсетях!</h4>
                    <div className={styles.icons}>
                        {shopSocialContacts.vk.length > 0 && <Vk url={shopSocialContacts.vk}/>}
                        {shopSocialContacts.ok.length > 0 && <Ok url={shopSocialContacts.ok}/>}
                        {shopSocialContacts.tg.length > 0 && <Tg url={shopSocialContacts.tg}/>}
                        {shopSocialContacts.insta.length > 0 && <Insta url={shopSocialContacts.insta}/>}
                    </div>
                </section>
            </div>
            <div className={styles.rightSide}>
                <section className={styles.map}>
                    <h4>{shopLocation.addres}</h4>
                    <Link href={shopLocation.maplink}>
                        <Image src={'/map.png'} width={330} height={140} quality={100} alt='Map'/>
                    </Link>
                </section>
            </div>
        </footer>
    )
}
