
import React, { useState, useEffect } from 'react';
import './css/reg.css'


  function Prac() {
    
      const [greeting, setGreeting] = useState('');
      
     useEffect(() => {
      
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting('Good morning!!');
        
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good afternoon!!');
      
      } else {
        setGreeting('Good evening!!');
        
      }

     }, []);
     
     return (
      <div>
        <h1 style={{color:'blue'}} >Hello Sir , {greeting} </h1>
      </div>
      
    );
  }

  
  export default Prac;
  

