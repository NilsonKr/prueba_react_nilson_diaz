import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faRotateLeft,
  faShieldHalved,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'

import ItemQuantitySelector from './ItemQuantitySelector'

import type { Product } from '../types/product'

import '../styles/ItemDetail.css'

type ItemDetailProps = {
  product: Product
}

function ItemDetail({ product }: ItemDetailProps) {
  return (
    <article className="detail">
      <nav className="detail__breadcrumb">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <span className="detail__breadcrumb-cat">{product.category}</span>
        <FontAwesomeIcon icon={faChevronRight} />
        <span className="detail__breadcrumb-current">{product.title}</span>
      </nav>

      <div className="detail__body">
        <div className="detail__media">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail__info">
          <span className="detail__category">{product.category}</span>
          <h1 className="detail__name">{product.title}</h1>
          <div className="detail__price">${product.price.toFixed(2)}</div>
          <p className="detail__description">{product.description}</p>

          <ItemQuantitySelector />

          <ul className="detail__features">
            <li className="detail__feature">
              <span className="detail__feature-icon">
                <FontAwesomeIcon icon={faTruckFast} />
              </span>
              Envío gratis en 2 días
            </li>
            <li className="detail__feature">
              <span className="detail__feature-icon">
                <FontAwesomeIcon icon={faShieldHalved} />
              </span>
              Garantía de 2 años incluida
            </li>
            <li className="detail__feature">
              <span className="detail__feature-icon">
                <FontAwesomeIcon icon={faRotateLeft} />
              </span>
              30 días para devoluciones
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail
