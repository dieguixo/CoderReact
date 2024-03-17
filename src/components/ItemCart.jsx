import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.jsx'

export const ItemCart = ({ producto }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(producto.quantity, producto.stock, 1)
    return (
        <div>
            <div>
                <img src={`${producto.img}`} alt={`Imagen de ${producto.title}`} />
            </div>
            <div>
                <h3>{producto.title} {producto.size}</h3>
            </div>
            <div>
                <button onClick={async () => {
                    updateItem(producto.id, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={() => {
                    updateItem(producto.id, count + 1)
                    increment()
                }}>
                    +
                </button>
            </div>
            <div>
                <p>Subtotal: ${producto.price * count}</p>
            </div>
            <div>
                <button onClick={() => removeItem(producto.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}