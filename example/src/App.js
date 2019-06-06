import React, { Component } from 'react'

import ExampleComponent from 'color-pallate-react'
import {CheckColorPallate} from 'color-pallate-react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      colorSelected:'',
      selectedIndex:0
    }
  }

 setColorPallate =(color,index)=> {
   this.setState({colorSelected:color,selectedIndex:index})
   console.log("selected Color and index",color,index )
  };

  render () {
    console.log("the clors are --",this.state.colorSelected,this.state.selectedIndex)
    return (
      <div>
        <ExampleComponent setColorPallate={this.setColorPallate} height={7} width={7}  borderRadius={20} />
        {/* <CheckColorPallate setColorPallate={this.setColorPallate} selectedIndex={this.state.selectedIndex} /> */}
      </div>
    )
  }
}
