import OrderItem from '@/entities/order-item/ui/order-item'
import styles from './order-list.module.scss'

export default function OrderList({orders}) {
  return (
    <section className={styles.orderList}>
        {orders.map((order, index)=>(
            <OrderItem order={order} key={index}/>
        ))}
    </section>
  )
}
