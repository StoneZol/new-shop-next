'use client'
import styles from './button-scroll-to-top.module.scss';
import IconScrollUp from '@/shared/icons/navigation/scroll-up';
import scrollToTop from '@/shared/public-func/scroll-to-top';
import { shopButtonScrollUpAreaLabel } from '@/shared/shop.config';
import useButtonScrollToTop from '../hooks/use-button-scroll-to-top';

export default function ButtonScrollTop({limit = 300}) {

  const {visibility} = useButtonScrollToTop(limit)

  return (
    <button
      className={`${styles.button} ${!visibility ? styles.hidden : ''}`}
      onClick={scrollToTop}
      aria-label={shopButtonScrollUpAreaLabel}>
      <IconScrollUp />
    </button>
  );
}

