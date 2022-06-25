import React from "react";

function TodoItem(props){
    return(
        <li>
            <spa>C</spa>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };