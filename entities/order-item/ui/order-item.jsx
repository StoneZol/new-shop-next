'use client'
import styles from './order-item.module.scss';
import Link from 'next/link';
import { shop, shopOrderItemsText, shopStatusOptions } from '@/shared/shop.сonfig';
import { useEffect, useState } from 'react';
import dataToISO from '@/shared/public-func/data-to-iso';

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
        <section className={styles.order_id}>
            <h2>№{order.id}</h2>
        </section>
        <section className={styles.status}>
            <select value={isStatus} onChange={selectStatus}>
                {/* <option value="Empty">Новый</option>
                <option value="Pending">В работе</option>
                <option value="Shipped">Отправлен</option>
                <option value="Delivered">Завершен</option>
                <option value="IncorrectData">Неверные данные</option>
                <option value="Canseled">Отменен</option> */}
                {Object.entries(shopStatusOptions).map(([value, label])=> (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
        </section>
        <section className={styles.data}>
            <span>
                <span className={styles.data_text}>{shopOrderItemsText.creatred}:</span>
                <span className={styles.data_data}>
                    <b>{dataToISO(order.createdAt)}</b>
                </span>
            </span>
            <span>
                <span className={styles.data_text}>{shopOrderItemsText.updated}:</span>
                <span className={styles.data_data}>
                    <b>{dataToISO(order.createdAt)}</b>
                </span>
            </span>
        </section>

        <section className={styles.contacts}>
            <span>{order.clientName}</span>
            <span><a href={`tel:${order.clientPhone}`} type='phone'>{order.clientPhone}</a></span>
        </section>
        <section className={styles.total}>
            <span>{shopOrderItemsText.summary}: <b>{order.basket.basketPrice}</b>{shop.currency}</span>
        </section>
        <section className={styles.detail}>
            <Link href={`/order/${order.id}`}>{shopOrderItemsText.moreAbout}</Link>
        </section>
        
    </section>
  )
}
