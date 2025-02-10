'use client';
import SomethingWrong from '@/shared/icons/loaders/something-wrong';
import styles from './page.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { shopError } from '@/shared/shop.сonfig';

export default function Error({error, reset}) {
    const path = usePathname()
    return (
        <div className={styles.error}>
            <div className={styles.error__left_side}>
                <SomethingWrong/>
            </div>
            <div className={styles.error__right_side}>
                <h2>{shopError.text}</h2>
                <div>
                    <button onClick={reset}>{shopError.buttonResetText}</button>
                    {path !==shopError.link ? (<>
                        <span> {shopError.or} </span>
                    <Link href={shopError.link}>{shopError.linkText}</Link></>):(null)}
                </div>
            </div>
        </div>
    );
}
