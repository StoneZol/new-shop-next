import { useEffect, useState } from 'react';

export default function useButtonScrollToTop(limit){
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
  return {
    visibility
  }
}
