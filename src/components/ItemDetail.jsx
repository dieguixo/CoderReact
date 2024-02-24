import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"

export const ItemDetail = ({ item }) => {
    const { cantidad, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }
    return (

        <div>
            <Link to={'/'}>
                <button>Cerrar</button>
            </Link>

            <img src={`../img/${producto.img}`} alt={`Imagen de ${producto.title}`} />
            <div>
                <h2>{producto.title}</h2>
                <p>Tamaño de bebida: {producto.size}</p>
                <p>Precio: ${producto.price}</p>
                <div>
                    <div>
                        <button onClick={decrement}>-</button>
                        <span>{cantidad}</span>
                        <button onClick={increment}>+</button>
                        <button onClick={reset}>Reset</button>
                        <button onClick={handleAddToCart}>Agregar al pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}