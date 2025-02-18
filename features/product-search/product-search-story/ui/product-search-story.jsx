import {LastSearch} from '@/shared/icons/last-search'
import Link from 'next/link'
import styles from './product-search-story.module.scss'
import {DeleteStoryLine} from '@/shared/icons/delete-story-line'
import {shopSearchText} from '@/shared/shop.config'

function UserStoryLine({content, index, delfunc, func}) {
    return (
        <div className={styles.story_box} key={index}>
            <Link
                className={styles.story_link}
                href={`/search/${content}`}
                onClick={() => func(content)}>
                <LastSearch/>
                <span>{content}</span>
            </Link>
            <button className={styles.delete_story_link} onClick={() => delfunc(content)}>
                <DeleteStoryLine/>
            </button>
        </div>
    )
}

export default function ProductSearchStory({data, func, delfunc, delAllfunc}) {
    return (
        <div className={styles.content}>
            <div className={styles.story_head}>
                <h3>{shopSearchText.history}</h3>
                <button className={styles.delete_all_stories} 
                        onClick={() => delAllfunc()}>
                    {shopSearchText.historyClean}
                </button>
            </div>
              {
                data.map((content, index) => (
                    <UserStoryLine content={content} index={index} delfunc={delfunc} func={func}/>
                ))
              }
        </div>
    )
}