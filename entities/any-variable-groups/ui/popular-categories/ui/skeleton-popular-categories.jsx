import VariableGroupsRender from '@/shared/variable-groups-render/ui/variable-groubs-render'
import styles from './popular-categories.module.scss'
import SkeletonCategoryCard from '@/entities/category-card/ui/skeleton-category-card'

const texts ={
    h3: 'Топ категорий',
    link: "Все"
}

const links = '/categories'

export default function SkeletonPopularCategories({data}) {
    return (
        <VariableGroupsRender
            data={data}
            texts={texts}
            links={links}
            anyGroupStyle={styles.correct_height}
            listClass={styles.list}
            render={(_, index) => <SkeletonCategoryCard key={index}/>
            }
        />
    )
}