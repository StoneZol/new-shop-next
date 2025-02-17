import {useEffect, useState} from 'react'

export default function useBasketCount(basket) {
    const [basketCount, setBasketCount] = useState(null)
    useEffect(() => {
        const totalCount = basket.reduce((acc, item) => acc + item.totalPrice * item.count, 0)
        setBasketCount(totalCount)
    }, [basket])
    return {basketCount}
}
