import React, { Component } from 'react'

export default class LifeCycleHook extends Component {
  
  constructor(props) {
    super(props); //Parent class Constructor
    console.log("Constructor ....");
    this.state = {
       name : 'Bhargav'
    }
  }
static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps....");
    return {name :state.name}
}

  f1 = ()=>{
    console.log('I am f1...');
  }
//   componentDidMount() {
//     console.log("componentDidMount...");
// }
    render() {
    console.log("Render....");
    return (
        <>
            <div>LifeCycleHook</div>
            <div> Name is-{this.state.name}</div>
            <button onClick={()=>{this.setState({name:'phani'})}}>changeName</button>
        </>
    )
  }
  componentDidMount() {
    console.log("componentDidMount...");
}
}

