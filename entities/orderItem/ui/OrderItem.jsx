import styles from './order.module.scss';
import Link from 'next/link';
import { shop } from '@/shared/shopConfig';

export default function OrderItem({order}) {
  return (
    <section className={styles.section}>
        <section className={styles.orderID}>
            <h2>№424242342</h2>
        </section>
        <section className={styles.status}>
            <select>
                <option value="Empty">Новый</option>
                <option value="Pending">В работе</option>
                <option value="Shipped">Отправлен</option>
                <option value="Delivered">Завершен</option>
                <option value="IncorrectData">Неверные данные</option>
                <option value="Canseled">Отменен</option>
            </select>
        </section>
        <section className={styles.dataSection}>
            <span>Создан: <b>20.12.2024 23:33</b></span>
            <span>Изменен: <b>20.12.2024 23:33</b></span>
        </section>

        <section className={styles.contacts}>
            <span>Карабас Барабас Xthnjdsq</span>
            <span><a href={`tel:88005553535`} type='phone'>88005553535</a></span>
        </section>
        <section className={styles.total}>
            <span>Итого: <b>1500</b>{shop.currency}</span>
        </section>
        <section className={styles.detail}>
            <Link href={`#`}>Подробней</Link>
        </section>
        
    </section>
  )
}
