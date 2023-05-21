import { Navbar as NavbarBs, Nav, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
  const { openCart, emptyCart, cartQuantity } = useShoppingCart()

  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container className='me-auto'>
        <Nav>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        <Nav.Item>
          <Button
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant='outline-primary'
            className='rounded-circle'
            onClick={openCart}
          >
            <TiShoppingCart
              style={{
                width: '1.5rem',
                height: '1.5rem'
              }}
            />
            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(35%, 35%)'
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        </Nav.Item>
      </Container>
    </NavbarBs>
  )
}

export default Navbar
