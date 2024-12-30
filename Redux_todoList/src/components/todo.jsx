import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo  } from "../features/todo/todoSlice";

export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    console.log(todos);

    let dispatch=useDispatch();

    return (
        <>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.task} &nbsp;
                    <button onClick={()=>{dispatch(deleteTodo(todo.id))}}> Delete </button> 
                    </li>
                ))}
            </ul>
        </>
    );
}