import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Pallate from './Color-pallate'

export default class ExampleComponent extends Component {
  static propTypes = {
    setColorPallate: PropTypes.func
  }
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
        <Pallate setColorPallate={this.props.setColorPallate} />
      </div>
    )
  }
}
