import OrderItem from '@/entities/orderItem/ui/OrderItem'
import styles from './orderList.module.scss'

export default function OrderList({orders}) {
  return (
    <section className={styles.orderList}>
        {orders.map((order, index)=>(
            <OrderItem order={order} key={index}/>
        ))}
    </section>
  )
}
