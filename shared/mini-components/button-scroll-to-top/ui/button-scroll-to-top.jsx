'use client'
import React, { useEffect, useState } from 'react';
import styles from './button-scroll-to-top.module.scss';
import IconScrollUp from '@/shared/icons/navigation/scroll-up';
import scrollToTop from '@/shared/public-func/scroll-to-top';
import { shopButtonScrollUpAreaLabel } from '@/shared/shop.сonfig';

export default function ButtonScrollTop({limit = 300}) {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > limit) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [visibility]);

  return (
    <button
      className={`${styles.button} ${!visibility ? styles.hidden : ''}`}
      onClick={scrollToTop}
      aria-label={shopButtonScrollUpAreaLabel}>
      <IconScrollUp />
    </button>
  );
}

