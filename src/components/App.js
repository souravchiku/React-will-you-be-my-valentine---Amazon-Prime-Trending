import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (prop) => {
  
  let {slides}=prop;
  let [{boolValN,boolValP,boolValR},upDateBool]=useState({boolValN:false,boolValP:true,boolValR:true})
  let [index,updateIndex]=useState(0);
  let [{title,text},upDateInfo]=useState({title:slides[index].title,text:slides[index].text})
  
  const IncreaseIndex=()=>{
    index++
    if(index===1)
    {
      upDateBool({boolValN:false,boolValP:false,boolValR:false})
    }
    if(index===slides.length-1)
    {
     upDateBool({boolValN:true,boolValP:false,boolValR:false})
    }
    updateIndex(index)
    upDateInfo({title:slides[index].title,text:slides[index].text})
  }

  const DecreseIndex=()=>{
    index--
    if(index===0)
    {
      upDateBool({boolValN:false,boolValP:true,boolValR:true})
    }
     else 
    {
      upDateBool({boolValN:false,boolValP:false,boolValR:false})
    }
    updateIndex(index)
    upDateInfo({title:slides[index].title,text:slides[index].text})
  }

  const RestartIndex=()=>{
    index=0
    upDateBool({boolValN:false,boolValP:true,boolValR:true})
    updateIndex(index)
    upDateInfo({title:slides[index].title,text:slides[index].text})
  }



  return(
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button data-testid="button-prev" onClick={DecreseIndex} disabled={boolValP}>Prev</button>
      <button data-testid="button-restart" onClick={RestartIndex} disabled={boolValR}>Restart</button>
      <button data-testid="button-next" onClick={IncreaseIndex} disabled={boolValN}>Next</button>
    </>
  )
}


export default App;