// import Counter from "./components/Counter";
import CounterTwo from "./components/CounterNew";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import User from "./components/User";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <User />}
      <CounterTwo />
    </>
  );
}

export default App;
