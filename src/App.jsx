import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { ItemDetailsContainer } from './components/ItemDetailsContainer.jsx'
import { NotFound } from './components/NotFound'


export const App = () => {
    return (
        <>
        <BrowserRouter>
            <NavBar className="Nav" />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:cid' element={<ItemListContainer />} />
                <Route path='/product/:pid' element={<ItemDetailsContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>   
        </>
        
    )
}