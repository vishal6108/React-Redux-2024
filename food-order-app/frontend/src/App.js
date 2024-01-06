import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import MealCard from "./components/MealCard";
import { CartContextProvider } from "./store/cart-context";
import { UserProgressContextProvider } from "./store/progress-context";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealCard />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
