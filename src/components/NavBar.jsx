import { Logo } from '../components/Logo'
import { Categorias } from '../components/Categorias'
import { CartWidget } from '../components/CartWidget'

export const NavBar = () => {
    return (
        <div className='nav'>
            <Logo Logo={"Docta Coffee"}/>
            <Categorias NombreCateg={"Bebidas Calientes"}/>
            <Categorias NombreCateg={"Bebidas Frias"}/>
            <Categorias NombreCateg={"Bakery"}/> 
            <CartWidget CartWidget={"Carrito"}/>
        </div>
    )
}