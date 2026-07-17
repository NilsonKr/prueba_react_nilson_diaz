import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { useCart } from '../context/CartContext'

import type { Product } from '../types/product'

type AddItemButtonProps = {
  product: Product
  quantity: number
}

function AddItemButton({ product, quantity }: AddItemButtonProps) {
  const { addItem } = useCart()

  return (
    <Button className="btn-add" onClick={() => addItem(product, quantity)}>
      <FontAwesomeIcon icon={faBagShopping} />
      Agregar al carrito
    </Button>
  )
}

export default AddItemButton
