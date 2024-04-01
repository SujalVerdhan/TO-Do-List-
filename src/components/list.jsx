import React, { useState } from "react";
function List(props) {
  // For completed tasks suppose you clicked on a task added it will make it marked as line through.
  function lineThrough(id) {
    
    props.set(prevvalue=>prevvalue.map((item,index)=>{
      if(index==id){
    return {...item,isDone:!item.isDone}
      }
      return item;
    }))
  }
  
  return (
    // These are lists that are mapped after added to list items array.
    <li
      style={{ textDecoration: (props.value.isDone)? "line-through" : "none" }}
      onClick={() => {
        lineThrough(props.id)
      }}
    >
      {props.value.input}{" "}
      <i
        onClick={() => {
          props.onchecked(props.id);
        }}
        style={{ float: "right" }}
        className="fa-solid fa-trash"
      />
    </li>
  );
}
export default List;
