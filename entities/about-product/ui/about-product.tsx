import styles from './about-product.module.scss'
import About from './about/ui/about'
import More from './more/ui/more'
import NutritionalValue from './nutritional-value/ui/nutritional-value'

export interface AboutProductProps {
    data: {
        about: string;
        characterisitcs: { name: string; value: string }[];
    };
    category: string;
    nutritional: {
        protein: string;
        fat: string;
        carbohydrate: string;
        calories: string;
    };
}

export default function AboutProduct({data, category, nutritional}: AboutProductProps) {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                    <About data={data.about}/>
                    <More data={data.characterisitcs} category={category}/>
                    <NutritionalValue values={nutritional}/>
            </div>
        </div>
    );
}
