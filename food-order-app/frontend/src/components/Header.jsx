import { useContext } from 'react'
import logo from '../assets/logo.jpg';
import Button from './custom/custom-btn';
import CartContext from '../store/cart-context';
import UserProgressContext from '../store/progress-context';

function Header() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function showCart(){
    progressCtx.handleShowCart();
  }

  return (
    <>
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt='nothing to show'/>
            <h1 id='title'>FoodApp</h1>
        </div>
        <nav>
        <Button textOnly onClick={showCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
    </>
  )
}

export default Header