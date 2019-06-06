import React, { useState, useEffect} from 'react'
import Color from './Check-Color'
import ColorLens from '@material-ui/icons/ColorLens'
import PropTypes from 'prop-types'

export const CheckColorPallate = (props) => {
  const [coloring, setColoring] = useState('grey')
  const [colors, setColor] = useState(
    [{color: '#4B7DF2', isSelect: false},
      {color: '#EA8875', isSelect: false},
      {color: '#81543D', isSelect: false},
      {color: '#6DB448', isSelect: false},
      {color: '#54B2E8', isSelect: false},
      {color: '#AE6D55', isSelect: false},
      {color: '#CE405B', isSelect: false},
      {color: '#07889B', isSelect: false},
      {color: '#AB9353', isSelect: false},
      {color: '#008F95', isSelect: false},
      {color: '#F66F00', isSelect: false},
      {color: '#A239CA', isSelect: false}])

  useEffect(() => {
    const index = props.selectedIndex ? props.selectedIndex : 0
    const temp = [...colors]
    temp[index].isSelect = true
    setColoring(temp[index].color)
    props.setColorPallate(temp[index].color, index)
    setColor(temp)
  }, [])
  

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
    setColorPallate(item[index].color, index)
    return item[index].color
  }

  return (
    <div>
      <ColorLens style={{color: coloring, outline: 'none', border: 'none', height: 42, width: 30}} onClick={() => setVisible(!visible)} />
      {visible ? <Color  colors={colors} hadleSelect={(i) => hadleSelect(i, props.setColorPallate)} /> : null}
    </div>
  )
}
CheckColorPallate.proTypes = {
  setColorPallate: PropTypes.func,
  selectedIndex: PropTypes.number
}
