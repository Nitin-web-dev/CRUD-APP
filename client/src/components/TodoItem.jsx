import { updateTodo } from "../services/todoApi";
export default function TodoItem({ todo, ontodoDelete ,ontodoupdate}) {
  const handleDelete = () => {
    try {
      ontodoDelete(todo._id);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleCheckbox = async (e) => {
    const checkbox = e.target.checked;
    try {
      const updatedTodo = await updateTodo(todo._id, checkbox);
      ontodoupdate(updatedTodo);

      console.log(updatedTodo);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mb-2 flex w-full items-center justify-between gap-4 px-4 py-3 border rounded-lg">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.statusChecked}
            name="status"
            id="statusOfTodo"
            className="h-4 w-4"
            onChange={handleCheckbox}
          />

          <h3 className="text-lg font-medium">{todo.title}</h3>
        </div>

        <button
          onClick={handleDelete}
          className="px-3 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </>
  );
}
