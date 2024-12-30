import { useState } from 'react';
import './App.css'

function App() {
  let [num,setnum]=useState(null);
  let [title,settitle]=useState("Lottery");
  
  let newtitle=(num)=>{
    let sum=0;
    while(num){
      let rem=num%10;
      sum+=rem;
      num=Math.floor(num/10);
    }
    return (sum===15)?"Congratulations! You have won the Lottery":"Lottery";
  }
  
  let generatenum=()=>{
    let newnum=Math.floor(Math.random()*1000);
    setnum(newnum);
    settitle(newtitle(newnum));
  }

  return (
    <div>
      <h1>{title}</h1>
      <h3>Lottery Ticket: {num}</h3>
      <button onClick={generatenum}>Get new Ticket</button>
    </div>
  );
}

export default App
