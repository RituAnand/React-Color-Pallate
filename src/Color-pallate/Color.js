import React, {Component} from 'react'
import Check from '@material-ui/icons/Check'
import PropTypes from 'prop-types'

import styles from './Color.css'
class Color extends Component {
  static propTypes = {
    colors: PropTypes.array,
    hadleSelect: PropTypes.func
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.colorpallate_row}>
        { this.props.colors.map((item, index) => (
          <button key={index} onClick={() => this.props.hadleSelect(index)} style={{background: 'transparent', border: 'none', outline: 'none', padding: 0, marginRight: 0}}>
            <div className={styles.colorpallate_element} style={{background: item.color}}>
              {item.isSelect
                ? <div className={styles.colorpallate_close}>
                  <Check style={{color: item.color, fontSize: '10px', outline: 'none'}} />
                </div> : null
              }
            </div>
          </button>
        ))

        }
      </div>
    )
  }
}

export default Color
