import Link from "next/link";
import styles from './page.module.scss'
import { shop404 } from "@/shared/shop.config";

export default function NotFound() {
    return (
        <div className={styles.not_found}>
            <div className={styles.not_found__left_side}>
                <span>404</span>
                </div>
            <div className={styles.not_found__right_side}>
                <h1>{shop404.text}</h1>
                <Link href={shop404.link}>{shop404.linkText}</Link>
            </div>
        </div>
    );
}