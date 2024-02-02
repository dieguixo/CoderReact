import { useState } from "react"

export const ItemListContainer = ({mensaje}) => {
    const [cantidad, setCantidad] = useState (0)
    return (
        <div>
            <p className="mensaje">{mensaje}</p>
        </div>
    )
}

