import React from 'react';


export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "" // cross-line, if props.todo completed cross
      }}
      onClick={props.toggleComplete} // togglecomplete is a build-in function that will 
    >
      {props.todo.text}
    </div>
    <button onClick={props.onDelete}>x</button>
  </div>
);
