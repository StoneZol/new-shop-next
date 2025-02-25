import CategoryCard from '@/entities/category-card/ui/category-card'
import VariableGroupsRender from '@/shared/variable-groups-render/ui/variable-groubs-render'
import styles from './popular-categories.module.scss'

const texts ={
    h3: 'Топ категорий',
    link: "Все"
}

const links = '/categories'

export default function PopularCategories({data}) {
    return (
        <VariableGroupsRender
            data={data}
            texts={texts}
            links={links}
            anyGroupStyle={styles.correct_height}
            listClass={styles.list}
            render={(item, index) => <CategoryCard key={index} name={item.name} imageUrl={item.imageUrl}/>
            }
        />
    )
}
