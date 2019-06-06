import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pallate from './Color-pallate'

export {CheckColorPallate} from './Check-Color-pallate'

export default class ExampleComponent extends Component {
  static propTypes = {
    setColorPallate: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    padding: PropTypes.number,
    borderRadius: PropTypes.number,
    selectedIndex: PropTypes.number
  }
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    const {setColorPallate, height, width, padding, borderRadius, selectedIndex} = this.props
    return (
      <div >
        <Pallate setColorPallate={setColorPallate} height={height} width={width} padding={padding} borderRadius={borderRadius} selectedIndex={selectedIndex} />
      </div>
    )
  }
}
