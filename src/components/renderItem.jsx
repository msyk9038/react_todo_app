import React from "react";

const delItem = (event) => {
  event.target.parentNode.parentNode.remove();
};

const moveToDone = (event) => {
  setCompleteTodos(event.target.parentNode.parentNode);
};

export const RenderIncompleteItem = (props) => {
  return (
    <li>
      <div className="list-row">
        <p> {props.children} </p>
        <button onClick={moveToDone}> done </button>
        <button onClick={delItem}> del </button>
      </div>
    </li>
  );
};

export const RenderCompleteItem = (props) => {
  return (
    <li>
      <div className="list-row">
        <p> {props.children} </p>
        <button> back </button>
      </div>
    </li>
  );
};
