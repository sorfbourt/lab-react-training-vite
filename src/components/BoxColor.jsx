import React from 'react'

function BoxColor({r, g, b}) {

const  backgroundColor = {backgroundColor: `rgb(${r}, ${g}, ${b})`}
  return (
    <div style={backgroundColor}>

       rgb({r}, {g}, {b}) 

    </div>
  )
}

export default BoxColor