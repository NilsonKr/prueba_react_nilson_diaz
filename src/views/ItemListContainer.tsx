import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

type ItemListContainerProps = {
  greeting: string
}

function ItemListContainer({ greeting }: ItemListContainerProps) {
  const { categoryId } = useParams()

  return (
    <Container className="py-4">
      <h1>{greeting}</h1>
      <p>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo completo'}</p>
    </Container>
  )
}

export default ItemListContainer
