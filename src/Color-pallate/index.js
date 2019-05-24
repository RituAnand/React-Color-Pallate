/* eslint-disable react/self-closing-comp */
/* eslint-disable no-multi-spaces */
import React, { useState } from 'react'
import Color from './Color'
import ColorLens from '@material-ui/icons/ColorLens'
import PropTypes from 'prop-types'

const ColorPallate = (props) => {
  const [coloring, setColoring] = useState('grey')
  const [colors, setColor] = useState(
    [{color: '#4B7DF2', isSelect: true},
      {color: '#EA8875', isSelect: false},
      {color: '#81543D', isSelect: false},
      {color: '#6DB448', isSelect: false},
      {color: '#54B2E8', isSelect: false},
      {color: '#00838f', isSelect: false},
      {color: '#ef6c00', isSelect: false},
      {color: '#d92626', isSelect: false},
      {color: '#5e495a', isSelect: false},
      {color: '#616161', isSelect: false},
      {color: '#880e4f', isSelect: false},
      {color: '#e96058', isSelect: false}])
  const [visible, setVisible] = useState(false)

  const hadleSelect = (index, setColorPallate) => {
    const item = [...colors]
    const prevIndex = item.findIndex(e => e.isSelect)
    if (prevIndex >= 0) {
      item[prevIndex].isSelect = false
    }

    item[index].isSelect = !item[index].isSelect
    setColor(item)
    setColoring(item[index].color)
    setVisible(!visible)
    setColorPallate(item[index].color)
    return item[index].color
  }

  return (
    <div>
      <ColorLens style={{color: coloring, outline: 'none', border: 'none', height: 42, width: 30}} onClick={() => setVisible(!visible)} />
      {visible ? <Color  colors={colors} hadleSelect={(i) => hadleSelect(i, props.setColorPallate)}  /> : null}
    </div>
  )
}
ColorPallate.proTypes = {
  setColorPallate: PropTypes.func
}
export default ColorPallate
