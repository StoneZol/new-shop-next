import React from "react"
import ProductCard from "@/entities/product-card/ui/product-card"
import VariableGroupsRender from "@/shared/variable-groups-render/ui/variable-groubs-render"
import styles from './similar-goods.module.scss'

const texts ={
    h3: 'Похожие товары',
    link: "Еще"
}

const links = '#'

interface idInclude{
    id: string
}

interface SimilarGoodsProps<T extends idInclude>{
    data: T[],
}

export default function SimilarGoods<T extends idInclude>({data}:SimilarGoodsProps<T>) {
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