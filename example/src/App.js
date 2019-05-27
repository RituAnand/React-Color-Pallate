import React, { Component } from 'react'

import ExampleComponent from 'color-pallate-react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      color:''
    }
  }

 setColorPallate =(color)=> {
   console.log("selected Color",color)
  };

  render () {
    return (
      <div>
        <ExampleComponent setColorPallate={this.setColorPallate} />
      </div>
    )
  }
}
