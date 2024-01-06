import { useContext } from 'react';

import Modal from './custom/Modal.jsx';
import CartContext from '../store/cart-context.jsx';
import UserProgressContext from '../store/progress-context.jsx';
import { currencyFormatter } from '../utils/formatter.js';
import Button from './custom/custom-btn.jsx';
import Input from './custom/input.jsx';
import useHttp from './custom/useHttp.jsx';
import Error from '../components/Error.jsx';

const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp('http://localhost:3008/orders', requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.handleHideCheckOut();
  }
  function handleFinish() {
    userProgressCtx.handleHideCheckOut();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formSubmitDetail = new FormData(e.target);
    const userDetail = Object.fromEntries(formSubmitDetail.entries()); 

    sendRequest(
        JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: userDetail,
          },
        })
      );
    }
  
    let actions = (
      <>
        <Button type="button" textOnly onClick={handleClose}>
          Close
        </Button>
        <Button>Submit Order</Button>
      </>
    );
  
    if (isSending) {
      actions = <span>Sending order data...</span>;
    }
  
    if (data && !error) {
      return (
        <Modal
          open={userProgressCtx.progress === 'checkout'}
          onClose={handleFinish}
        >
          <h2>Success!</h2>
          <p>Your order was submitted successfully.</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
          <p className="modal-actions">
            <Button onClick={handleFinish}>Okay</Button>
          </p>
        </Modal>
      );
    }
  
    return (
      <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
  
          <Input label="Full Name" type="text" id="name" />
          <Input label="E-Mail Address" type="email" id="email" />
          <Input label="Street" type="text" id="street" />
          <div className="control-row">
            <Input label="Postal Code" type="text" id="postal-code" />
            <Input label="City" type="text" id="city" />
          </div>
  
          {error && <Error title="Failed to submit order" message={error} />}
  
          <p className="modal-actions">{actions}</p>
        </form>
      </Modal>
    );
  }