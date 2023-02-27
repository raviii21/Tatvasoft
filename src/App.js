import React,{ useState } from 'react'
import './App.css'; 
import Title from './Components/Title' 
import Home from './Components/Home' 
import Counter from './Components/Counter'; 
import About from './Components/About';


function App() {  

  const [isHome,setIsHome] = useState(1);
  const clickHandler=()=>{
    setIsHome((preState=>!preState));
  }

  let disc = "";

  if(isHome){
    disc="Go to About page.";
  }
  else{
    disc="Go to Home page.";
  } 

  return (
    <div className="App">
       {/* <Title text="Good Morning" /> 
       <Title text="Good Afternoon" />
       <Title text="Good Night" /> 
       <Home text="Goood !!!" />  */}
       {isHome? <Home />:<About />}
       <button onClick={clickHandler}> { disc } </button>
       <Counter />  
    </div>
  );
}

export default App; 
