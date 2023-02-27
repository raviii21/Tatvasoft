import React, { Component } from 'react'  
import Title from './Title'


class home extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome to My page!",
            discription: "This is a react tutorial for beginner.",
        }

    }
    render(){
        return( 
        <> 
          {/* <h1>{this.state.title}</h1> 
          <p>{this.state.discription}</p>  */}
          {/* <Title title={this.state.title} discription={this.state.discription} /> */} 
          <h1>Home Page</h1>
          <p>this is Home Page..</p>
        </>
        );
    }
}

export default home;