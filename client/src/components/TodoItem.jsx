export default function TodoItem({todo}) {
  return (
    <>
      <div className="flex gap-2">
        <input type="checkbox" name="status" id="statusOfTodo" />
        <h3>{todo.title}</h3>
        <button className="px-3 py-2 bg-red-500 text-white font-bold">
          delete
        
        </button>
      </div>
    </>
  );
}
