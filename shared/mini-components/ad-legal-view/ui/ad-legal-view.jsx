'use client'

import styles from './ad-legal-view.module.scss'
import AdLegalIcon from '@/shared/icons/navigation/ad-legal-icon'
import Copy from '@/shared/icons/navigation/copy';
import copyAd from '../libs/copy-ad';
import useAdLegalView from '../hooks/use-ad-legal-view';
import CloseIcon from '@/shared/icons/close-icon';
import { shopAdLegalView } from '@/shared/shop-flags.config';
import { shopDefaultAriaLabels } from '@/shared/shop-module-translate';

function AdViewDialog({ data, onClose, refprop}) {
    return (
        <dialog ref={refprop} className={styles.dialog}>
            <ul className={styles.ul}>
                <h2>Сведения о рекламе</h2>
                <li onClick={() => copyAd(data.legalPerson)}>{data.legalPerson} <Copy/></li>
                <li onClick={() => copyAd(data.inn)}>ИНН {data.inn} <Copy/></li>
                <li onClick={() => copyAd(data.erid)}>ЕРИД {data.erid} <Copy/></li>
                <button aria-label={shopDefaultAriaLabels.close}  className={styles.button_close} onClick={onClose}><CloseIcon/></button>
            </ul>
        </dialog>
    );
}

export default function AdLegalView({ data = null }) {
    if (!shopAdLegalView.available) return null
    if (!data) return null;

    const {isOpen, dialogRef, clickDialog} = useAdLegalView()

    return (
        <>
            <button className={styles.button} onClick={clickDialog}>
                Реклама <AdLegalIcon />
            </button>
            {isOpen && <AdViewDialog ref={dialogRef} data={data} onClose={clickDialog} />}
        </>
    );
}

