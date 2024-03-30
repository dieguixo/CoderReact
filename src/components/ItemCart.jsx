import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.jsx'

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, sumar, restar } = useCounter(product.quantity, product.stock, 1)
    return (
        <div className="ItemCart">
            <div>
                <img className="CartImage" src={`${product.img}`} alt={`Imagen de ${product.title}`} />
            </div>
            <div>
                <h5>{product.title}</h5>
            </div>
            <div>
                <button className="CartButton" onClick={async () => {
                    updateItem(product.id, count - 1)
                    restar()
                }}>-</button>
                <span>{count}</span>
                <button className="CartButton" onClick={async () => {
                    updateItem(product.id, count + 1)
                    sumar()
                }}>+</button>
            </div>
            <div>
                <h8>Subtotal: ${product.price * count}</h8>
            </div>
            <div>
                <button className="CartButton" onClick={() => removeItem(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}