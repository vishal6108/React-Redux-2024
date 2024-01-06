import Button from "./custom/custom-btn";
import { currencyFormatter } from '../utils/formatter.js';
import { useContext } from "react";
import CartContext from "../store/cart-context.jsx";

export default function MealItem({ meal }) {

    const cartCtx = useContext(CartContext);

  function handleAddToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3008/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
  }