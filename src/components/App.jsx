import React, { useState } from "react";
import List from "./list";
import Input from "./input";
function App() {
  function getitemfromlocal() {
    const todos = localStorage.getItem("mytodos");
    if (todos) {
      return JSON.parse(todos);
    } else {
      return [];
    }
  }
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getitemfromlocal());

  function handle(event) {
    console.log(event);
    const inputValue = event.target.value;
    setInput(inputValue);
  }

  // function for addition of elements
  function add() {
    setItems((prevValue) => {
      return [...prevValue, { input, isDone: false }];
    });
    setInput(" ");
  }

  // this gonna add out items to local storage 
  
  var stringify = JSON.stringify(items);
  console.log(stringify);
  localStorage.setItem("mytodos", stringify);


  // function for deletion of elements
  function DeleteItem(id) {
    console.log("delete item called");
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input clicked={handle} buttonclick={add} value={input} />
      <div>
        <ul>
          {items.map((todoitem, index) =>
            items.length === null ? null : (
              <List
                key={index}
                id={index}
                value={todoitem}
                set={setItems}
                bool={false}
                onchecked={DeleteItem}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
