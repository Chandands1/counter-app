import { useState } from "react"

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}





function Counter(){
  const[count, setCount] = useState(0);

  function increase(){
    setCount(count +1);
  }
  function decrese(){
    setCount(count -1);
  }

  function reset(){
    setCount(0);
  }


  return(
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrese}>Decrease</button>
       <button onClick={reset}>Reset</button>
    </div>
  )

}


export default App
