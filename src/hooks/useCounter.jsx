import { useState } from "react";

export const useCounter = (minValue = 0, maxValue = 1, step = 1) => {
    const [count, setCount] = useState(minValue)

    const sumar = () => {
        if (count + step <= maxValue)
            setCount(count + step)
    }

    const restar = () => {
        if (count - step >= minValue) {
            setCount(count - step)
        }
    }

    const borrar = () => {
        setCount(minValue)
    }

    return { count, sumar, restar, borrar }

}