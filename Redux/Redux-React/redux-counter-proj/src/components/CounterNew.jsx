import { useDispatch, useSelector } from 'react-redux';
import classes from '../components/Counter.module.css'
import { counterActions } from '../store/counter-two-state';

const CounterTwo = () => {
  const counter = useSelector(state => state.counter.counter); 
  const showContent = useSelector(state => state.counter.toggleContent);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const increment = () => {
        dispatch(counterActions.increment(1))
  }

  const decrement = () => {
    dispatch(counterActions.decrement(1))
  }

  const incrementBy5 = () => {
    dispatch(counterActions.increment(5))
  }
  

const decrementBy5 = () => {
dispatch(counterActions.decrement(5))
}
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <main className={classes.counter}>
    <h1>Redux Counter</h1>
    {showContent && <div className={classes.value}>{counter}</div>}
    {
    isAuth && 
    <div>
    <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
    <div>
    <button onClick={incrementBy5}>Increment 5</button>
    <button onClick={decrementBy5}>Decrement 5</button>
    </div>
    <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>}
  
   </main>
  );
};

export default CounterTwo;