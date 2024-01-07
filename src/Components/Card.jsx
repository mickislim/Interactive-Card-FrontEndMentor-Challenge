import React from 'react'
import cardBack from '../Assets/images/bg-card-back.png'
import cardlogo from '../Assets/images/card-logo.svg'
import { useGlobalContext } from '../Context'


const Card = () => {
const {user, isUserActive}=useGlobalContext()
  return (
    <section className="card">
      
  <div className="cardback">
    <div className="card-positioning">
      <div className="card-back-container">
        <img src={cardBack} alt='cardback' className="card-back"/>

      
      </div>




      <div className="card-front-bg">

        <div className="logo-img">
          <img src={cardlogo} alt='cardlogo' className="logo"/>
        </div>
 {isUserActive? (  <article > 

  
 <h1>{user.cardNumber} </h1> 

<div className="user-detail"> 
<h2>{user.cardHolder.toUpperCase()}</h2>
<h2>{user.expMonth.length < 2? '0' + user.expMonth : user.expMonth}/{user.expYear.length < 2? '0' + user.expYear : user.expYear}</h2>

</div>
<div className="cvc-number">
<h1>{user.cvcNumber}</h1> 

</div>




</article> ): (
<article >
  <h1>0000 0000 0000 0000</h1>

<div className="user-detail"> <h2>JANE APPLESEED</h2>
  <h2>00/00</h2></div>

  <div className="cvc-number">
    <h1>000</h1>
  </div>
   
  
</article>)}
 


      </div>

  

    </div>
   
  </div>
</section>
  )
}

export default Card