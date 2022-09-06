import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props){
    super(props)

    this.state = {
        hasError :  false
    }
}
 
// Method 1
    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    // method 2
    componentDidCatch (error, info){
        console.log(error)
        console.log(info)
        // alert(error)
        // alert(info)

        prompt(error)
        prompt(info)
    }   
  render() {
    
     if(this.state.hasError){
        
        return <h1> SOMETHING WENT WRONG</h1>
     }
     return this.props.children
    
  }
}

export default ErrorBoundary