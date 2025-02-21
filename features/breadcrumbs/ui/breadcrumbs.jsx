'use client'
import React from 'react'
import styles from './breadcrumbs.module.scss'
import Link from 'next/link'
import { shopBreadcrumbs} from '@/shared/shop.config'
import { IconShareBreadcrumbs } from '@/shared/icons/breadcrumbs/share'
import { IconCopyBreadcrumbs } from '@/shared/icons/breadcrumbs/copy'
import { IconHomeBreadcrumbs } from '@/shared/icons/breadcrumbs/home'
import { IconCategoryBreadcrumbs } from '@/shared/icons/breadcrumbs/category'
import { IconPointBreadcrumbs } from '@/shared/icons/breadcrumbs/point'
import copyBreadcrumbs from '../libs/copyBreadcrumbs'
import useFullUrl from '../hooks/use-breafcrumbs'

export default function Breadcrumbs({category, sku = ''}) {

  const fullUrl = useFullUrl()

  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.left_side}>
        <Link className={styles.crumbs_buttons} href={'/'}><IconHomeBreadcrumbs/>{shopBreadcrumbs.homePage}</Link>
        <IconPointBreadcrumbs/>
        <Link className={styles.crumbs_buttons} href={`/category/${category}`}><IconCategoryBreadcrumbs/>{category}</Link>
        <IconPointBreadcrumbs/>
        <button className={styles.crumbs_buttons} onClick={() => copyBreadcrumbs(sku, shopBreadcrumbs.skuCopy)}><IconCopyBreadcrumbs/>{shopBreadcrumbs.skuName}{sku}</button>
      </div>
      <div className={styles.right_side}>
        <button className={styles.crumbs_buttons} onClick = {()=> copyBreadcrumbs(fullUrl, shopBreadcrumbs.linkCopy)}><IconShareBreadcrumbs/> Поделиться</button>
      </div>
    </div>
  )
}