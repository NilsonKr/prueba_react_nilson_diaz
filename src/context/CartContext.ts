import { createContext, useContext } from 'react'

import type { Product } from '../types/product'

export type CartItem = {
  product: Product
  quantity: number
}

export type CartContextValue = {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  totalQuantity: number
  totalPrice: number
}

export const CartContext = createContext<CartContextValue | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }

  return context
}
