import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCounter } from "../hooks/useCounter"

export const ItemDetail = ({ item }) => {
    const { count, sumar, restar, borrar } = useCounter(0, item.stock, 1)

    const handleAddToCart = () => {
        console.log(`Estoy pidiendo ${count} ${item.title}`)
        console.log("Producto agregado al pedido")
    }
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className='' src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>Precio: ${item.price}</Card.Title>
          <Card.Text>
            Esta es una descripción del producto
          </Card.Text>
          <div className='buttonDetail'>
            <Button variant="success" size="sm" onClick={restar}>-</Button>
            <span>  {count}  </span>
            <Button variant="success" size="sm" onClick={sumar}>+</Button>
            <span> </span>
            <Button variant="success" size="sm" onClick={borrar}>Borrar</Button>
            <span> </span>
            <Button variant="success" size="sm" onClick={handleAddToCart}>Agregar</Button>
          </div>
        </Card.Body>
      </Card>
    )
  }

/*
<div className="cardDetail">

<img src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
<div className="item">
    <p>{item.title}</p>
    <p>Precio: ${item.price}</p>
    <div>
        <div>
            <button className="boton" onClick={restar}>
                -
            </button>
            <span>{count}</span>
            <button className="boton" onClick={sumar}>
                +
            </button>
            <button className="boton" onClick={borrar}>
                Borrar
            </button>
            <button className="boton" onClick={handleAddToCart}>
                Agregar al pedido
            </button>
        </div>
    </div>
</div>
</div>}*/