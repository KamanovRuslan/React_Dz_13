import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Button from './Button';

function App() {
  let [colorState, setcolorState] = useState("white");
  const realClickHandler = color=>{
    setcolorState(color);
  }
  return (
    <div className="App">
      <Button color="red" clickAct={realClickHandler} ></Button>
      <Button color="green" clickAct={realClickHandler} ></Button>
      <Button color="yellow" clickAct={realClickHandler} ></Button>
      <div style={{height: "50px", backgroundColor: colorState}}>Some text</div>
    </div>
  );
}

export default App;
