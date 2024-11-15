import styles from './aboutProduct.module.scss'
import About from './About'
import More from './More'
import NavigationInAboutProduct from './NavigationAboutProduct';

export default function AboutProduct({data}) {
    return (
        <section className={styles.section}>
            <NavigationInAboutProduct/>
            <section className={styles.content}>
                <div id="about" className={styles.activeZone}>
                    <About data=''/>
                </div>
                <div id="more" className={styles.hiddenZone}>
                    <More data=''/>
                </div>
            </section>
        </section>
    );
}
