import {useState} from "react"

export const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)

        }
    }

    const handleaddtocart = () => {
        console.log("Producto agregado al carrito")
    }

    return (
        <div className="itemcount">
            <h1>Cantidad: </h1>
            <button className="boton" onClick={sumar}>{"+"}</button>
            <h2>{(counter)}</h2>
            <button className="boton" onClick={restar}>{"-"}</button>
            <button className="boton" onClick={handleaddtocart}>{"Agregar"}</button>


        </div>
    )
}