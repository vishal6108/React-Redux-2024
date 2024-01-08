import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth); 
  const dispatch = useDispatch();
  const signOut = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Product</a>
          </li>
          <li>
            <button onClick={signOut}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;