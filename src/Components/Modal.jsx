import React from 'react'
import iconComplete from '../Assets/images/icon-complete.svg'
import { useGlobalContext } from '../Context'

const Modal = () => {

  const {closeModal} =useGlobalContext()
  return (
    <div className="modal">
<div >
  <img src={iconComplete} alt='icon-complete' className="modal-img"/>
</div>

<article>
<h1>  THANK YOU !</h1>
<p>We've added your card details</p>
</article>


<div className="modal-btn-container">
  <button className="continue-btn" onClick={closeModal}>Continue</button>
</div>

</div>
  )
}

export default Modal