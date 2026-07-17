import { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'

import { getProducts } from '../services/products'

import ItemList from '../components/ItemList'

import type { Product } from '../types/product'

import '../styles/ItemListContainer.css'

interface ItemListContainerProps {
  greeting: string
}

function ItemListContainer({ greeting }: ItemListContainerProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError('No pudimos cargar los productos. Intenta nuevamente.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Container className="catalog">
      <header className="catalog__head">
        <h1 className="catalog__title">{greeting}</h1>
        {!loading && !error && (
          <p className="catalog__count">{products.length} productos</p>
        )}
      </header>

      {loading && (
        <div className="catalog__state">
          <Spinner animation="border" role="status" aria-label="Cargando productos" />
        </div>
      )}

      {error && !loading && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && <ItemList products={products} />}
    </Container>
  )
}

export default ItemListContainer
