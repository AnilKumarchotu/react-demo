import { useState,useEffect } from "react"
import React from 'react'
import "./First.css"
import Anil from "./Anil";

export default function First() {

  const[count,setCount]=useState(0);
  const[data,setData]=useState([])
  console.log(data)
  const IncNum = () =>{
        
    setCount(count +1);
  
    };    
    const DicNum = () =>{
        if(count>0){
            setCount(count-1);
        }else{
            setCount(0) 
        }
       
    }; 
useEffect(()=>{
setData(Anil)
},[])
    return (
        <>
        <h4>Counting Numbers:</h4>
        
    <h1>{count}</h1>
        
    <button  className="btn" onClick={()=>IncNum()}>Increament</button>
    <button  className="btn" onClick={()=>DicNum()}>Dicreament</button>
    {count>10 ? <p style={{color:"red"}}><bold>Colour changed.</bold></p>:<p>Colour change. </p>}
    {data.map((item)=>(
 <p>{item.Name}</p>
        ))}
        
      </>
  )
}
