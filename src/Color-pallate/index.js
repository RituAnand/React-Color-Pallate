import React, { useState, useEffect } from 'react'
import Color from './Color'
import PropTypes from 'prop-types'

const ColorPallate = (props) => {
  const [colors, setColor] = useState(props.colours ? props.colours :
    [{color: '#98AAB3', isSelect: false},
      {color: '#8F7EE6', isSelect: false},
      {color: '#00AAFF', isSelect: false},
      {color: '#30BFBF', isSelect: false},
      {color: '#47CC8A', isSelect: false},
      {color: '#8ACC47', isSelect: false},
      {color: '#FFD500', isSelect: false},
      {color: '#FF9F1A', isSelect: false}
    ])

  useEffect(() => {
    const index = props.selectedIndex ? props.selectedIndex : 0
    const temp = [...colors]
    temp[index].isSelect = true
    props.setColorPallate(temp[index].color, index)
    setColor(temp)
  }, [])
  
  const hadleSelect = (index, setColorPallate) => {
    const item = [...colors]
    const prevIndex = item.findIndex(e => e.isSelect)
    if (prevIndex >= 0) {
      item[prevIndex].isSelect = false
    }

    item[index].isSelect = !item[index].isSelect
    setColor(item)
    setColorPallate(item[index].color, index)
    return item[index].color
  }

  return (
    <div>
      <Color  colors={colors} hadleSelect={(i) => hadleSelect(i, props.setColorPallate)} height={props.height} width={props.width} padding={props.padding} borderRadius={props.borderRadius} />
    </div>
  )
}
ColorPallate.proTypes = {
  setColorPallate: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.number,
  borderRadius: PropTypes.number,
  selectedIndex: PropTypes.number,
  colours: PropTypes.object
}
export default ColorPallate
