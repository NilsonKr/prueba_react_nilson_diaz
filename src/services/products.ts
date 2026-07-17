import type { Product } from '../types/product'

const BASE_URL = 'https://fakestoreapi.com'

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`)
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`)
  }
  return response.json() as Promise<T>
}

export function getProducts(): Promise<Product[]> {
  return request<Product[]>('/products')
}

export function getProductsByCategory(category: string): Promise<Product[]> {
  return request<Product[]>(`/products/category/${encodeURIComponent(category)}`)
}

export function getProductById(id: number): Promise<Product> {
  return request<Product>(`/products/${id}`)
}

export function getCategories(): Promise<string[]> {
  return request<string[]>('/products/categories')
}
