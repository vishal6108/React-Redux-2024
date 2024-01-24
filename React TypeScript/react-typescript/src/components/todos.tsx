import React, { useContext } from 'react';
import TodoItem from './todo-item';
import classes from './todos.module.css';
import { TodosContext } from '../store/todos-context';

// const Todos: React.FC<{items : Todo []; removeTodo: (id: string) => void}> = (props) => {
//   return (
//     <ul className={classes.todos}>
//         {
//             props.items.map((x) => (
//                 <TodoItem key={x.id} text={x.text} removeTodo={props.removeTodo.bind(null, x.id)}/>
//             ))
//         }
//     </ul>
//   );
// };

// export default Todos


const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
      return (
        <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          removeTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
      );
    };
    
    export default Todos