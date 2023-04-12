import React, { useState } from 'react'


export default function Exam() {

const[name,setName]=useState(false);


  return (
    <div>
        {name &&
            <h1>Hello Anil!!</h1>
}
        

<button onClick={(e)=>setName(true)}>Click Here</button>
      
    </div>

)
}
