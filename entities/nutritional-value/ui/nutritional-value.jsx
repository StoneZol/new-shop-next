import styles from './nutritional-value.module.scss'

export default function NutritionalValue({values}) {
    return (
        <section className={styles.section}>
            <h3>Пищевая ценннось продукта на 100г:</h3>
            <div className={styles.nutritionalBox}>
                <div>
                    <span className={styles.value}>{values.protein}</span><br/>
                    <span className={styles.text}>белки</span>
                </div>
                <div>
                    <span className={styles.value}>{values.fat}</span><br/>
                    <span className={styles.text}>жиры</span>
                </div>
                <div>
                    <span className={styles.value}>{values.carbohydrate}</span><br/>
                    <span className={styles.text}>углеводы</span>
                </div>
                <div>
                    <span className={styles.value}>{values.calories}</span><br/>
                    <span className={styles.text}>ккал</span>
                </div>
            </div>
        </section>
    )
}
