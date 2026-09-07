import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { getTodos, deleteTodo } from "../services/todoApi";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadTodos() {
      let data = await getTodos();
      setTodos(data);
    }

    loadTodos();
  }, []);

  function handleTodoCreated(newTodo) {
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }
  function handleTodoUpdated(updatedTodo) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo._id === updatedTodo._id
          ? updatedTodo
          : todo
      )
    );
  }
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      // console.log("Todo deleted", todo._id);
      setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo._id !== id),
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <TodoForm onTodoCreated={handleTodoCreated} />
      <div className="mt-5 ">
        <h3>your current todo list: </h3>
        <TodoList todos={todos} ontodoDelete={handleDelete}  ontodoupdate={handleTodoUpdated}/>
      </div>
    </>
  );
}
