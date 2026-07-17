import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import AddItemButton from './AddItemButton'

import type { Product } from '../types/product'

type ItemQuantitySelectorProps = {
  product: Product
}

function ItemQuantitySelector({ product }: ItemQuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const decrease = () => setQuantity((current) => Math.max(1, current - 1))
  const increase = () => setQuantity((current) => current + 1)

  return (
    <div className="quantity-row">
      <div className="quantity-stepper">
        <button type="button" onClick={decrease} aria-label="Disminuir cantidad">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="quantity-stepper__value">{quantity}</span>
        <button type="button" onClick={increase} aria-label="Aumentar cantidad">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <AddItemButton product={product} quantity={quantity} />
    </div>
  )
}

export default ItemQuantitySelector
