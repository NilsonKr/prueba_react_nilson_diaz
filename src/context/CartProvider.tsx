import { useReducer } from 'react'
import type { ReactNode } from 'react'

import { CartContext } from './CartContext'

import { CART_ADD, CART_CLEAR, CART_REMOVE } from '../utils/constants'

import type { CartItem } from './CartContext'
import type { Product } from '../types/product'

type CartAction =
  | { type: typeof CART_ADD; product: Product; quantity: number }
  | { type: typeof CART_REMOVE; productId: number }
  | { type: typeof CART_CLEAR }

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case CART_ADD: {
      const existing = state.find((item) => item.product.id === action.product.id)

      if (existing) {
        return state.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item,
        )
      }

      return [...state, { product: action.product, quantity: action.quantity }]
    }
    case CART_REMOVE:
      return state.filter((item) => item.product.id !== action.productId)
    case CART_CLEAR:
      return []
    default:
      return state
  }
}

type CartProviderProps = {
  children: ReactNode
}

function CartProvider({ children }: CartProviderProps) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const addItem = (product: Product, quantity: number) =>
    dispatch({ type: CART_ADD, product, quantity })
  const removeItem = (productId: number) => dispatch({ type: CART_REMOVE, productId })
  const clearCart = () => dispatch({ type: CART_CLEAR })

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalQuantity,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
