import './styles/App.css'
import {NavBar} from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'


export const App = () => {
    return (
        <>
            <NavBar className="Nav" />
            <ItemListContainer mensaje={"Bienvenido a Docta Coffee! Aquí puedes hacer tu pedido."} />
        </>
        
    )
}