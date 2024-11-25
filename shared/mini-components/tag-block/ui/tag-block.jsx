
import styles from './tag-block.module.scss'

export default function TagBlock({children}) {
  return (
    <div className={styles.tagBlock}>
        {children}
    </div>
  )
}
