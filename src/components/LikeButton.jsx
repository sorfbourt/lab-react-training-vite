import React from 'react'
import { useState } from 'react'

function LikeButton() {
const [likeCount, setLikeCount] = useState(0)
let colours = ['purple','blue','green','yellow','orange','red']
const [buttonColor, setbuttonColor] = useState(colours[0])
const buttonStyle = {backgroundColor: `${buttonColor}`}

const addLike = () =>{
    setLikeCount(likeCount + 1)
    
    const randomColour = Math.floor(Math.random() * (colours.length - 0) + 0)
    setbuttonColor(colours[randomColour])
}
  return (
    <div>

    <button onClick={addLike} style={buttonStyle}>{likeCount} Likes</button>

    </div>
  )
}

export default LikeButton