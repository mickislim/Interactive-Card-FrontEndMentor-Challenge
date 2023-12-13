


import React from 'react'
import completeImg from '../images/icon-complete.svg'

const Modal = ({setIsUserActive}) => {
  return (
    <div className=" complete show-complete">
            <section>
               <div className="complete-img"> < img alt='complete' src={completeImg} /></div>
               <h1>THANK YOU!</h1>
               <p>We've added your card details</p>
               <div className="btn-container">
                 <button className="btn" onClick={()=>setIsUserActive(null)}>Continue</button>
               </div>
             
             </section>
            
           </div>
  )
}

export default Modal