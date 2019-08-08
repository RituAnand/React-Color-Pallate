import React, { Component } from 'react'

import ExampleComponent from 'color-pallate-react'
import {CheckColorPallate} from 'color-pallate-react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      colorSelected:'',
      selectedIndex:0,
      colours:[{color: '#98AAB3', isSelect: false},
      {color: '#8F7EE6', isSelect: false},
      {color: '#00AAFF', isSelect: false},
      {color: '#30BFBF', isSelect: false},
      {color: '#47CC8A', isSelect: false},
      {color: '#8ACC47', isSelect: false},
      {color: '#FFD500', isSelect: false},
      {color: '#FF9F1A', isSelect: false}
    ]
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
        <ExampleComponent setColorPallate={this.setColorPallate} height={7} width={7}  borderRadius={20} colours={this.state.colours}/>
        {/* <CheckColorPallate setColorPallate={this.setColorPallate} selectedIndex={this.state.selectedIndex} /> */}
      </div>
    )
  }
}
