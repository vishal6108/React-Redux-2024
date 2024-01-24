import React from 'react'
import classes from './todoitem.module.css';

const TodoItem: React.FC<{text : string; removeTodo: () => void}> = (props) => {
  return  <li className={classes.item} onClick={props.removeTodo}>{props.text}</li>

};

export default TodoItem