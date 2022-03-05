import React, { useState } from "react";
import "./styles.css";
// import {
//   RenderIncompleteItem,
//   RenderCompleteItem
// } from "./components/renderItem";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["test1", "test2"]);
  const [completeTodos, setCompleteTodos] = useState(["test3"]);

  const delElement = (array, index) => {
    const tmp = [...array];
    tmp.splice(index, 1); // inplace = True
    return tmp;
  };
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };
  const moveToComplete = (index) => {
    setCompleteTodos([...completeTodos, incompleteTodos[index]]);
    setIncompleteTodos(delElement(incompleteTodos, index));
  };
  const moveToIncomplete = (index) => {
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
    setCompleteTodos(delElement(completeTodos, index));
  };
  const delItem = (index) => {
    setIncompleteTodos(delElement(incompleteTodos, index));
  };
  const onInputEnter = (event) => {
    if (event.key === "Enter") onClickAdd();
  };

  return (
    <>
      <div className="input-area">
        <input
          id="addText"
          placeholder="input todo"
          value={todoText}
          onChange={onChangeTodoText}
          onKeyPress={onInputEnter}
        />
        <button onClick={onClickAdd}> add </button>
      </div>

      <div className="incomplete-area">
        <p className="title">incomplete-task</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p> {todo} </p>
                  <button onClick={() => moveToComplete(index)}> done </button>
                  <button onClick={() => delItem(index)}> del </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title"> complete-task </p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li>
                <div className="list-row">
                  <p> {todo} </p>
                  <button onClick={() => moveToIncomplete(index)}>
                    {" "}
                    back{" "}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
