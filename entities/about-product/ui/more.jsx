import styles from './more.module.scss'

export default function More({data = []}) {
    return (
        <div className={styles.more}>
            {
                data.map((data, index)=>(
                    <div className={styles.moreString} key={index}>
                        <div className={styles.type}>{data.name}</div>
                        <div className={styles.property}>{data.value}</div>
                    </div>
                ))
            }
        </div>

        
    )
}