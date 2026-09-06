// getTodos()
// createTodo()
// updateTodo()
// deleteTodo()
// url for backend 
const API_URL = "http://localhost:5000/api/todos"



//GET -> get todos
export async function getTodos(){
    try {
      const response = await fetch(API_URL,{method:"GET"});

      if(!response.ok){
        throw new error("failed to fetch data")
      }


    return response.json();
    } catch (error) {
        console.log(error.message)   
    }
    
}

// POST  -create a todo
export async function createTodo(todoData){
    try{

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoData)
        });
    
        if(!response.ok){
            throw new Error("failed to create todo")
        }
        return response.json();
    } catch(error){
        console.log(error.message);
    }
}

