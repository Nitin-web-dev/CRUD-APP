// getTodos()
// createTodo()
// updateTodo()
// deleteTodo()
// url for backend 
const API_URL = "http://localhost:3000/api/todos"



//GET -> get todos
export async function getTodos(){
    try {
      const response = await fetch(API_URL,{method:"GET"});
        
      if(!response.ok){
        throw new error("failed to fetch data")
      }
      const data = await response.json();
    
    //   console.log(data)
    return data.data;
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
        const data = await response.json();
     
        return data.data;
    } catch(error){
        console.log(error.message);
    }
}

export async function deleteTodo(id){
    try {
       const response = await fetch(`${API_URL}/${id}`,{method: "DELETE"});
       if(!response.ok){
         throw new Error("Failed to delete todo");
       }
    } catch (error) {
         console.log(error.message);
    }
}
export async function updateTodo(id,statusChecked){
    try {
       const response = await fetch(`${API_URL}/${id}`,{method: "PATCH", headers: {
        "Content-Type": "application/json"
       },
    body: JSON.stringify({
        statusChecked:statusChecked
    })});
       if(!response.ok){
         throw new Error("Failed to delete todo");
       }
       const data  = await response.json();
       return data.data;
    } catch (error) {
         console.log(error.message);
    }
}