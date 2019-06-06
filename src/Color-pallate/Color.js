import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './Color.css'
class Color extends Component {
  static propTypes = {
    colors: PropTypes.array,
    hadleSelect: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    padding: PropTypes.number,
    borderRadius: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      hover: -1
    }
  }

  hoverOn=(index) => {
    this.setState({ hover: index })
  }
  hoverOff=(index) => {
    this.setState({ hover: index })
  }

  render() {
    const height = this.props.height ? this.props.height : 10
    const width = this.props.width ? this.props.width : 10
    const padding = this.props.padding ? this.props.padding : 8
    const borderRadius = this.props.borderRadius ? this.props.borderRadius : 15
    return (
      <div className={styles.colorpallate_row}>
        { this.props.colors.map((item, index) => (
          <button key={index} onClick={() => this.props.hadleSelect(index)} onMouseEnter={() => this.hoverOn(index)} onMouseLeave={() => this.hoverOff(-1)} style={{background: 'transparent', border: 'none', outline: 'none', padding: padding, marginRight: 0}}>
            <div className={styles.colorpallate_element2} style={{background: ((this.state.hover === index) || item.isSelect) ? item.color : 'white', height: 3 * height + 'px', width: 3 * width + 'px', borderRadius: 2 * borderRadius + 'px'}}>
              <div className={styles.colorpallate_element} style={{ background: item.color, height: height + 'px', width: width + 'px', borderRadius: borderRadius + 'px'}} />
            </div>
          </button>
        ))

        }
      </div>
    )
  }
}

export default Color
