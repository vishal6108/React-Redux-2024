import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/cart/cart";
import Layout from "./components/layout/layout";
import Products from "./components/shop/product";
import Notification from "./components/ui/notification";
import { useEffect } from "react";
import { fetchCartDetail, sendCartDetail } from "./store/cartActions";

let isInitialState = true;

function App() {
  const showCart = useSelector((state) => state.ui.toggleContent);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartDetail());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialState) {
      isInitialState = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartDetail(cart));
    }
  }, [cart, dispatch]);
  // useEffect(() => {
  //   fetch("https://ninja-way-2e207-default-rtdb.firebaseio.com/cart.json", {
  //     method: "PUT",
  //     body: JSON.stringify(cart),
  //   });
  // }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
