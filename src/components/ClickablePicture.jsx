import React, { useState } from 'react'

function ClickablePicture({img, imgClicked}) {
  const [clickedPicture, setClickedPicture] = useState(false)

    const togglePicture = () =>{
        // clickedPicture === true ? setClickedPicture(true) : setClickedPicture(false)
        setClickedPicture(!clickedPicture)
        console.log(clickedPicture)
        
    }


    return (
    <div>

        <img src={img} onClick={togglePicture}></img>


    </div>
  )
}

export default ClickablePicture