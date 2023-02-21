import React, { useState } from 'react'

function ClickablePicture({img, imgClicked}) {
  const [clickedPicture, setClickedPicture] = useState(false)

    const togglePicture = () =>{
        setClickedPicture(!clickedPicture)
    }


    return (
    <div>

        <img src={clickedPicture === true ? img : imgClicked} onClick={togglePicture}></img>


    </div>
  )
}

export default ClickablePicture