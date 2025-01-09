'use client'
import React from 'react'
import styles from './breadcrumbs.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { shopBreadcrumbs, shopUrl } from '@/shared/shop.сonfig'
import { IconShareBreadcrumbs } from '@/shared/icons/breadcrumbs/share'
import { IconCopyBreadcrumbs } from '@/shared/icons/breadcrumbs/copy'
import { IconHomeBreadcrumbs } from '@/shared/icons/breadcrumbs/home'
import { IconCategoryBreadcrumbs } from '@/shared/icons/breadcrumbs/category'
import { IconPointBreadcrumbs } from '@/shared/icons/breadcrumbs/point'
import copy from '../api/copy'
import useFullUrl from '../api/useFullUrl'

export default function Breadcrumbs({category, sku = ''}) {

  const fullUrl = useFullUrl()

  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.left_side}>
        <span><IconHomeBreadcrumbs/><Link href={'/'}>{shopBreadcrumbs.homePage}</Link></span>
        <IconPointBreadcrumbs/>
        <span><IconCategoryBreadcrumbs/><Link href={`/category/${category}`}>{category}</Link></span>
        <IconPointBreadcrumbs/>
        <span onClick={() => copy(sku, shopBreadcrumbs.skuCopy)}><IconCopyBreadcrumbs/>{shopBreadcrumbs.skuName}{sku}</span>
      </div>
      <div className={styles.right_side}>
        <span onClick = {()=> copy(fullUrl, shopBreadcrumbs.linkCopy)}><IconShareBreadcrumbs/> Поделиться</span>
      </div>
    </div>
  )
}
