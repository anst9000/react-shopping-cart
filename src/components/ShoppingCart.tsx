import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems, cartQuantity, emptyCart } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          {cartQuantity > 0 ? (
            <div className='ms-auto fw-bold fs-5'>
              Total{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
          ) : (
            <div className='mt-5 text-center fw-bold fs-5'>Cart is empty</div>
          )}
        </Stack>
        {cartQuantity > 0 && (
          <Button
            className='bg-danger'
            style={{
              margin: '3.5rem auto 0',
              display: 'block'
            }}
            onClick={emptyCart}
          >
            Empty Cart
          </Button>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart
