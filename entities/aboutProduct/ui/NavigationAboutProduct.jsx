'use client';

import {useState} from 'react';
import styles from './aboutProduct.module.scss';

export default function NavigationInAboutProduct() {
    const [active, setActive] = useState('about');

    const handleTabClick = (tab) => {
        setActive(tab);
        document
            .getElementById('about')
            .className = tab === 'about'
                ? styles.activeZone
                : styles.hiddenZone;
        document
            .getElementById('more')
            .className = tab === 'more'
                ? styles.activeZone
                : styles.hiddenZone;
    };

    return (
        <div className={styles.navigation}>
            <h3
                onClick={() => handleTabClick('about')}
                className={active === 'about'
                    ? styles.active
                    : styles.notActive}>
                Описание
            </h3>
            <h3
                onClick={() => handleTabClick('more')}
                className={active === 'more'
                    ? styles.active
                    : styles.notActive}>
                Подробнее
            </h3>
        </div>
    );
}

