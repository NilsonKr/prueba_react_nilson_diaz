import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import type { Product } from '../types/product'

import '../styles/Item.css'

interface ItemProps {
  product: Product
}

function Item({ product }: ItemProps) {
  return (
    <Card className="product-card h-100">
      <div className="product-card__media">
        <img src={product.image} alt={product.title} />
      </div>
      <Card.Body className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.title}</h3>
        <p className="product-card__blurb">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <Link to={`/item/${product.id}`} className="btn-vermas">
            Ver más <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item
