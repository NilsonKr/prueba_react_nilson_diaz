import { Col, Row } from 'react-bootstrap'

import Item from './Item'

import type { Product } from '../types/product'

interface ItemListProps {
  products: Product[]
}

function ItemList({ products }: ItemListProps) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Item product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList
