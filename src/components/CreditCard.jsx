import React from 'react'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    const style = {backgroundColor:`${bgColor}`, color: `${color}`,width:'400px',height:'150px' }

  
  const cardNumber = "•••• •••• •••• " + number.slice(-4)
    return (
    <div style={style}>
        <img alt={owner} width="50" src=
        {type ==="Visa" ? visa
        : type ==="Master Card"  ? mastercard
        : ""}
        ></img>

        {cardNumber} {bank}
        

        Expires {expirationMonth}/{expirationYear}
        {owner}

    </div>
  )
}

export default CreditCard