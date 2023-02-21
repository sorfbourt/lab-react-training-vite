import React from 'react';
import { useState } from 'react';

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const [colours, setColours] = useState([
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ]);
  const [buttonColor, setbuttonColor] = useState(colours[0]);
  const buttonStyle = { backgroundColor: `${buttonColor}` };

  const addLike = () => {
    setLikeCount(likeCount + 1);
    console.log(colours, 'first');
    colours.push(colours[0]);
    console.log(colours, 'after push');

    colours.splice(0, 1);
    console.log(colours, 'after slice');

    setbuttonColor(colours[0]);

    //setbuttonColor(colours[0+likeCount])
  };
  return (
    <div>
      <button onClick={addLike} style={buttonStyle}>
        {likeCount} Likes
      </button>
    </div>
  );
}

export default LikeButton;