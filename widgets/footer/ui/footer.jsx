import React from 'react'
import styles from './footer.module.scss'
import {shopContacts, shopLocation, shopSocialContacts} from '@/shared/shop.config'
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
                    <h4>{shopContacts.ourContacts}:</h4>
                    <p>{shopContacts.phoneText}:
                        <Link href={`tel:${shopContacts.phone}`}> {shopContacts.phone}</Link>
                    </p>
                    <p>{shopContacts.emailText}:
                        <Link href={`mailto:${shopContacts.email}`}> {shopContacts.email}</Link>
                    </p>
                </section>
                <section className={styles.socials}>
                    <h4>{shopContacts.visitOur}</h4>
                    <div className={styles.icons}>
                        {shopSocialContacts.vk.length > 0 && <Vk url={shopSocialContacts.vk} label='vk'/>}
                        {shopSocialContacts.ok.length > 0 && <Ok url={shopSocialContacts.ok} label='ok'/>}
                        {shopSocialContacts.tg.length > 0 && <Tg url={shopSocialContacts.tg} label='tg'/>}
                        {shopSocialContacts.insta.length > 0 && <Insta url={shopSocialContacts.insta} label='inst'/>}
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
