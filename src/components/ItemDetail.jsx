import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"

export const ItemDetail = ({ item }) => {
    const { count, sumar, restar, borrar } = useCounter(0, item.stock, 1)

    const handleAddToCart = () => {
        console.log(`Estoy pidiendo ${count} ${item.title}`)
        console.log("Producto agregado al pedido")
    }
    return (

        <div className="cardDetail">

            <img src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
            <div className="item">
                <p>{item.title}</p>
                <p>Precio: ${item.price}</p>
                <div>
                    <div>
                        <button className="boton" onClick={restar}>
                            -
                        </button>
                        <span>{count}</span>
                        <button className="boton" onClick={sumar}>
                            +
                        </button>
                        <button className="boton" onClick={borrar}>
                            Borrar
                        </button>
                        <button className="boton" onClick={handleAddToCart}>
                            Agregar al pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>



    )
}