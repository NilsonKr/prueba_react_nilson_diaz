import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container className="py-4">
      <h1>Página no encontrada</h1>
      <Link to="/">Volver al catálogo</Link>
    </Container>
  )
}

export default NotFound
