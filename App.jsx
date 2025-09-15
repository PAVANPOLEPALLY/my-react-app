import React from "react"
import "./App.css";
import Todo from "./component/Todo"
import Popup from "./component/Popup";
function App() {
  let popupopen=false;
  return (
    <>
     <div>
        <h1>Todo</h1>
    </div>
    <div>
      <input onChange={(event)=>{console.log(event.target.value);
      }} type="text" />
       <button >Add to</button>
    </div>
    <Todo task="learn react js"/>
    <Todo task="make  notes "/>
    <Todo task="make a project "/>
    <Todo task="land a job"/>
    {popupopen && <Popup/>}
    </>
  )
}
export default App;