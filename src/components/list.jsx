import React, { useState } from "react";
function List(props) {
  function decoration(){
    var bool=JSON.parse(localStorage.getItem("lineThrough"))
    if(bool){
      return bool;
    }
    else{
      return {bol:false,ids:null};
    }
  }
  const [isDone, setStyle] = useState(decoration());
  function lineThrough(id) {
    // console.log("clicked")
    // return setStyle((prevValue) => {return {bol:!(prevValue.bol),ids:id}});
    props.set(prevvalue=>prevvalue.map((item,index)=>{
      if(index==id){
    return {...item,isDone:!item.isDone}
      }
      return item;
    }))
  }
  localStorage.setItem("lineThrough",JSON.stringify(isDone))
  return (
    <li
      style={{ textDecoration: (props.value.isDone)? "line-through" : "none" }}
      onClick={() => {
        lineThrough(props.id)
        
        // props.onchecked(props.id);
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
