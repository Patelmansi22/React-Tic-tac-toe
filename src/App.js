
import { useState } from 'react';
import Button from './Button';
import './App.css';

let isval =false;
const App =()=> {
  const[num,setNum] =useState("")
  const [moves,SetMoves] = useState(["","","","","","","","","",])

  const handleInc =(index) =>{
    if(isval) return
    console.log("first")
    if(moves[index]) return
    console.log("first2")
 
    
    if(num===""){
      setNum("x");
      moves[index]="x"
      console.log(moves[index],"moves")
    }else if(num==="x"){
      setNum("0");
      moves[index]="0"
    }else if(num==="0"){
      setNum("x");
      moves[index]="x"
    } 
    if (moves[0]=== "x"&&moves[1]=== "x"&& moves[2]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[3]=== "x"&&moves[4]=== "x"&& moves[5]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[6]=== "x"&&moves[7]=== "x"&& moves[8]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[0]=== "x"&&moves[3]=== "x"&& moves[6]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[1]=== "x"&&moves[4]=== "x"&& moves[7]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[2]=== "x"&&moves[5]=== "x"&& moves[8]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[0]=== "x"&&moves[4]=== "x"&& moves[8]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[2]=== "x"&&moves[4]=== "x"&& moves[6]=== "x"){
      alert ("x is win");
      isval = true;
    }
    else if(moves[0]=== "0"&&moves[1]=== "0"&& moves[2]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[3]=== "0"&&moves[4]=== "0"&& moves[5]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[6]=== "0"&&moves[7]=== "0"&& moves[8]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[0]=== "0"&&moves[3]=== "0"&& moves[6]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[1]=== "0"&&moves[4]=== "0"&& moves[7]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[2]=== "0"&&moves[5]=== "0"&& moves[8]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[0]=== "0"&&moves[4]=== "0"&& moves[8]=== "0"){
      alert ("0 is win");
      isval = true;
    }
    else if(moves[2]=== "0"&&moves[4]=== "0"&& moves[6]=== "0"){
      alert ("0 is win");
      isval = true;
    }
  }
     
  const reset =()=>{
    if(isval){
      isval= false;
      SetMoves(["","","","","","","","","",])
    }
    
    }
  
  return (
    <div>
    <h1>Tic-tac-Toe</h1>
    <table className='table'>
      <tr>
        <td><Button title={moves[0]} onClick={()=>handleInc(0)}/></td>
        <td><Button title={moves[1]} onClick={()=>handleInc(1)}/></td>
        <td><Button title={moves[2]} onClick={()=>handleInc(2)}/></td>
      </tr>
      <tr>
        <td><Button title={moves[3]} onClick={()=>handleInc(3)}/></td>
        <td><Button title={moves[4]} onClick={()=>handleInc(4)}/></td>
        <td><Button title={moves[5]} onClick={()=>handleInc(5)}/></td>
      </tr>
      <tr>
      <td><Button title={moves[6]} onClick={()=>handleInc(6)}/></td>
        <td><Button title={moves[7]} onClick={()=>handleInc(7)}/></td>
        <td><Button title={moves[8]} onClick={()=>handleInc(8)}/></td>
      </tr>
    </table>
  
    <button className='reset' onClick={reset}>RESET</button>
  </div>
  );
}

export default App;
