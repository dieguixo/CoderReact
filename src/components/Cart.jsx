import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { ItemList } from "./ItemList"
import Button from 'react-bootstrap/Button';


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
                            <Button onClick={emptyCart} variant="success">Vaciar Carrito</Button>{' '}
                            <Button variant="success">
                                <Link className="cardList" to={'/'}>
                                    Continuar Comprando
                                </Link>
                            </Button>{' '}
                            <Button variant="success" className="cardList">
                                <Link className="cardList" to={'/checkout'}>
                                    Finalizar compra
                                </Link>
                            </Button>{' '}
                        </div>
                    </div>

            }

        </>
    )
}