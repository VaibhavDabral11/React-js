import React from 'react'

export const Todoitem = ({todo, onDelete}) => { //directly access todo
    return ( 
    <div>
        <h4>{todo.title}</h4> {/*  {this  define in toso todo.title variable(array) define in app.js}/* */}
        <p>{todo.Desc}</p> {/*  {this  define in toso todo.Desc variable(array) define in app.js}/* */}
        <botton className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</botton>
    </div>
    )
}

