import styles from './about-product.module.scss'
import About from './about'
import More from './more'
import NavigationInAboutProduct from './navigation-about-product';

export default function AboutProduct({data={}, category=''}) {
    return (
        <div className={styles.block}>
            <NavigationInAboutProduct/>
            <div className={styles.content}>
                <div id="about" className={styles.active_zone}>
                    <About data={data.about}/>
                </div>
                <div id="more" className={styles.hidden_zone}>
                    <More data={data.characterisitcs} category={category}/>
                </div>
            </div>
        </div>
    );
}
