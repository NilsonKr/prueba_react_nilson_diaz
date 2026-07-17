import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faBagShopping,
  faCircleCheck,
  faLock,
} from '@fortawesome/free-solid-svg-icons'

import { useCart } from '../context/CartContext'

import Brief from '../components/Brief'

import '../styles/Checkout.css'

function Checkout() {
  const { items, removeItem, clearCart, totalQuantity, totalPrice } = useCart()
  const [confirmed, setConfirmed] = useState(false)

  const handleFinish = () => {
    clearCart()
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <Container className="checkout checkout--message">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="checkout__message-icon checkout__message-icon--success"
        />
        <h1 className="checkout__message-title">¡Gracias por tu compra!</h1>
        <p className="checkout__message-text">Tu pedido fue confirmado con éxito.</p>
        <Link to="/" className="checkout__cta">
          Volver al catálogo
        </Link>
      </Container>
    )
  }

  if (items.length === 0) {
    return (
      <Container className="checkout checkout--message">
        <FontAwesomeIcon icon={faBagShopping} className="checkout__message-icon" />
        <h1 className="checkout__message-title">Tu carrito está vacío</h1>
        <p className="checkout__message-text">Agrega productos para verlos aquí.</p>
        <Link to="/" className="checkout__cta">
          Ver catálogo
        </Link>
      </Container>
    )
  }

  return (
    <Container className="checkout">
      <Row className="g-4">
        <Col lg={8}>
          <h1 className="checkout__title">
            Tu carrito <span className="checkout__count">· {totalQuantity} productos</span>
          </h1>
          <Brief items={items} onRemove={removeItem} />
          <Link to="/" className="checkout__continue">
            <FontAwesomeIcon icon={faArrowLeft} /> Seguir comprando
          </Link>
        </Col>

        <Col lg={4}>
          <aside className="summary">
            <h2 className="summary__title">Resumen del pedido</h2>
            <div className="summary__row">
              <span>Subtotal</span>
              <span className="summary__value">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary__row">
              <span>Envío</span>
              <span className="summary__free">Gratis</span>
            </div>
            <div className="summary__divider" />
            <div className="summary__total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="btn-finish" onClick={handleFinish}>
              Finalizar compra <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            <div className="summary__secure">
              <FontAwesomeIcon icon={faLock} /> Pago seguro SSL
            </div>
          </aside>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout
