import { useBasket } from "@/shared/custom-hooks/use-basket";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useBuyPageBlock(product) {

    const basketProps = useBasket(product);

    const basket = useSelector(state => state.basket.basket)

    useEffect(() => {
        const current = basket.find((item) => item.id === product.id)
        if (current) {
            basketProps.setCount(current.count)
            return
        }
        basketProps.setCount(0);
    }, [basket, product.id])

    return basketProps
}
