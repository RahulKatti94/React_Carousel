import { useState } from "react"
export default function Hoc() {
  return (
    <div>
        <h1>HOC Components</h1>
        {/* <Counter /> */}
    <HocRed cmp={Counter} />
    <HocBlue cmp={Counter} />
    <HocGreen cmp={Counter} />
    <HocPurple cmp={Counter} /> 
    </div>
  )
}

function HocRed (props){
    return <h4 style={{backgroundColor :'red', width : 200, height : 200}}> RED<props.cmp /> </h4>
}

function HocBlue (props){
    return <h4 style={{backgroundColor :'blue', width : 200, height : 200}}> BLUE<props.cmp /> </h4>
}
function HocGreen (props){
    return <h4 style={{backgroundColor :'green', width : 200, height : 200}}> GREEN<props.cmp /> </h4>
}
function HocPurple (props){
    return <h4 style={{backgroundColor :'purple', width : 200, height : 200}}>purple<props.cmp /> </h4>
}

function Counter (){    
    const [value,setValue] = useState(0)
    return  (<div>
        <h3>{value}</h3>
        <button onClick={()=>setValue (value +1)}>Update Me</button>
    </div>

    )
}