import { useState, useCallback } from "react"
import Usecall from "./Usecall";

const Usecallback = () => {

    const [state,setState] = useState(0)
    const [count, setCount ] = useState (0)
    const back = useCallback (
        () =>{
            // Some arguments 
        },
    [count])
  return (
    <div>
        <h1>Use callback hooks for memoized function </h1>
        <h1>{state}</h1>
        <button onClick={()=>setState(state +1 )}> Addition  </button> 
        <Usecall back ={back} count = {count} />
        <h1>{count}</h1>
        <button onClick={()=> setCount (count +2)}>Click me</button>
    </div>  
  )
}

export default Usecallback;