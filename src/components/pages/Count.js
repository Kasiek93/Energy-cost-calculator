import React from 'react';
import './_Count.scss';


const ToDoList = ()=> {
    return (
        <ul style={{ listStyle: "none" }}>
            <li><a href="/Policz rachunek za gaz">Policz rachunek za gaz</a></li>
            <li><a href="/Policz rachunek za prąd">Policz rachunek za prąd</a></li>
            <li><a href="/Poprzednie miesiące">Poprzednie miesiące</a></li>
            <li><a href="/Kolejne miesiące">Kolejne miesiące</a></li>
        </ul>
    );
};
export default ToDoList