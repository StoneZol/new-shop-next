import SwiperProductCard from '@/shared/swiperProductCard/ui/SwiperProductCard'
import React from 'react'

export default function ProductPage({params}) {
  const {id} = params;
  return (
    <div> <SwiperProductCard width={360} height={360}/></div>
  )
}
