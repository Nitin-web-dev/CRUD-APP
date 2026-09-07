import TodoItem from "./TodoItem";

export default function TodoList({todos,ontodoDelete, ontodoupdate}) {

  return (
    <>
    <div>

    { (todos)?
        todos.map((todo) =>( 
            
            <TodoItem key={todo._id} todo={todo} ontodoDelete={ontodoDelete} ontodoupdate={ontodoupdate}/>
        )): <h3>no data found</h3>
    }
    </div>
    </>
  );
}
