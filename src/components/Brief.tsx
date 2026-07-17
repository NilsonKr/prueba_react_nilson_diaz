import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import type { CartItem } from '../context/CartContext'

import '../styles/Brief.css'

type BriefProps = {
  items: CartItem[]
  onRemove: (productId: number) => void
}

function Brief({ items, onRemove }: BriefProps) {
  return (
    <ul className="brief">
      {items.map(({ product, quantity }) => (
        <li key={product.id} className="brief__item">
          <div className="brief__media">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="brief__info">
            <span className="brief__category">{product.category}</span>
            <h3 className="brief__name">{product.title}</h3>
            <button
              type="button"
              className="brief__remove"
              onClick={() => onRemove(product.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} /> Quitar
            </button>
          </div>
          <div className="brief__quantity">×{quantity}</div>
          <div className="brief__subtotal">
            ${(product.price * quantity).toFixed(2)}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Brief
