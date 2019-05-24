# color-pallate-react

> Selecting Color from pallate 1. Use- To apply the color 2. There are 12  Colors in this package. 3. This is written in funtional Component. 4. Here the concepts of react-hooks has been used. 5. This library is small example of how selected color from color-pallate can be applied to the button.

[![NPM](https://img.shields.io/npm/v/color-pallate-react.svg)](https://www.npmjs.com/package/color-pallate-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save color-pallate-react
```
### Props
```setColorPallate funtion ```
## Usage

```jsx
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
```

## License

MIT © [RituAnand](https://github.com/RituAnand)
