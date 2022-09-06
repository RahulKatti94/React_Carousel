import { useState } from "react"
export default function State() {
    const [value, setValue] = useState("")
    const [state,setState] = useState ("")

    const changeValue = (e) =>{
        // console.log(value)
        console.log(e.target.value)
         setValue(e.target.value);
    }

    const onSubmit = () =>{         
            
            setState (value)
    } 
  return (
    <div>
        <h1> Hello {state}</h1>
        <input type="text" placeholder="enter your value " onChange={changeValue} /> <br />
        <button type="button" onClick={onSubmit}>Click me </button>
    </div>
  )
}
