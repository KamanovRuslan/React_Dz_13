import React from "react";

export default function Button(props){
    const clickHandler = ()=>{
        props.clickAct(props.color);
    }
return <button style={{backgroundColor: props.color}} onClick={clickHandler}>{props.color}</button>
}