

import React from 'react'
import back from '../images/bg-card-back.png'
import logo from '../images/card-logo.svg'

const Card = ({user,isUserActive,username, cardNumber,expMonth,expYear,cvc}) => {
  return (
    
    <div className="card-grid">
      <div className="card-container">
           <img src={back} id="img" alt="Card Back" />
           <div className="cvc-number">
             {isUserActive? <h4>{cvc}</h4> : <h4>000</h4>}
           </div>
  
          
             <div className="front">
               <div className="front-details">
                 <div>
                   <img src={logo} width="60px" alt="Card Logo" />
                 </div>
  
            <div className="front-number">
                   {isUserActive? <h2>{cardNumber}</h2>   : <h2> 0000 0000 0000 0000</h2>}
                 </div>
                 <div className="front-text">
                 {isUserActive ?  <h4>{username.toUpperCase()} </h4> : <h4>JANE APPLESEED</h4>}
                  
                   {isUserActive? <h4> {expMonth.length < 2? '0' + expMonth : expMonth} / {expYear.length < 2? '0' + expYear : expYear} </h4> : <h4>00 / 00 </h4> } 
                  
                 </div>
               </div>
             </div>
         
         </div>
    </div>
  )
}

export default Card