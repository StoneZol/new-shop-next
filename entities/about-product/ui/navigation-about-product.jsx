'use client';

import {useState} from 'react';
import styles from './about-product.module.scss';
import { shopNavAboutProduct } from '@/shared/shop.config';

export default function NavigationInAboutProduct() {
    const [active, setActive] = useState('about');

    const handleTabClick = (tab) => {
        setActive(tab);
        document
            .getElementById('about')
            .className = tab === 'about'
                ? styles.active_zone
                : styles.hidden_zone;
        document
            .getElementById('more')
            .className = tab === 'more'
                ? styles.active_zone
                : styles.hidden_zone;
    };

    return (
        <div className={styles.navigation}>
                <h3
                    onClick={() => handleTabClick('about')}
                    className={active === 'about'
                        ? styles.active
                        : styles.not_active}>
                    {shopNavAboutProduct.description}
                </h3>
                <h3
                    onClick={() => handleTabClick('more')}
                    className={active === 'more'
                        ? styles.active
                        : styles.not_active}>
                    {shopNavAboutProduct.moreAbout}
                </h3>
        </div>
    );
}

