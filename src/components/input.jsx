import React from "react";
function InputArea(props) {
  return (
    <div className="form">
      <input onChange={(e) => {props.clicked(e)}} type="text" value={props.value}  />
      <button onClick={() => {props.buttonclick()}}>
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
