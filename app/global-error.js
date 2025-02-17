'use client';
import SomethingWrong from '@/shared/icons/loaders/something-wrong';
import styles from './page.module.scss'
import Link from 'next/link';
import { shopError} from '@/shared/shop.config';

export default function GlobalError({error, reset}) {
    console.error(error.message)
    return (
        <html>
            <body>
                <div className={styles.error}>
                    <div className={styles.error__left_side}>
                        <SomethingWrong/>
                    </div>
                    <div className={styles.error__right_side}>
                        <h2>{shopError.text}</h2>
                        <div>
                            <button onClick={reset}>{shopError.buttonResetText}</button>
                            <span>
                                {shopError.or}
                            </span>
                            <Link href={shopError.link}>{shopError.linkText}</Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}