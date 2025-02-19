import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function usePointBasketLength() {

    const basket = useSelector(state => state.basket.basket)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return {basket, isClient}
}
