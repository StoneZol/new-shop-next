'use client';
import SomethingWrong from '@/shared/icons/loaders/something-wrong';
import styles from './page.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Error({error, reset}) {
    const path = usePathname()
    return (
        <div className={styles.error}>
            <div className={styles.error__left_side}>
                <SomethingWrong/>
            </div>
            <div className={styles.error__right_side}>
                <h2>Упс! Что-то пошло не так.</h2>
                <div>
                    <button onClick={reset}>Попробовать снова</button>
                    {path !=='/' ? (<>
                        <span> или </span>
                    <Link href={'/'}>Вернутся на главную</Link></>):(null)}
                </div>
            </div>
        </div>
    );
}
