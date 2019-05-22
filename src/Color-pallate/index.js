import React, { useState } from "react";
import Color from './Color'

const ColorPallate = () => {

  const [coloring,setColoring]=useState("blue")
  const [colors,setColor]=useState(
    [{color:"blue",isSelect:true},
    {color:"orange",isSelect:false},
    {color:"purple",isSelect:false},
    {color:"red",isSelect:false},
    {color:"#303f9f",isSelect:false},
    {color:"#00838f",isSelect:false},
    {color:"#ef6c00",isSelect:false},
    {color:"#795548",isSelect:false},
    {color:"#33691e",isSelect:false},
    {color:"#616161",isSelect:false},
    {color:"#880e4f",isSelect:false},
    {color:"#006064",isSelect:false}])
    const [visible,setVisible]=useState(false)

    const hadleSelect=(index)=>{
      const item=[...colors];
      const prevIndex=item.findIndex(e=>e.isSelect);
      if(prevIndex>=0){
          item[prevIndex].isSelect=false;
      }
      
      item[index].isSelect=!item[index].isSelect;
      setColor(item);
      setColoring(item[index].color);
      setVisible(!visible)
    }
  
 
  
          return (
             <div>
                <button  style={{background:coloring,outline:'none',border:'none',height:42,width:30}} onClick={()=>setVisible(!visible)}>
                </button>
              {visible?<Color  colors={colors} hadleSelect={hadleSelect}/>:null}
             </div>
          );
};

export default ColorPallate;
