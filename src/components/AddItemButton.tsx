import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

type AddItemButtonProps = {
  onClick: () => void
}

function AddItemButton({ onClick }: AddItemButtonProps) {
  return (
    <Button className="btn-add" onClick={onClick}>
      <FontAwesomeIcon icon={faBagShopping} />
      Agregar al carrito
    </Button>
  )
}

export default AddItemButton
