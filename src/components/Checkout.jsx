import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
 
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
                    toast.info(`Lo siento, nos hemos quedado sin ${prod.title} .`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el producto del carrito al tener stock suficiente
                }

            })

        })
        //Generar la orden de Compra
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`Muchas gracias por tu pedido. En breve te llamaremos para que puedas retirarlo del mostrador. Tu código de pedido es el: ${ordenCompra.id} por un total de $${totalPrice()}.`, {
                    position: "top-center",
                    autoClose: false,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark"
                })
                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Hubo un error al generar el pedido: ${e}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
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