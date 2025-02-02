import { LastSearch } from '@/shared/icons/last-search'
import Link from 'next/link'
import React from 'react'
import styles from './product-search-story.module.scss'

export default function ProductSearchStory({data, func, delfunc}) {
  return (
    <Link className={styles.story_link} href={`/search/${data}`} onClick={() => func(data)}>
        {data} <LastSearch/>
    </Link>
  )
}
