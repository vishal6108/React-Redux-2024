import React, { useContext } from 'react'
import Modal from './custom/Modal'
import CartContext from '../store/cart-context'
import Button from './custom/custom-btn';
import UserProgressContext from '../store/progress-context';
import CartItem from './CartItem';
import { currencyFormatter } from '../utils/formatter.js';

function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext)

  const totalPrice = cartCtx.items.reduce((totalPrice,item) => totalPrice + item.quantity * item.price,0);
  console.log('total price',totalPrice)


  function handleCloseCart() {
    progressCtx.handleHideCart();
  }

  function handleShowCheckout() {
    progressCtx.handleShowCheckOut();
  }

  return (
    <div>
    <Modal
      className="cart"
      open={progressCtx.progress === 'cart'}
      onClose={progressCtx.progress === 'cart' ? handleCloseCart : null}
    >
        <h2>Your Orders</h2>
        <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
        </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (<Button onClick={handleShowCheckout}>Go to Checkout</Button>)}
      </p>
        </Modal>
    </div>
    
  )
}

export default Cart