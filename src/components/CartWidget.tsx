import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  const totalQuantity = 3

  return (
    <Link to="/checkout" className="cart-widget" aria-label="Ver carrito">
      <FontAwesomeIcon icon={faBagShopping} />
      {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
    </Link>
  )
}

export default CartWidget
