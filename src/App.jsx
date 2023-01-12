import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
const App=()=>{

const [num, setnum]=useState(0);
//const [deCrease, setDecrease]= useState("value");



const incByone=()=>{
setnum(num +1);
//console.log("plus");

};

const decByone=()=>{
   if(num>0){
     setnum(num-1);
}else
{
    alert('it cannot be less than zero')
    setnum(0);
}
};


    return(
        <>
        <h1>{num}</h1>
        

        <button onClick={incByone}><AddIcon/></button>
        <button onClick={decByone}>Deccrement</button>
        </>
    );
}
export default App;