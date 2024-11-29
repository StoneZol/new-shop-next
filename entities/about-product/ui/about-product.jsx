import styles from './about-product.module.scss'
import About from './about'
import More from './more'
import NavigationInAboutProduct from './navigation-about-product';

export default function AboutProduct({data={}}) {
    return (
        <section className={styles.section}>
            <NavigationInAboutProduct/>
            <section className={styles.content}>
                <div id="about" className={styles.activeZone}>
                    <About data={data.about}/>
                </div>
                <div id="more" className={styles.hiddenZone}>
                    <More data={data.characteristic}/>
                </div>
            </section>
        </section>
    );
}
