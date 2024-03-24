import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.jsx'

export const ItemCart = ({ producto }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, sumar, restar } = useCounter(producto.quantity, producto.stock, 1)
    return (
        <div>
            <div>
                <img src={`${producto.img}`} alt={`Imagen de ${producto.title}`} />
            </div>
            <div>
                <h4>{producto.title}</h4> <h5>{producto.size}</h5>
            </div>
            <div>
                <button onClick={async () => {
                    updateItem(producto.id, count - 1)
                    restar()
                }}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={() => {
                    updateItem(producto.id, count + 1)
                    sumar()
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