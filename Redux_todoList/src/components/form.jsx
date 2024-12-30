import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Form(){
    let [task,settask]=useState("");
    let dispatch=useDispatch();

    let handlechange=(evt)=>{
        settask(evt.target.value);
    }

    let handlesubmit=(evt)=>{
        console.log(task);
        evt.preventDefault();
        dispatch(addTodo(task));
        settask("");
    }
    return (
        <>
            <h2>Enter task:</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" value={task} onChange={handlechange}/> &nbsp;
                <button>Add Task</button>
            </form>
        </>
    );
}