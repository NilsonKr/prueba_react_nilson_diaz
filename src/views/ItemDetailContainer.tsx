import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const { itemId } = useParams()

  return (
    <Container className="py-4">
      <h1>Detalle del producto</h1>
      <p>Producto: {itemId}</p>
    </Container>
  )
}

export default ItemDetailContainer
