import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCounter } from "../hooks/useCounter"
import { useCarritoContext } from "../context/CartContext"

export const ItemDetail = ({ item }) => {
  const { addItem } = useCarritoContext()
  const { count, sumar, restar, borrar } = useCounter(1, item.stock, 1)
  
  const handleAddToCart = () => {
    addItem(item, count)
    }
    return (
      <>

          <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" className='DetailImage' src={`${item.img}`} alt={`Imagen de ${item.title}`} />
          <Card.Body className="text-center">
            <Card.Title>{item.title}</Card.Title>
            <Card.Title>Precio: ${item.price}</Card.Title>
            <Card.Text>
              {item.descripcion}
            </Card.Text>
            <div className='buttonDetail'>
              <Button variant="success" size="sm" onClick={restar}>- </Button>
              <span>  {count}  </span>
              <Button variant="success" size="sm" onClick={sumar}>+</Button>
              <span> </span>
              <Button variant="success" size="sm" onClick={borrar}>Borrar</Button>
              <span> </span>
              <Button variant="success" size="sm" onClick={handleAddToCart}>Agregar</Button>
                <Link to={'/'}>
                  <Button variant="success" size="sm" className='Cerrar'>Cerrar</Button>
                </Link>
            </div>

          </Card.Body>
        </Card>
      </>
    )
  }