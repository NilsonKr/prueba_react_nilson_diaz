import { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { getProductById } from '../services/products'

import ItemDetail from '../components/ItemDetail'

import type { Product } from '../types/product'

import '../styles/ItemDetailContainer.css'

function ItemDetailContainer() {
  const { itemId } = useParams()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getProductById(Number(itemId))
      .then(setProduct)
      .catch(() => setError('No pudimos cargar el producto. Intenta nuevamente.'))
      .finally(() => setLoading(false))
  }, [itemId])

  return (
    <Container className="detail-view">
      {loading && (
        <div className="detail-view__state">
          <Spinner animation="border" role="status" aria-label="Cargando producto" />
        </div>
      )}

      {error && !loading && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && product && <ItemDetail product={product} />}
    </Container>
  )
}

export default ItemDetailContainer
