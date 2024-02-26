import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"

export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(0, item.stock, 1)

    const handleAddToCart = () => {
        console.log(`Estoy pidiendo ${count} ${item.title}`)
        console.log("Producto agregado al pedido")
    }
    return (

        <div>
            <Link to={'/'}>
                <button></button>
            </Link>

            <img src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
            <div>
                <h2>{item.title}</h2>
                <p>Precio: ${item.price}</p>
                <div>
                    <div>
                        <button onClick={decrement}>
                            -
                        </button>
                        <span>{count}</span>
                        <button onClick={increment}>
                            +
                        </button>
                        <button onClick={reset}>
                            Reset
                        </button>
                        <button onClick={handleAddToCart}>
                            Agregar al pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}