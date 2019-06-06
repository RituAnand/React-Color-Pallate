# color-pallate-react

> To apply the color(There are 2 types of pallates)
> This library is small example of how selected color from color-pallate and it returns the selected Color.

[![NPM](https://img.shields.io/npm/v/color-pallate-react.svg)](https://www.npmjs.com/package/color-pallate-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save color-pallate-react 
or
yarn add color-pallate-react
```
### Props
```bash
PROPNAME           PROPTYPE

setColorPallate    funtion 
selectedIndex      number 
height             number
width              number
padding            number
borderRadius       number
```

## Pallate-1

```jsx
import React, { Component } from 'react'

import ExampleComponent from 'color-pallate-react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      colorSelected:'',
      selectedIndex:0
    }
  }

 setColorPallate =(color)=> {
   this.setState({colorSelected:color,selectedIndex:index})
   console.log("selected Color",color)
  };

  render () {
    console.log("the color and index are --",this.state.colorSelected,this.state.selectedIndex)//to see the output
    return (
      <div>
        //  If props are not sent then default props are sent
         <ExampleComponent setColorPallate={this.setColorPallate} />
        // If props are sent
         <ExampleComponent setColorPallate={this.setColorPallate} height={7} width={7} padding={15} borderRadius={20} selectedIndex={this.state.selectedIndex}/>
      </div>
    )
  }
}
```

### Props
```bash
PROPNAME           PROPTYPE

setColorPallate    funtion 
selectedIndex      number 
```

## Pallate-2

```jsx
import React, { Component } from 'react'

import {CheckColorPallate} from 'color-pallate-react'

export default class Pallate extends Component {
  constructor(props){
    super(props)
    this.state={
     colorSelected:'',
      selectedIndex:0
    }
  }

 setColorPallate =(color)=> {
   this.setState({colorSelected:color,selectedIndex:index})
   console.log("selected Color",color)
  };

  render () {
    console.log("the color and index are --",this.state.colorSelected,this.state.selectedIndex)//to see the output
    return (
      <div>
        <CheckColorPallate setColorPallate={this.setColorPallate} selectedIndex={this.state.selectedIndex}/>
      </div>
    )
  }
}
```

## License

MIT © [RituAnand](https://github.com/RituAnand)
