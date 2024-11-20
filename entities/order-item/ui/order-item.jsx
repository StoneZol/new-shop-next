'use client'
import styles from './order-item.module.scss';
import Link from 'next/link';
import { shop } from '@/shared/shop.сonfig';
import { useEffect, useState } from 'react';
import dataToISO from '@/shared/data-to-iso/data-to-iso';

export default function OrderItem({order}) {
    const [isStatus, setIsStatus] = useState(order.status)

    useEffect(() => {
        setIsStatus(order.status);
    }, [order.status]);

    const selectStatus = (e) => {
        const newStatus = e.target.value
        setIsStatus(newStatus)
    }

  return (
    <section className={styles.section}>
        <section className={styles.orderID}>
            <h2>№{order.id}</h2>
        </section>
        <section className={styles.status}>
            <select value={isStatus} onChange={selectStatus}>
                <option value="Empty">Новый</option>
                <option value="Pending">В работе</option>
                <option value="Shipped">Отправлен</option>
                <option value="Delivered">Завершен</option>
                <option value="IncorrectData">Неверные данные</option>
                <option value="Canseled">Отменен</option>
            </select>
        </section>
        <section className={styles.data}>
            <span>
                <span className={styles.dataText}>Создан:</span>
                <span className={styles.dataData}>
                    <b>{dataToISO(order.createdAt)}</b>
                </span>
            </span>
            <span>
                <span className={styles.dataText}>Изменен:</span>
                <span className={styles.dataData}>
                    <b>{dataToISO(order.createdAt)}</b>
                </span>
            </span>
        </section>

        <section className={styles.contacts}>
            <span>{order.clientName}</span>
            <span><a href={`tel:${order.clientPhone}`} type='phone'>{order.clientPhone}</a></span>
        </section>
        <section className={styles.total}>
            <span>Итого: <b>{order.basket.basketPrice}</b>{shop.currency}</span>
        </section>
        <section className={styles.detail}>
            <Link href={`/order/${order.id}`}>Подробней</Link>
        </section>
        
    </section>
  )
}
