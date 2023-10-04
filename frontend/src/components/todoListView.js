import TodoItem from "./todo";
import React from "react";

function TodoView(prop) {
    return (
        <div>
            <ul>
                {prop.todoList.map(todo => <TodoItem todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoView;