// import { useDispatch, useSelector } from 'react-redux';
// import classes from '../components/Counter.module.css'

// const Counter = () => {
//   const counter = useSelector(state => state.counter); 
//   const showContent = useSelector(state => state.showContent);
//   const dispatch = useDispatch();
//   const toggleCounterHandler = () => {
//     dispatch({type:'toggle'})
//   };

//   const increment = () => {
//         dispatch({type:'increment',payload:1})
//   }

//   const decrement = () => {
//     dispatch({type:'decrement',payload:1})
//   }

//   const incrementBy5 = () => {
//     dispatch({type:'increment',payload:5})
//   }
  

// const decrementBy5 = () => {
// dispatch({type:'decrement',payload:5})
// }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showContent && <div className={classes.value}>{counter}</div>}
//       <div>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       </div>
//       <div>
//       <button onClick={incrementBy5}>Increment 5</button>
//       <button onClick={decrementBy5}>Decrement 5</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;