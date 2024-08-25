import { useRef, useState } from "react"
import './app.css'

function App(){

const [todo , setTodo] = useState([])
const todoVal = useRef()

const addTodo = (event)=>{
event.preventDefault();
if(todoVal.current.value === ""){
  alert('Bhai Likh Le Kuch 🙄🙄...')
}else{
todo.push(todoVal.current.value)
setTodo([...todo])
console.log(todo);
todoVal.current.value = " "
}
}

const deleteTodo = (index)=>{
todo.splice(index , 1)
setTodo([...todo])

}

const editTodo = (index)=>{
const editedVal = prompt('enter updated value')
todo.splice(index , 1 ,editedVal)
setTodo([...todo])

}


  return (
  <div className="text-center">
    <h2 className="ms-2 mt-3">Todo App :-</h2> <br />
 
    <div>
    <form onSubmit={addTodo} >
    <input   className="ms-2 inp" type="text" placeholder="Enter Todo..." ref={todoVal}   /> <br /><br />
    <button type="submit" className="btn btn-outline-primary ms-2 ">Add Todo</button> <br /> <br />
  

    </form>
</div>
    <ul className="list-unstyled">
  
  {todo.map((item , index)=>{
    return(
    <div key={index}>
    <li>{item}</li> <br /> 
    <button className="btn btn-outline-danger me-2" onClick={ ()=> deleteTodo(index)}>Delete</button>
    <button className="btn btn-outline-warning" onClick={ ()=> editTodo(index)}>Edit</button> <br /><br />
   
    </div>
  )})}

    </ul>
    </div>
  )
}
export default App