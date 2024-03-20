import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./ItemList"
import { getProducts } from "../firebase/firebase.js"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        getProducts()
        .then(prods => {
            const productos = prods.filter(prod => prod.stock > 0)
            if (cid) {
                const productosFiltrados = productos.filter(prod => prod.categoria == cid)
                setProductos(productosFiltrados)
            } else {
                setProductos(prods)
            }

        })
        .catch((error) => console.log(error))
}, [cid])


    return (
        <div className="cardContainer">
            <ItemList productos={productos} className="cardList"/>
        </div>
    )
}