import React, { Component } from 'react'

class Counter extends Component { 

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      };

      this.clickHandler = this.clickHandler.bind(this);
    } 
    clickHandler(){
        this.setState({
          count : this.state.count + 1
        });
    }
    
  render() {
    return (
      <>
        <h1> Count is : {this.state.count}</h1> 
        <button onClick={this.clickHandler}>Increment</button>
      </>
    );
  }
}

export default Counter;

