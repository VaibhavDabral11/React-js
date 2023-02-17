import React from 'react'
import {Todoitem} from './Todoitem';
const Todos = (props) => {
  let myStyle ={
    minHeight:"70vh",
    mirgen:"40px auto"
  }
  return (
      <div className="container"style={myStyle} >
        <h3 className="text-center my-3" >Todo list </h3>
        {/* <Todoitem todo={props.todos[0]}/> */} 
 
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
          return (<><Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr /></>
        )})}
      </div>
  )
}

export default Todos
