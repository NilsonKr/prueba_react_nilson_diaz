import { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

import { getProducts } from '../services/products'

import ItemList from '../components/ItemList'

import type { Product } from '../types/product'

import '../styles/ItemListContainer.css'

type ItemListContainerProps = {
  greeting: string
}

function ItemListContainer({ greeting }: ItemListContainerProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')?.trim() ?? ''

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError('No pudimos cargar los productos. Intenta nuevamente.'))
      .finally(() => setLoading(false))
  }, [])

  const visibleProducts = search
    ? products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      )
    : products

  return (
    <Container className="catalog">
      <header className="catalog__head">
        <h1 className="catalog__title">
          {search ? `Resultados para "${search}"` : greeting}
        </h1>
        {!loading && !error && (
          <p className="catalog__count">{visibleProducts.length} productos</p>
        )}
      </header>

      {loading && (
        <div className="catalog__state">
          <Spinner animation="border" role="status" aria-label="Cargando productos" />
        </div>
      )}

      {error && !loading && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && visibleProducts.length > 0 && (
        <ItemList products={visibleProducts} />
      )}

      {!loading && !error && visibleProducts.length === 0 && (
        <Alert variant="light" className="catalog__empty">
          No encontramos productos que coincidan con tu búsqueda.
        </Alert>
      )}
    </Container>
  )
}

export default ItemListContainer
