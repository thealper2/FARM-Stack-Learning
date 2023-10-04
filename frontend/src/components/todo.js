import axios from "axios";
import React from "react";

const host = "http://127.0.0.1:8000/api/"

function TodoItem(prop) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res.data))
    }

    return (
        <div>
            <p>
                <span style={{fontWeight: "bold, underline"}}>
                    {prop.todo.title} :
                </span>
                {prop.todo.description}
                <button onClick={() => deleteTodoHandler(prop.todo.title)} className="btn btn-outline-danger my-2, mx-2" style={{borderRadius: "50px"}}>
                    X
                </button>
                <hr/>
            </p>
        </div>
    )
}

export default TodoItem;