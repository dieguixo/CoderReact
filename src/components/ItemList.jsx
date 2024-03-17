import { Item } from "./Item"
import { ItemCart } from "./ItemCart"

export const ItemList = ({ productos, plantilla }) => {
    return (
        <>
            {
                plantilla === 'Item'
                    ?
                    productos.map(prod => <Item key={prod.id} producto={prod} />)
                    :
                    productos.map(prod => <ItemCart key={prod.id} producto={prod} />)

            }
        </>

    )
}