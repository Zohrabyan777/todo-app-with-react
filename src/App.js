import style from "./App.module.css";

import { useState } from "react";
import InputItem from "./components/inputItem";
import AddedTodos from "./components/form";
import Footer from "./components/footer";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Js", isCompleted: false },
    { id: 2, text: "Learn ReactJs", isCompleted: false },
    { id: 3, text: "Learn NextJs", isCompleted: false },
  ]);

  function onHandlerSubmit(newText) {
    setTodos((todos) => {
      return [
        ...todos,
        { id: Math.random().toString(), text: newText, isCompleted: false },
      ];
    });
  }
  function removeCompleted() {
    setTodos((todos) => todos.filter((todo) => !todo.isCompleted));
  }
  function deleteItems(id) {
    setTodos((todos) => todos.filter((todo) => id !== todo.id));

    console.log(todos);
  }
  function onChange(newtodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id == newtodo.id) {
          return newtodo;
        }
        return todo;
      })
    );
  }
  return (
    <div className={style.todo}>
      <AddedTodos onHandlerSubmit={onHandlerSubmit} />
      <InputItem todo={todos} deleteItems={deleteItems} onChange={onChange} />
      <Footer todo={todos} removeCompleted={removeCompleted} />
    </div>
  );
}

export default App;
