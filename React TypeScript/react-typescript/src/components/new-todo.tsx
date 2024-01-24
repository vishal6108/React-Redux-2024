import { useRef, useContext } from 'react';
import classes from './newtodo.module.css';
import { TodosContext } from '../store/todos-context';
// const NewTodo: React.FC<{addTodo: (text: string) => void}> = (props) => {
//     const todosCtx = useContext(TodosContext);  
//   const todoInputRef = useRef<HTMLInputElement>(null);

//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();

//     const enteredText = todoInputRef.current!.value;

//     if (enteredText.trim().length === 0) {
//       return;
//     }
//     props.addTodo(enteredText);
    
//   };

//   return (
//     <form onSubmit={submitHandler} className={classes.form}>
//       <label htmlFor='text'>Todo </label>
//       <input type='text' id='text' ref={todoInputRef} />
//       <button>Add Todo</button>
//     </form>
//   );
// };

// export default NewTodo;

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);  
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo </label>
      <input type='text' id='text' ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;