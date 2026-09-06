import { useState } from "react";
import {createTodo} from "../services/todoApi.js"
export default function TodoForm({onTodoCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoData = {
        title: title
    }
    const newTodo = await createTodo(todoData);
    onTodoCreated(newTodo);
    setTitle("");
  }

  return (
    <>
      <form
        className="border p-1 flex gap-3 justify-center align-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full text-white px-2 outline-none"
          type="text"
          placeholder="enter your todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-blue-600 text-whtie font-bold text-white p-2 border rounded"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
