import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.categoria == cid)
                    setProductos (productosFiltrados)
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