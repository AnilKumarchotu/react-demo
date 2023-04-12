import React ,{useState}from 'react';


export default function Cal() {
const[num1,setNum1]=useState(0)
const[num2,setNum2]=useState(0)
const [result,setResult] = useState('');



    const Add=()=>{
      setResult(Number(num1) + Number(num2))
      console.log(result)
    }
    const Sub=()=>{
      setResult(Number(num1) - Number(num2))
      console.log(result)
    }
    const Mul=()=>{
      setResult(Number(num1) * Number(num2))
      console.log(result)
    }
    const Div=()=>{
      setResult(Number(num1) / Number(num2))
      console.log(result)
    }
    return (
  <div>
<p>Result : {result}</p>
<input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
<input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
  <button onClick={Add}>Add</button>
  <button onClick={Sub}>Sub</button>
  <button onClick={Mul}>Mul</button>
  <button onClick={Div}>Div</button>
  


 
    </div>
  )
}

