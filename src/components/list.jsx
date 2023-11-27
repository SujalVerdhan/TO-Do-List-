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
  // function lineThrough(id) {
  //   console.log("clicked")
  //   return setStyle((prevValue) => {return {bol:!(prevValue.bol),ids:id}});
  // }
  localStorage.setItem("lineThrough",JSON.stringify(isDone))
  return (
    <li
      // tyle={{ textDecoration: (isDone && isDone.ids==props.id)? "line-through" : "none" }}
      onClick={() => {
        // lineThrough(props.id)
        
        props.onchecked(props.id);
      }}
    >
      {props.value}{" "}
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
