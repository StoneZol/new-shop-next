'use client'
import React from 'react'
import styles from './breadcrumbs.module.scss'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs({category, sku, }) {
    const path = usePathname()
  return (
    <div className={styles.breadcrumbs}>{path}</div>
  )
}
