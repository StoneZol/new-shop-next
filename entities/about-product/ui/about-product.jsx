import styles from './about-product.module.scss'
import About from './about/ui/about';
import More from './more/ui/more'

export default function AboutProduct({data={}, category=''}) {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.active_zone}>
                    <About data={data.about}/>
                </div>
                <div className={styles.active_zone}>
                    <More data={data.characterisitcs} category={category}/>
                </div>
            </div>
        </div>
    );
}
