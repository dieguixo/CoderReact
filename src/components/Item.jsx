import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';


export const Item = ({ producto }) => {
    return (
        <Link to={`/product/${producto.id}`} className="itemLink">
              <Card style={{ width: '10rem' }} className="text-center">
                <Card.Img variant="top" src= {`${producto.img}`} alt={`Imagen de ${producto.title}`} />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Title>${producto.price}</Card.Title>
                </Card.Body>
              </Card>
        </Link>
            )
          }