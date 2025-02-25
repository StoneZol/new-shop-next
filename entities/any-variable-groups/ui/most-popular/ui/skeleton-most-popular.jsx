import SkeletonProductCard from "@/entities/product-card/ui/skeleton-product-card"
import VariableGroupsRender from "@/shared/variable-groups-render/ui/variable-groubs-render"
import styles from './most-popular.module.scss'
const texts ={
    h3: 'Популярные товары',
    link: "Больше"
}

const links = '#'

export default function SkeletonMostPopular({data}) {
    return (
        <VariableGroupsRender
            data={data}
            texts={texts}
            links={links}
            anyGroupStyle={styles.correct_height}
            listClass={styles.list}
            render={(_, index) => <SkeletonProductCard key={index}/>
            }
        />
    )
}