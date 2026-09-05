import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { getTodos } from "../services/todoApi";


export default function TodoPage() {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        async function loadTodos(){
            let data = await getTodos();
            setTodos(data);
        }

        loadTodos();
    },[])


    function handleTodoCreated(newTodo){
        setTodos((currentTodos) => [
      ...currentTodos,
      newTodo,
    ])
    }
  return (
    <>
      <TodoForm onTodoCreated={handleTodoCreated}/>
       <div className="mt-5 ">

       <h3>your current todo list: </h3>
       <TodoList todos={todos} />
       </div>
    </>
  );
}
