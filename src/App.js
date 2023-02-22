import "./App.css";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todos from "./myComponents/Todos";
import Addtodo from "./myComponents/Addtodo";
import { About } from "./myComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    // deleting this way in react does not work
    // let index = todos.indexof(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, Desc) => {
    console.log("I am adding this todo", title, Desc);
    let sno;
    if (todos.length === 0) {
      sno = 0; //from todo.js line 13
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      Desc: Desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="Todos" searchbar={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          > </Route>
        <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
