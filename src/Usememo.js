import { useState, useMemo } from "react"

export default function Usememo() {

    const [state, setState] = useState(0)
    const [logo, setLogo] = useState(10)

    const countMemo = useMemo(
        function multiPly () {
            console.log ("multiPly")
             return state*10
         },[state] )
    

    // function multiPly () {
    //     console.warn("multiPly")
    //      return state*10
    // }
  return (
    <div>
        <h1>Use Memo Hooks</h1>
        <h2> State :{state}</h2>
        <button onClick={()=>setState (state +1)} >click me </button><br />
        <h2> logo : {logo}</h2>
        <button onClick={()=> setLogo (logo +1)}> update count </button> <br />
        <h2> Multiply Function  : {countMemo}</h2>
    </div>
  )
}
