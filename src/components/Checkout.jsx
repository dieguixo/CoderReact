import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"
 
export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()//Devuelve la locacion actual de mi componente (ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML a un objeto iterator
        const cliente = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple

        //Modificar stock

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) { //Si existe stock suficinete para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    (`Lo siento, ${prod.title} está sin disponibilidad en este momento.`, {
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el producto del carrito al tener stock suficiente
                }

            })

        })
        //Generar la orden de Compra
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                (`🛒 Muchas gracias por su pedido, su número de orden es: ${ordenCompra.id} por un total de $${totalPrice()}. En cuanto esté listo lo llamaremos por su nombre`, {
                })
                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                (`Error al generar el pedido: ${e}`, {
                    
                })
            })

    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar pedido debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button>Volver al inicio</button>
                        </Link>

                    </>
                    :
                    <div>
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <label>Nombre: </label>
                            <input type="text" name="nombre" />
                            <label>Apellido: </label>
                            <input type="text" name="apellido" />
                            <label>Email: </label>
                            <input type="email" name="email" />
                            <label>Telefono: </label>
                            <input name="telefono" />
                            <button>Finalizar</button>
                        </form>
                    </div>
            }
        </>

    )
}