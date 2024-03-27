import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { ItemList } from "./ItemList"

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <button>
                            <Link to={'/'}>
                                Volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div>
                        {<ItemList products={carrito} plantilla="ItemCart" />}
                        <div>
                            <br />
                            <h5>Resumen de la compra: $ {totalPrice()}</h5>
                            <button onClick={emptyCart}>
                                Vaciar Carrito
                            </button>
                            <button>
                                <Link className="cardList" to={'/'}>
                                    Continuar Comprando
                                </Link>
                            </button>
                            <button>
                                <Link className="cardList" to={'/checkout'}>
                                    Finalizar compra
                                </Link>
                            </button>
                        </div>
                    </div>

            }

        </>
    )
}