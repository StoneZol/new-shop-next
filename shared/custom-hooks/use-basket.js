import { useState, useEffect,useRef } from "react";
import { useDispatch } from "react-redux";
import { addToBasket, handleInBasket, removeFromBasket} from '@/store-redux/slices/basket-slice'

export const useBasket = (product) =>{

    const [isZero, setIsZero] = useState(product.count===0)
    const [count, setCount] = useState(product.count);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const addBasket = () => {
        const newCount = count + 1;
        setCount(newCount);
        dispatch(addToBasket({...product , count: newCount}));
    };

    const removeBasket = () => {
        if (count > 0 ){
            const newCount = count - 1;
            setCount(newCount);
            dispatch(removeFromBasket({...product,count: newCount}));
        }
      };

    const handleInputBasket = (e) => {
        let newCount = e.target.value === '' ? 0 : Math.min(Math.max(parseInt(e.target.value, 10), 0), 999);
        if (isNaN(newCount)) {
            newCount=0;
        }
        setCount(newCount);
        dispatch(handleInBasket({...product, count: newCount}))
      };

      
    useEffect(() => {
        setIsZero(count === 0);

      }, [count, isZero]);
      return{
        count,setCount,isZero, inputRef,addBasket, removeBasket,handleInputBasket
      }
}