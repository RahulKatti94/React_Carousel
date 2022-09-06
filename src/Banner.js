import { useState } from "react"
export default function Banner() {
    const [value, setValue] = useState("")
    const [fullname, setFullname] = useState ("")

    const changeValue = (e) =>{
          console.log(e.target.value);
         setValue(e.target.value);
    }
    const onSubmit = () =>{
        setFullname(value);
    }
  return (
    <div>
        <h1>Hello {fullname}</h1>
        <input type= "text" placeholder = "enter your name" onChange={changeValue} /> <br /><br />
        <button onClick={onSubmit}>Click me </button>
    </div>
  )
}
