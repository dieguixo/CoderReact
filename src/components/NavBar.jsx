import { Logo } from '../components/Logo'
import { Categorias } from '../components/Categorias'
import { CartWidget } from '../components/CartWidget'
import {ItemListContainer} from '../components/ItemListContainer'

export const NavBar = () => {
    return (
        <div className='nav'>
            <Logo />
            <Categorias NombreCateg={"Bebidas Calientes"}/>
            <Categorias NombreCateg={"Bebidas Frias"}/>
            <Categorias NombreCateg={"Bakery"}/> 
            <CartWidget CartWidget={"Carrito"}/>
            <ItemListContainer mensaje={"Hola, prepara tu pedido!"} />
        </div>
    )
}