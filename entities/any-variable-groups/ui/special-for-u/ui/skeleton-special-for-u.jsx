import SkeletonProductCard from "@/entities/product-card/ui/skeleton-product-card"
import VariableGroupsRender from "@/shared/variable-groups-render/ui/variable-groubs-render"
import styles from './special-for-u.module.scss'

const texts ={
    h3: 'Специально для вас',
    link: "Еще"
}

const links = '#'

export default function SkeletonSpecialForU({data}) {
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