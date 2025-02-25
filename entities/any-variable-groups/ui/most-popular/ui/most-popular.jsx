import React from 'react'
import VariableGroupsRender from '@/shared/variable-groups-render/ui/variable-groubs-render'
import styles from './most-popular.module.scss'
import ProductCard from '@/entities/product-card/ui/product-card'

const texts ={
    h3: 'Популярные товары',
    link: "Смотерть все"
}

const links = '#'


export default function MostPopular({data}) {
    return (
        <VariableGroupsRender
            data={data}
            texts={texts}
            links={links}
            anyGroupStyle={styles.correct_height}
            listClass={styles.list}
            render={(item) => <ProductCard key={item.id}product={item}/>
            }
        />
    )
}
