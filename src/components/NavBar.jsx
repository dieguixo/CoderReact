import { Logo } from '../components/Logo'
import { Categorias } from '../components/Categorias'
import { CartWidget } from '../components/CartWidget'
import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <div className='nav'>
            <Link to={'/'}>
                <Logo Logo={"Docta Coffee"}/>
            </Link>
            
            <Link to={'/categoria/calientes'}>
                <Categorias NombreCateg={"Bebidas Calientes"}/>
            </Link>
            <Link to={'/categoria/frias'}>
                <Categorias NombreCateg={"Bebidas Frias"}/>
            </Link>
                <CartWidget CartWidget />

        </div>
    )
}
