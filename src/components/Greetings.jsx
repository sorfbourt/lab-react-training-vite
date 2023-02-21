import React from 'react'

function Greetings(props) {
 
    return ( 
    <div>
        {props.lang ==="de" ? "Hallo"
        : props.lang ==="fr"  ? "Bonjour"
        : props.lang ==="en"  ? "Hello"
        : props.lang ==="es"  ? "Hola"
        : "Hi"} {props.children}
    </div>
  )
}

export default Greetings