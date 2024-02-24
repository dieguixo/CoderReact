import { Link } from "react-router-dom"

export const Item = ({ producto }) => {
    return (

        <Link to={`/product/${producto.id}`}>
            <div>
                <img src={`../img/${producto.img}`} alt={`Imagen de ${producto.title}`} className="picture"/>
                <h2>{producto.title} {producto.description}</h2>
                <p>Tamaño bebida: {producto.size}</p>
                <p>Precio: ${producto.price}</p>
            </div >
        </Link>


    )
}