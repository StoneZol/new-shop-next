import styles from './more.module.scss'

export default function More({data = []}) {
    return (
        <div className={styles.more}>
            <div className={styles.moreString}>
                <div className={styles.type}>Тип</div>
                <div className={styles.property}>Печенье</div>
            </div>
            <div className={styles.moreString}>
                <div className={styles.type}>Тип</div>
                <div className={styles.property}>Печенье</div>
            </div>
            <div className={styles.moreString}>
                <div className={styles.type}>Разновидность печенья</div>
                <div className={styles.property}>Песочное</div>
            </div>
            <div className={styles.moreString}>
                <div className={styles.type}>Тип</div>
                <div className={styles.property}>Печенье</div>
            </div>
            <div className={styles.moreString}>
                <div className={styles.type}>Тип</div>
                <div className={styles.property}>Печенье</div>
            </div>

        </div>

        
    )
}