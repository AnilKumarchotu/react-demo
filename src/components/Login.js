import { useEffect, useState } from "react";
import React from "react";

function Login (){

const[email,setEmail] = useState(""); 
const[pass,setPass] = useState("");
const[emailerr,setEmailerr]=useState(false)

const handleSub=()=>{
  if(email===""){
    setEmailerr(true)
  }
console.info({email,pass})

}

useEffect(()=>{
  setEmailerr(false)
},[email])

return(
  
    <section className="gradient-custom">
        <div className="col-md-8 mb-4">
        <div className="container py-5 ">
        <div className="row  align-items-center h-100">
          <div className="col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <center><u><h2 className="mb-4 pb-2 pb-md-0 mb-md-5 gggg">Login Page</h2></u></center>

     <form>
     <div className="row-md-6 mb-4">
      
      <img src="https://www.desicomments.com/wallpapers/wp-content/uploads/2014/12/Mountains.jpg" alt="Trees" height="200" />

      <br />

      <span
        style={{
          color: 'green',
          fontSize: '1.2em',
          fontWeight: 'bold',
        }}
      >

      </span>
    </div>
     <div className="col-md-6 mb-4">
     <div class="form-outline mb-4">
     <label class="form-label" for="form2Example1">Email address</label>
       <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      {emailerr &&(<span style={{color:'red'}}>This field is requir</span>)} 
     </div>
</div>
<div className="col-md-6 mb-4">
     <div class="form-outline mb-4">
     <label class="form-label" for="form2Example2">Password</label>
     
       <input type="password" id="form2Example2" class="form-control" value={pass} onChange={(e)=>setPass(e.target.value)}/>
      
     </div>
     </div>
     <div class="row mb-4">
       <div class="col d-flex justify-content-left">
        
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="form2Example31" unchecked />
           <label class="form-check-label" for="form2Example31"> Remember me </label>
         </div>
       </div>

       <div class="col-md-8 mb-4">
         
         <a href="C:\Users\delos\AK\react-demo\src\App.js">Forgot password?</a>
       </div>
     </div>
<div class="row md-4">
<div class="col d-flex justify-content-left">
     <button type="button" class="btn btn-primary btn-block mb-4" onClick={()=>handleSub()}>Sign in</button>
    
     <div class="row-md-12">
     <div class="col d-flex justify-content-right">
     <h6>For next page click here</h6>
     
     </div>
     </div>
     </div>
     <div class="text-center">
       <p>Not a member? <a href="C:\Users\delos\AK\react-demo\src\App.js">Register</a></p>
       </div>
     </div>
   </form>
   </div>
            </div>
          </div>

          <div className='col-xl-5'>
            
          </div>
        </div>
      </div>
</div>

    </section>
)

}
export default Login;












