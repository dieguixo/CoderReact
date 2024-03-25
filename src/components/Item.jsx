import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'


export const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="itemLink">
              <Card style={{ width: '10rem' }} className="text-center">
                <Card.Img variant="top" src= {`${product.img}`} alt={`Imagen de ${product.title}`} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title>${product.price}</Card.Title>
                </Card.Body>
              </Card>
        </Link>
            )
          }