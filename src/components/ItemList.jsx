import { Item } from "./Item"

export const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(prod => <Item producto={prod} />)}
        </>

    )
}