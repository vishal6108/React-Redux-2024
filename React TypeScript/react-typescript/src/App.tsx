import './App.css';
import NewTodo from './components/new-todo';
import Todos from './components/todos';
import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [
  //   new Todo('React'),
  //   new Todo('Redux'),
  // ]

  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prevVal) => {
  //     return prevVal.concat(newTodo);
  //   })
  // }

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   });
  // };
  return (
    // <div>
    //   <NewTodo addTodo={addTodoHandler} />
    //   {/* <Todos items={['React','Redux']}/> */}
    //   <Todos items={todos} removeTodo={removeTodoHandler}/>
    // </div>
    
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
