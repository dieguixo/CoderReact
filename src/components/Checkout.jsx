import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 
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
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar pedido debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button>Volver al inicio</button>
                        </Link>

                    </>
                    :
                    <div>
                    <Form className="Form" onSubmit={handleSubmit}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su apellido" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="string" placeholder="Ingrese su telefono" />
                            <br/>
                        <Button variant="success" type="submit">
                            Finalizar
                        </Button>
                    </Form>
                    </div>
            )}