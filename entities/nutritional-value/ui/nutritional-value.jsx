import { nutritionalText } from '@/shared/shop.сonfig'
import styles from './nutritional-value.module.scss'

export default function NutritionalValue({values}) {
    // if (Object.keys(values).length === 0) {
    //     return  null
    // }

    if(values !==null && values !==undefined){
    return (
        <section className={styles.section}>
            <h3>{nutritionalText.head}</h3>
            <div className={styles.nutritionalBox}>
                <div>
                    <span className={styles.value}>{values.protein}</span><br/>
                    <span className={styles.text}>{nutritionalText.protein}</span>
                </div>
                <div>
                    <span className={styles.value}>{values.fat}</span><br/>
                    <span className={styles.text}>{nutritionalText.fat}</span>
                </div>
                <div>
                    <span className={styles.value}>{values.carbohydrate}</span><br/>
                    <span className={styles.text}>{nutritionalText.carbohydrate}</span>
                </div>
                <div>
                    <span className={styles.value}>{values.calories}</span><br/>
                    <span className={styles.text}>{nutritionalText.calories}</span> 
                </div>
            </div>
        </section>
    )
} else return null
}
